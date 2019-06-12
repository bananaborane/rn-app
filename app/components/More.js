import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import BoboHeaderLogo from './BoboHeaderLogo'

export class More extends Component {
    render() {
        return (
            <View style={styles.morePage}>
                            <Header
                centerComponent={<BoboHeaderLogo/>}
                containerStyle={{
                backgroundColor: '#fc7d44'
                }}
            /> 
                <Text> From More.js </Text>
            </View>
        )
    }
}

export default More

const styles = StyleSheet.create({
    morePage: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    }
})

