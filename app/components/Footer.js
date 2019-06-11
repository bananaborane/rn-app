import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import { MaterialIcons, Feather } from '@expo/vector-icons';


function Footer() {
    return (
        <View style={styles.footerNav}>
            <View style={styles.eachIcon}>
                <MaterialIcons name="search" size={24} color='#80868b' />
                <Text style={styles.eachIconText}>Search</Text>
            </View>
            <View style={styles.eachIcon}>
                <Feather name="activity" size={24} color='#80868b' />
                <Text style={styles.eachIconText}>Activity</Text>
            </View>
            <View style={styles.eachIcon}>
                <MaterialIcons name="account-circle" size={24} color='#80868b' />
                <Text style={styles.eachIconText}>Profile</Text>
            </View>
            <View style={styles.eachIcon}>
                <MaterialIcons name="collections" size={24} color='#80868b' />
                <Text style={styles.eachIconText}>Collections</Text>
            </View>
            <View style={styles.eachIcon}>
                <Feather name="menu" size={24} color='#80868b' />
                <Text style={styles.eachIconText}>More</Text>
            </View>

        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footerNav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center',
        height: 50,
        backgroundColor: '#eff0f1',
        width: '100%'
    },
    eachIcon: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    eachIconText: {
        color: '#80868b'
    },
    footer: {
        // position: 'fixed',
        // bottom: 0
      }
})
