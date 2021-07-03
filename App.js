import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRouter from './src/router/navigation';
import { FirebaseConfig } from './src/firebase/FirebaseConfig';
import { OneSignalConfig } from './src/oneSignal/OneSignalConfig';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
     FirebaseConfig().requestUserPermission();
  }, []);

  OneSignalConfig().setUp();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}