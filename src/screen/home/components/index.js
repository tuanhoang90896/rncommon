import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import DemoAlert from '../../common/alert/components';
import { useHome } from '../actions/useHome';

const HomePage = (props) => {
    const navigation = useNavigation();
    const { route } = props;
    const { createAction } = useHome();

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <DemoAlert />
        </View>
    );
};

export default HomePage;