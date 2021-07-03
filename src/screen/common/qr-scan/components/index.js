/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useScanScreen } from '../actions/useScanQR';
import { useNavigation } from '@react-navigation/native';
import { UseScanQR } from '../actions/useScanQR';
import styles from './css';
import { RNCamera } from 'react-native-camera';
import { resetScan } from '../actions/useScanQR';

const ScanQRPage = (props) => {
  // const {showScanScreen} = useScanScreen();
  const navigation = useNavigation();
  const { route } = props;
  const {OnBarCodeRead} = UseScanQR();
  const {resetScanQr} = resetScan(); 
  return (
    <View style={styles.container}>    
    <RNCamera
      defaultTouchToFocus
      flashMode={RNCamera.Constants.FlashMode.on}
      mirrorImage={false}
      onBarCodeRead={OnBarCodeRead.bind(this)}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      style={styles.preview}
      type={RNCamera.Constants.Type.back}
    />
    <View style={[styles.overlay, styles.topOverlay]}>
      <Text style={styles.scanScreenMessage}>Please scan the barcode.</Text>
    </View>
    <View style={[styles.overlay, styles.bottomOverlay]}>
      <Button
        onPress={() => {
          resetScanQr();
        }}
        style={styles.enterBarcodeManualButton}
        title="Reset Scan QR Code"
      />
    </View>
  </View>
  );
};
export default ScanQRPage;