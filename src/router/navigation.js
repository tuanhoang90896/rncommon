import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screen/home/components';

const Stack = createStackNavigator();

function AppStack() {
    const containerStack = (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )

    return containerStack;
}

export default AppStack;