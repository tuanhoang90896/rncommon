import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screen/home/components';
import TueDev from '../screen/tue_dev/components';
import GoogleLogin from "../screen/common/googleLogin/components";
import FacebookLogin from "../screen/common/facebookLogin/components";
import PushNotification from "../screen/common/facebookLogin/components";

const Stack = createStackNavigator();

function AppStack() {
    const containerStack = (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TueDev" component={TueDev} />
            <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
            <Stack.Screen name="FacebookLogin" component={FacebookLogin} />
            <Stack.Screen name="PushNotification" component={PushNotification} />
        </Stack.Navigator>
    )

    return containerStack;
}

export default AppStack;