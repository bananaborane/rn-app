import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from 'react-native';
import Main from './app/components/Main.js'
import { Header } from 'react-native-elements'
import BoboHeaderLogo from './app/components/BoboHeaderLogo.js'
import Footer from './app/components/Footer.js'

export default function App() {
  return (
    <View style={styles.container}>
                      <StatusBar barStyle="light-content" />


 
       {/* <Header
   centerComponent={<BoboHeaderLogo/>}
   containerStyle={{
     backgroundColor: '#fc7d44'
   }}
      /> */}




      <Main />
      <Footer />


    </ View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
