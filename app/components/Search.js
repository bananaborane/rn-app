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
    Image,
    ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo';
import Footer from './Footer'

export class Search extends React.Component {
    render() {
        return (
            <ScrollView stickyHeaderIndices={[1]} style={{ width: '100%' }}>
                {/* <Footer /> */}
                <View style={{ width: '100%' }}>
                    <Image style={styles.backgroundImage} source={require('./../images/kogiblackjackquesadilla1.jpg')} >
                        {/* <Text>INSIDE IMAGE TAGS</Text> */}
                    </Image>
                </View>
                <View>
                    <View style={styles.stickyInputContainer}>
                        <TextInput style={styles.stickyInput} placeholder="Search for tacos, burgers and barbers" multiline={true} autoCapitalize="sentences" underlineColorAndroid="transparent" />
                    </View>
                </View>
                <View>
                    <Image style={styles.backgroundImage} source={require('./../images/kogiblackjackquesadilla1.jpg')} />
                    <Image style={styles.backgroundImage} source={require('./../images/kogiblackjackquesadilla1.jpg')} />
                    <Image style={styles.backgroundImage} source={require('./../images/kogiblackjackquesadilla1.jpg')} />
                    <Image style={styles.backgroundImage} source={require('./../images/kogiblackjackquesadilla1.jpg')} />
                    <Image style={styles.backgroundImage} source={require('./../images/kogiblackjackquesadilla1.jpg')} />
                </View>
            </ScrollView>
        )
    }
}

export default Search

const styles = StyleSheet.create({
    stickyInput: {
        paddingLeft: 20,
        borderStyle: 'solid',
        borderColor: '#F7941E',
        borderWidth: 2,
        backgroundColor: 'white'
    },
    stickyInputContainer: {
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: '#F7941E'
    },
    insideImageText: {

    },
    backgroundImage: {
        width: '100%'
    }
})


