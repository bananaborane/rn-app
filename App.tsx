import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView } from 'react-native';
import { Header } from 'react-native-elements'
// import BoboHeaderLogo from './app/components/BoboHeaderLogo.js'
// import Footer from './app/components/Footer.js'
import {createAppContainer, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation'
import Search from './app/components/Search.js'
import More from './app/components/More.js'
import Collections from './app/components/Collections.js'
import Profile from './app/components/Profile.js'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

export default class App extends Component {
  render(){
    return ( 
    <AppContainer />
  //       <View style={styles.container}>
  //         <StatusBar barStyle="light-content" />
      
      
      
  //          {/* <Header
  //      centerComponent={<BoboHeaderLogo/>}
  //  containerStyle={{
  //      backgroundColor: '#fc7d44'
  //    }}
  //     /> */}
  
  
  //     <Dashboard />
  //     <Text>hi there</Text>
  
  //     <Search />
  //     <Footer />
  
  
  //   </ View>
    );
  }
}

// class IconWithBadge extends React.Component {
//   render() {
//     const { name, badgeCount, color, size } = this.props;
//     return (
//       <View style={{ width: 24, height: 24, margin: 5 }}>
//         <Ionicons name={name} size={size} color={color} />
//         {badgeCount > 0 && (
//           <View
//             style={{
//               // /If you're using react-native < 0.57 overflow outside of the parent
//               // will not work on Android, see https://git.io/fhLJ8
//               position: 'absolute',
//               right: -6,
//               top: -3,
//               backgroundColor: 'red',
//               borderRadius: 6,
//               width: 12,
//               height: 12,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
//               {badgeCount}
//             </Text>
//           </View>
//         )}
//       </View>
//     );
//   }
// }

// const HomeIconWithBadge = props => {
//   // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
//   return <IconWithBadge {...props} badgeCount={3} />;
// };

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Search') {
    iconName = `search`;
  } else if (routeName === 'Profile') {
    iconName = `account-circle`;
  } else if (routeName === 'Collections') {
    iconName = `collections`
  } else if (routeName === 'More') {
    iconName = `menu`
  }
  return <MaterialIcons name={iconName} size={27} color={tintColor} />
}

const DashboardTabNavigator = createBottomTabNavigator({
  Search,
  Profile,
  Collections,
  More
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: '#0076BA',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#eff0f1',
      borderTopColor: 'gray',
      borderTopWidth: 1
    }
  },
}
)



const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: DashboardTabNavigator }
})

const AppContainer = createAppContainer(AppSwitchNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
})



