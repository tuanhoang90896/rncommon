import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import DemoAlert from '../../common/alert/components';
import { useHome } from '../actions/useHome';
import ScanQRPage from '../../common/qr-scan/components';
const HomePage = (props) => {
    const navigation = useNavigation();
    const { route } = props;
    const { createAction } = useHome();
    return (
        <View style={{ flex: 1, padding: 16 }}>
            {/* <DemoAlert /> */}
            <Button title="Dang Dev" type="outline" onPress={() =>{
                navigation.navigate('Dang Dev');                
            }} />
        </View>
    );
};

export default HomePage;