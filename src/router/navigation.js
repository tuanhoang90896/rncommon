import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/home/components';
import DangDev from '../screen/dangDev/components';
import ScanQRPage from '../screen/common/qr-scan/components';
import appMap from '../screen/common/react-native-maps/components';
const Stack = createStackNavigator();

function AppStack() {
    const containerStack = (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Dang Dev" component={DangDev} />
            <Stack.Screen name="Scan QR Code" component={ScanQRPage} />
            <Stack.Screen name="Map" component={appMap} />
        </Stack.Navigator>
    )
    return containerStack;
}

export default AppStack;