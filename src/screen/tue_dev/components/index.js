import React from "react";
import { View } from "react-native";
// import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import GoogleLogin from "../../common/googleLogin/components";


const TueDev = (props) => {
    const navigation = useNavigation();
    const { route } = props;

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <GoogleLogin/>
        </View>
    );
};

export default TueDev;
