import React from 'react';
import {
	StyleSheet,
    View,
    Text,
	StatusBar,
	ActivityIndicator,
	ScrollView,
    AsyncStorage,
    TextInput,
    Image
} from 'react-native';
import { LinearGradient } from 'expo';

export class Main extends React.Component {
    render() {
        return (
            <ScrollView style={{ width: '100%' }}>
                <StatusBar barStyle="light-content" />
                <View style={{ width: '100%' }}>
                    <Image style={{ width: '100%' }} source={require('./../images/kogiblackjackquesadilla.jpg')} />
                    <TextInput style={{ paddingLeft: 20 }} placeholder="Search for tacos, burgers and barbers" multiline={true} autoCapitalize="sentences" underlineColorAndroid="transparent" />
                </View>
            </ScrollView>
        )
    }
}

export default Main

