import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/home/components';
import TueDev from '../screen/tue_dev/components';
import GoogleLogin from "../screen/common/googleLogin/components";
import FacebookLogin from "../screen/common/facebookLogin/components";
import PushNotification from "../screen/common/pushNotification/components";

import DangDev from '../screen/dangDev/components';
import ScanQRPage from '../screen/common/qr-scan/components';
import appMap from '../screen/common/react-native-maps/components';


const Stack = createStackNavigator();

function AppStack() {
    const containerStack = (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TueDev" component={TueDev} />
            <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
            <Stack.Screen name="FacebookLogin" component={FacebookLogin} />
            <Stack.Screen name="PushNotification" component={PushNotification} />
            <Stack.Screen name="Dang Dev" component={DangDev} />
            <Stack.Screen name="Scan QR Code" component={ScanQRPage} />
            <Stack.Screen name="Map" component={appMap} />
        </Stack.Navigator>
    )
    return containerStack;
}

export default AppStack;