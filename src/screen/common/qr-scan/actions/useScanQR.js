/* eslint-disable prettier/prettier */
import { Alert, Button, Text, View } from 'react-native';
import styles from '../components/css';
import React from 'react';
import {RNCamera} from 'react-native-camera';

const barCode = [];
export const UseScanQR = () => {
  const OnBarCodeRead = (scanResult) => {
    if (scanResult.data != null) {
      if (!barCode.includes(scanResult.data)) {
        console.log(scanResult.type);
        console.log(scanResult.data);
        Alert.alert(scanResult.data);
        barCode.push(scanResult.data);
      }
    }
  };
  return {
    OnBarCodeRead,
  };
};

export const resetScan = () => {
  const resetScanQr = () => {
    console.log('Reset clicked');
    console.log(barCode);
    barCode.splice(0, barCode.length);
    console.log(barCode);
  };
  return {
    resetScanQr,
  };
};

export const useScanScreen = () => {
  const {OnBarCodeRead} = UseScanQR();
  const showScanScreen = () => {    
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
  };
  return {
    showScanScreen,
  };
};
