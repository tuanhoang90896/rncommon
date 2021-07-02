/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {View, StyleSheet, Text, Alert} from 'react-native';
 import MapView, {
   Marker,
   Callout,
   Polygon,
   PROVIDER_GOOGLE,
   Circle,
 } from 'react-native-maps';
 
 const styles = StyleSheet.create({
   container: {
     ...StyleSheet.absoluteFillObject,
     height: '100%',
     width: '100%',
     justifyContent: 'flex-end',
     alignItems: 'center',
   },
   map: {
     ...StyleSheet.absoluteFillObject,
   },
 });
 
 export default class appMap extends Component {
   state = {
     coordinates: [
       {name: 'Vi tri 1', latitude: 37.8025259, longitude: -122.4351431},
       {name: 'Vi tri 2', latitude: 37.7896386, longitude: -122.421646},
       {name: 'Vi tri 3', latitude: 37.7665248, longitude: -122.4161628},
       {name: 'Vi tri 4', latitude: 37.7734153, longitude: -122.4577787},
       {name: 'Vi tri 5', latitude: 37.7948605, longitude: -122.4596065},
     ],
   };
   showWelComeMessage() {
     Alert.alert('Welcome to My home', 'My name is Bim', [
       {
         text: 'Cancel',
         style: 'cancel',
       },
       {
         text: 'Yes',
       },
     ]);
   }
   render() {
     return (
       <View style={styles.container}>
         <MapView
           provider={PROVIDER_GOOGLE}
           style={styles.map}
           region={{
             latitude: 37.78825,
             longitude: -122.4324,
             latitudeDelta: 0.09,
             longitudeDelta: 0.035,
           }}>
           <Polygon
             coordinates={this.state.coordinates}
             fillColor={'rgba(100,200,200,0.3)'}
             strokeWidth={3}
           />
           <Circle
             center={{name: '1', latitude: 37.8025259, longitude: -122.4351431}}
             radius={1000}
             fillColor={'rgba(200,300,200,0.5)'}
           />
           <Marker coordinate={{latitude: 37.78835, longitude: -122.4334}}>
             <Callout onPress={this.showWelComeMessage}>
               <Text> Bim 's House</Text>
             </Callout>
           </Marker>
           {this.state.coordinates.map(marker => (
             <Marker
               key={marker.name}
               coordinate={{
                 latitude: marker.latitude,
                 longitude: marker.longitude,
               }}
               title={marker.name}>
               <Callout>
                 <Text>{marker.name}</Text>
               </Callout>
             </Marker>
           ))}
         </MapView>
       </View>
     );
   }
 }
 