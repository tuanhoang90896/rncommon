import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screen/home/components';
import TueDev from '../screen/tue_dev/components';

const Stack = createStackNavigator();

function AppStack() {
    const containerStack = (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="TueDev" component={TueDev} />
        </Stack.Navigator>
    )

    return containerStack;
}

export default AppStack;