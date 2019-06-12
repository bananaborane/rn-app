import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Main from './Search'
import Profile from './../components/Profile'
import Collections from './../components/Collections'
import More from './../components/More'
import {createAppContainer, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation'


export class Dashboard extends Component {
    render() {
        return (
            <View>
                <AppContainer />
            </View>
        )
    }
}

export default Dashboard

const TabNavigator = createBottomTabNavigator({
    Main: { screen: Main },
    Profile: { screen: Profile },
    Collections: { screen: Collections },
    More: { screen: More }
  });

const AppContainer = createAppContainer(TabNavigator);
  


