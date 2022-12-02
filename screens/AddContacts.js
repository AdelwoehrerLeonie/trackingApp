import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image, navigation, Pressable } from "react-native";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function AddContacts({ navigation, route, options, back }) {
    const [username, setUsername] = React.useState("");
    const [phone, setPhone] = React.useState("");

    async function saveContact() {
        if (username.trim().length === 0) {
            alert("Please enter a valid name!");
            return;
        }

        if (phone.trim().length === 0) {
            alert("Please enter a valid phone number!");
            return;
        }

        const contacts = await AsyncStorage.getItem("contacts");
        let data = null;

        if (contacts !== null) {
            data = JSON.parse(contacts);
            data.push({
                name: username,
                phone: phone
            });
        }
        else {
            data = [{
                name: username,
                phone: phone
            }]
        }

        await AsyncStorage.setItem("contacts", JSON.stringify(data))

        navigation.navigate("Contacts")
    }

    return (

        <ScrollView contentContainerStyle={styles.container} className='App'>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>New Contact</Text>
            </View>
            <View style={{ margin: '5%', width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Text>Name</Text>
                <TextInput onChangeText={setUsername} value={username}
                    placeHolder={"firstName and/or lastName"} style={styles.textInputStyle}></TextInput>

                <Text style={styles.textPhoneNumber}>Phone number</Text>
                <TextInput onChangeText={setPhone} value={phone}
                    placeHolder={"phone number"} style={styles.textInputStyle} keyboardType='phone-pad'></TextInput>
            </View>
            <Pressable onPress={saveContact} style={{borderColor: 'black', borderWidth: 1, width: '15%', textAlign: 'center'}}><Text>Save</Text></Pressable>
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

    content: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    header: {
        top: '10%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    headerTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Roboto',
        marginBottom: '12%',
    },

    textInputStyle: {
        borderBottomWidth: 0.8,
        borderTopWidth: 0.8,
        borderRightWidth: 0.8,
        borderLeftWidth: 0.8,
        padding: '-10%',
        alignItems: 'center',
    },

    textPhoneNumber: {
        marginTop: '10%'
    }
});