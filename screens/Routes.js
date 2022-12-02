import React from 'react';
import { StyleSheet, View, Text, Button, Pressable, Image } from "react-native";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollView } from 'react-native-gesture-handler';


export function Routes() {
    function goToHome() {
        navigation.navigate("Routes");
    }

    return (
        <View style={{ height: "100%" }}>
            <Header />
            <ScrollView contentContainerStyle={styles.container} className='App'>

                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Share Routes</Text>
                    <Text style={styles.headerTitleSecond}>All saved routes</Text>
                </View>

                <View>
                    <Pressable style={styles.hr}>
                    <Image style={{display:'flex', width: 295, height: 95}} source={require('../img/MapsAnzeige.png')} />
                    </Pressable>

                    <Pressable style={styles.hr}>
                    <Image style={{display:'flex', width: 295, height: 95}} source={require('../img/MapsAnzeige1.png')} />
                    </Pressable>

                    <Pressable style={styles.hr}>
                    <Image style={{display:'flex', width: 295, height: 95}} source={require('../img/MapsAnzeige2.png')} />
                    </Pressable>

                    <Pressable style={styles.hr}>
                    <Image style={{display:'flex', width: 295, height: 95}} source={require('../img/MapsAnzeige.png')} />
                    </Pressable>
                </View>
            </ScrollView>
            <Footer />
        </View>
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

    header: {
        marginLeft: '12%',
        marginTop: '11%',
        marginBottom: '6%',
    },

    headerTitle: {
        color: 'black',
        fontSize: 26,
        fontFamily: 'Roboto',
    },

    headerTitleSecond: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'Roboto',
    },

    hr: {
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2,
        width: 300,
        alignItems: 'center',
        margin: 10,
        fontFamily: 'Roboto',
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    
    image: {
        display: 'flex',
        fontSize: 19,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});