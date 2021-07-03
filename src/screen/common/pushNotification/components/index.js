import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const PushNotification = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Foreground state messages
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#F5FCFF'}}>
        {/* <Text>Hel</Text> */}
    </View>
  );
};

export default PushNotification;

