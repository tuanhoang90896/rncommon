import React, { Component } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    Button,
} from "react-native";
import {
    ShareDialog,
    AccessToken,
    Profile,
    LoginManager,
} from "react-native-fbsdk-next";
import Icon from "react-native-vector-icons/FontAwesome";

const SHARE_LINK_CONTENT = {
    contentType: "link",
    contentUrl: "https://www.facebook.com/",
};

export default class FacebookLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginFacebook: false
        };
    }

    async _getCurrentUser() {
        try {
          const userInfo = await GoogleSignin.signInSilently();
          this.setState({userInfo, error: null});
        } catch (error) {
          const errorMessage =
            error.code === statusCodes.SIGN_IN_REQUIRED
              ? 'Please sign in :)'
              : error.message;
          this.setState({
            error: new Error(errorMessage),
          });
        }
      }

    _shareLinkWithShareDialog = async () => {
        const canShow = await ShareDialog.canShow(SHARE_LINK_CONTENT);
        if (canShow) {
            try {
                const { isCancelled, postId } = await ShareDialog.show(
                    SHARE_LINK_CONTENT
                );
                if (isCancelled) {
                    Alert.alert("Share cancelled");
                } else {
                    Alert.alert("Share success with postId: " + postId);
                }
            } catch (error) {
                Alert.alert("Share fail with error: " + error);
            }
        }
    };

    getFbInfo = () => {
        Profile.getCurrentProfile()
            .then((currentProfile) => {
                if (currentProfile) {
                    if(this.state.isLoginFacebook){
                        Alert.alert("User Info", JSON.stringify(currentProfile));
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    loginWithFacebook = async () => {
        await LoginManager.logInWithPermissions(["public_profile"]).then(
            (result) => {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    console.log(
                        "Login success with permissions: " +
                            result.grantedPermissions.toString()
                    );
                }
            },
            function (error) {
                console.log("Login fail with error: " + error);
            }
        );
        this.setState({ isLoginFacebook: true });
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._shareLinkWithShareDialog} style={{backgroundColor: '#0e8ef1' , borderRadius: 10, marginBottom: 10}}>
                    <Text style={styles.shareText}>
                        Share link with ShareDialog
                    </Text>
                </TouchableOpacity>

                {this.state.isLoginFacebook == false ? (
                <View style={{marginBottom: 10,}}>
                    <Icon.Button
                    name="facebook"
                    backgroundColor="#0e8ef1"
                    onPress={() => this.loginWithFacebook()}>
                    Đăng nhập bằng Facebook
                    </Icon.Button>
                </View>
                ) : (
                <View style={{marginBottom: 10}}>
                    <Button
                    title="Đăng xuất Facebook"
                    onPress={() => {
                        LoginManager.logOut();
                        this.setState({isLoginFacebook: false});
                    }}
                    />
                </View>
                )}
                {/* {this.state.isLoginFacebook &&  */}
                    <Button title="Get Info FB" onPress={() => this.getFbInfo()} />
                {/* } */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: '#F5FCFF',
    },
    shareText: {
        fontSize: 20,
        margin: 10,
        color: 'white'
    },
});
