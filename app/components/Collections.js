import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import BoboHeaderLogo from './BoboHeaderLogo'

export class Collections extends Component {
    render() {
        return (
            <View style={styles.collectionsPage}>
                            <Header
                centerComponent={<BoboHeaderLogo/>}
                containerStyle={{
                backgroundColor: '#fc7d44'
                }}
            /> 
                <Text> From Collections.js </Text>
            </View>
        )
    }
}

export default Collections

const styles = StyleSheet.create({
    collectionsPage: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    }
})

