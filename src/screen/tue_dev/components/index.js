import React,  {useState, useEffect} from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const TueDev = (props) => {
    const navigation = useNavigation();
    const { route } = props;

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <View style={{ padding: 16 }}>
                <Button
                    onPress={() => {
                        navigation.navigate('GoogleLogin')
                    }}
                    buttonStyle={{ width: '100%' }}
                    title="Google Login"
                    type="outline"
                />
            </View>
            <View style={{ padding: 16 }}>
                <Button
                    onPress={() => {
                        navigation.navigate('FacebookLogin')
                    }}
                    buttonStyle={{ width: '100%' }}
                    title="Facebook Login"
                    type="outline"
                />
            </View>
            <View style={{ padding: 16 }}>
                <Button
                    onPress={() => {
                        navigation.navigate('PushNotification')
                    }}
                    buttonStyle={{ width: '100%' }}
                    title="Push Notification"
                    type="outline"
                />
            </View>
        </View>
    );
};

export default TueDev;
