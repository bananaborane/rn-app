import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import Main from './app/components/Main.js'
import { Header } from 'react-native-elements'
import BoboHeaderLogo from './app/components/BoboHeaderLogo.js'

export default function App() {
  return (
    <View style={styles.container}>


      <StatusBar barStyle="light-content" />

 
       <Header
   leftComponent={{ icon: 'menu', color: '#FEFEFE' }}
   centerComponent={<BoboHeaderLogo/>}
   rightComponent={{ icon: 'home', color: '#FEFEFE' }}
   containerStyle={{
     backgroundColor: '#fc7d44'
   }}
      />


      <Text>From App.tsx</Text>


      <Main />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
