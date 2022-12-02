import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image, flexWrap } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useNavigation } from '@react-navigation/native';

export function SendRoute() {
    return(
    <View style={{ height: "100%" }}>
        <Header />
        <ScrollView contentContainerStyle={styles.container} className='App'>
            <View style={styles.header}>
                <Image style={{ marginLeft: 5, marginBottom: 5, marginTop: 10 }} source={require('../img/Profil.png')} />
                <Text style={styles.headerTitle}>Leonie</Text>
            </View>

            <View style={styles.content}></View>
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

    content: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
    },

    header: {
        alignItems: 'center',
        marginBottom: 50,
    },

    headerTitle: {
        color: 'black',
        fontSize: 36,
        fontFamily: "Roboto"
    },

});