import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import BoboHeaderLogo from './BoboHeaderLogo'

export class Profile extends Component {
    render() {
        return (
            <View style={styles.profilePage}>
            <Header
                centerComponent={<BoboHeaderLogo/>}
                containerStyle={{
                backgroundColor: '#fc7d44'
                }}
            /> 
                <Text> From Profile.js </Text>
            </View>
        )
    }
}

export default Profile

const styles = StyleSheet.create({
    profilePage: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    }
})
