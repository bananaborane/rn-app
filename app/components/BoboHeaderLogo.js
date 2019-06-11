import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

class BoboHeaderLogo extends Component {
    render() {
        return (
            <View>
                <Image style={styles.headerLogo} source={require('./../images/bobologo.png')} />
            </View>
        )
    }
}

export default BoboHeaderLogo

const styles = StyleSheet.create({
    headerLogo: {
        height: 48
    }
})

