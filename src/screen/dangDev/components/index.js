import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const DangDev = (props) => {
    const navigation = useNavigation();
    const { route } = props;
    return (
        <View style={{ flex: 1, padding: 16}}>
            <Button title="Scan Qr Code" type="outline" onPress={() =>{
                navigation.navigate("Scan QR Code");                     
            }} />
            <Button buttonStyle={{marginTop:16}} title="Map" type="outline" onPress={() =>{
                navigation.navigate("Map");                 
            }} />
        </View>
    );
};

export default DangDev;