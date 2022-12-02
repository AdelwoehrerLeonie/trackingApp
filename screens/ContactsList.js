import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Contacts from 'react-native-contacts';
import { Contact } from './Contact';
import { PermissionsAndroid } from 'react-native';
import { Fragment } from 'react/cjs/react.production.min';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export function ContactsList() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
                'title': 'Contacts',
                'message': 'This app would like to view your contacts.',
                'buttonPositive': 'Please accept bare mortal'
            }
        )
            .then(Contacts.getAll()
                .then((contacts) => {
                    setContacts(contacts)
                })
                .catch((e) => {
                    console.log(e)
                }))
    }, []);
    const keyExtractor = (item, idx) => {
        return item?.recordID?.toString() || idx.toString();
    };
    const renderItem = ({ item, index }) => {
        return <Contact contact={item} />;
    };
    return (
        <>
        <Header />
            <FlatList
                data={contacts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.list}
            />
            <Footer />
        </>
    );
};
const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
});