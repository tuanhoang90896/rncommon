import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useAlert } from '../actions/useAlert';

const DemoAlert = (props) => {
    const navigation = useNavigation();
    const { route } = props;
    const { showAlert } = useAlert();

    return (
        <View style={{ padding: 16 }}>
            <Button
                onPress={() => {
                    showAlert();
                }}
                buttonStyle={{ width: '100%' }}
                title="Show Alert"
                type="outline"
            />

        </View>
    );
}

export default DemoAlert;