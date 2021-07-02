import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import OneSignal from 'react-native-onesignal';

const PushNotification = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestUserPermission();
    // Foreground state messages
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      getFcmToken(); //<---- Add this
      console.log('Authorization status:', authStatus);
    }
  };

  getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
      console.log('Your Firebase Token is:', fcmToken);
    } else {
      console.log('Failed', 'No token received');
    }
  };

    //OneSignal Init Code
    OneSignal.setLogLevel(6, 0);
    OneSignal.setAppId('7ce0a9eb-d12a-4ac6-bc1f-f7c3c464e263');
    //END OneSignal Init Code
  
    //Prompt for push on iOS
    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      console.log('Prompt response:', response);
    });
  
    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );
  
    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });

  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#F5FCFF'}}>
        {/* <Text>Hel</Text> */}
    </View>
  );
};

export default PushNotification;

