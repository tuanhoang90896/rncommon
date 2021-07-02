import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert, Image} from 'react-native';
import { Button } from "react-native-elements";
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class GoogleSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      error: null,
    };
  }

  async componentDidMount() {
    this._configureGoogleSignIn();
    await this._getCurrentUser();
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId:
        '1093201509765-0ngn5ng9hk6h2cojmerci9sveb5vrq4c.apps.googleusercontent.com',
      offlineAccess: false,
    });
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

  render() {
    const {userInfo} = this.state;
    console.log("User: "+JSON.stringify(userInfo?.user.name))

    return (
      <View style={[styles.container]}>
        {(!userInfo) ? (<Icon.Button
          name="google-plus"
          backgroundColor="red"
          onPress={() => this._signIn()}>
          Đăng nhập Google
        </Icon.Button>) 
        : (<View style={{alignSelf: 'flex-start', padding: 30, paddingBottom: 20}}>
            <Image source={{uri: this.state.userInfo?.user.photo}} style={{ width: 100, height: 100}}></Image>
            <Text style={styles.textStyle}>Name: {this.state.userInfo?.user.name}</Text> 
            <Text style={styles.textStyle}>Email: {this.state.userInfo?.user.email}</Text> 
            <Text style={styles.textStyle}>ID: {this.state.userInfo?.user.id}</Text> 
          </View> )
        }
        {userInfo && 
          <View  style={{ width: '30%', alignSelf: 'center'}}>
            <Button
              onPress={async () => {
                const isSignedIn = await GoogleSignin.getTokens();
                Alert.alert('tokens', JSON.stringify(isSignedIn));
              }}
              title="Get tokens"
              type="outline"
            />
            <View style={{height: 15}}></View>
            <Button onPress={this._signOut} title="Log out" type="outline" />
            {this.renderError()}
          </View>
        }
      </View>
    );
  }

  renderError() {
    const {error} = this.state;
    if (!error) {
      return null;
    }
    const text = `${error.toString()} ${error.code ? error.code : ''}`;
    return <Text>{text}</Text>;
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo, error: null});
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // sign in was cancelled
          Alert.alert('cancelled');
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          Alert.alert('in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // android only
          Alert.alert('play services not available or outdated');
          break;
        default:
          Alert.alert('Something went wrong', error.toString());
          this.setState({
            error,
          });
          console.log(error);
      }
    }
  };

  _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      this.setState({userInfo: null, error: null});
    } catch (error) {
      this.setState({
        error,
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',  
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  userInfo: {fontSize: 18, fontWeight: 'bold', marginBottom: 20},
  //   pageContainer: {flex: 1},
  textStyle: {
    fontSize: 16,
    paddingVertical: 5
  }
});
