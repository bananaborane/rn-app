import React from 'react'
import {Text, StyleSheet, View} from 'react-native'


function Header() {
    return (
        <View style={styles.header}>
            <Text>
                From Header.js
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue'
    }
})
