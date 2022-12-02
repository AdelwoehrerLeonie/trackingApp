import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';


export function GettingStarted({ navigation, route, options, back }) {
    function goToHome() {
        navigation.navigate("Profile");
    }
    function goToContacts() {
        navigation.navigate("ContactsList");
    }
    function goToRoutes() {
        navigation.navigate("Routes");
    }
    
    function goToMap() {
        navigation.navigate("TrackingMap");
    }


    return (
        <ScrollView contentContainerStyle={styles.container} className='App'>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Getting Started</Text>
            </View>

            <View style={styles.allButtons}>

                <Pressable style={styles.button} onPress={goToHome}><Image style={styles.image1} source={require('../img/ProfilStartseite.png')}/><Text style={{ color: 'black', fontSize: 18, zIndex: 1 }}>My Account</Text></Pressable>
                <Pressable style={styles.button} onPress={goToContacts}><Text style={{color: 'black', fontSize: 18 }}>List</Text><Image style={styles.image2} source={require('../img/AddStartseite.png')}/></Pressable>
                <Pressable style={styles.button} onPress={goToRoutes}><Image style={styles.image1} source={require('../img/RoutesStartseite.png')}/><Text style={{ color: 'black', fontSize: 18 }}>My Routes</Text></Pressable>
                <Pressable style={styles.button} onPress={goToMap}><Text style={{ color: 'black', fontSize: 18 }}>Map</Text><Image style={styles.image4} source={require('../img/TonesStartseite.png')}/></Pressable>

            </View>

            <Text style={styles.logOut} onPress={goToHome}>Log out</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f0f1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },

    backgroundGrey: {
        backgroundColor: '#808080',
        display: 'flex',
        padding: 100,

    },

    header: {
        alignItems: 'center',
        marginBottom: 100,
    },

    headerTitle: {
        color: 'black',
        fontSize: 36,
        fontFamily: 'Roboto',
    },

    logOut: {
        display: 'flex',
        marginTop: 100,
        marginLeft: 30,
        fontSize: 18,
        fontFamily: 'Arial',
        color: 'black',
    },

    allButtons: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial',
        width: 350,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    button: {
        display: 'flex',
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        flexDirection: 'row',
        zIndex: 1,
        maxHeight: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image1: {
        width: 100,
        height: 100,
        left: -80,
        top:1,
        zIndex: 2,
        margin: -10,
    },

    image2: {
        width: 100,
        height: 100,
        right: -88,
        top:1,
        zIndex: 2,
        margin: -10,
    },

    image4: {
        width: 100,
        height: 100,
        right: -75,
        top:1,
        zIndex: 2,
        margin: -10,
    },
});