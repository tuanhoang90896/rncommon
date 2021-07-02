import React, {useState, useEffect} from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import DemoAlert from "../../common/alert/components";
import { useHome } from "../actions/useHome";
import messaging from '@react-native-firebase/messaging';

const HomePage = (props) => {
    const navigation = useNavigation();
    const { route } = props;
    const { createAction, openTueDemo } = useHome();

    useEffect(() => {
        // Assume a message-notification contains a "type" property in the data payload of the screen to open
        messaging().onNotificationOpenedApp(remoteMessage => {
          console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
          );
          navigation.navigate(remoteMessage.data.type);
        });
    
        // Check whether an initial notification is available
        messaging()
          .getInitialNotification()
          .then(remoteMessage => {
            if (remoteMessage) {
              console.log(
                'Notification caused app to open from quit state:',
                remoteMessage.notification,
              );
              // setInitialRoute(remoteMessage.data.type); // e.g. "Setting"
              navigation.navigate(remoteMessage.data.type);
            }
            // setLoading(false);
          });
      }, []);

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <DemoAlert />
            <View style={{ padding: 16 }}>
                <Button
                    onPress={() => {
                        openTueDemo();
                    }}
                    buttonStyle={{ width: '100%' }}
                    title="Tuệ Dev"
                    type="outline"
                />
            </View>
        </View>
    );
};

export default HomePage;
