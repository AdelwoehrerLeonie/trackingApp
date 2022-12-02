import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Image, flexWrap } from "react-native";
import DatePicker from "react-native-date-picker"
import { ScrollView } from 'react-native-gesture-handler';
import { Fragment } from 'react/cjs/react.production.min';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export function Profile() {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    return (
        <View style={{height: "100%"}}>
            <Header />
            <ScrollView contentContainerStyle={styles.container} className='App'>
                <View style={styles.header}>
                <Image style={{marginLeft: 5, marginBottom: 5, marginTop: 10}} source={require('../img/Profil.png')} />
                    <Text style={styles.headerTitle}>Leonie</Text>
                </View>

                <View style={styles.content}>
                    <View style={styles.hr}>
                        <Text>Phone number</Text>
                        <TextInput keyboardType='phone-pad'></TextInput>
                    </View>
                    <View style={styles.hr}>
                        <Text>Emergency number</Text>
                        <TextInput keyboardType='phone-pad'></TextInput>
                    </View>
                    <View style={styles.hr}>
                        <Text>Birthdate</Text>
                        <TextInput onFocus={() => {
                            setOpen(true)
                        }} value={`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}></TextInput>
                        <DatePicker
                            modal={true}
                            open={open}
                            date={date}
                            mode={"date"}
                            locale={"en_US"}
                            onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
                            }}
                            onCancel={() => {
                                setOpen(false)
                            }}
                        />
                    </View>
                    <View style={styles.hr}>
                        <Text>Wichtige Daten</Text>
                        <TextInput multiline={true}></TextInput>
                    </View>
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

    hr: {
        borderBottomColor: 'black',
        borderTopColor: 'black',
        borderBottomWidth: 1.5,
        borderTopWidth: 1.5,
        width: 300,
        alignItems: 'center',
        padding: 10,
        fontSize: 24,
        fontFamily: 'Roboto',
    },
});