import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";

function goToHome() {
    navigation.navigate("Profile");
}

export function Header() {
    return (
        
        <View style={{display: "flex"}}>
                <Image onPress={goToHome} style={{ left: 5, top: 5, zIndex: 2}} source={require('../../img/ProfilMini.png')} /> 
            <View style={styles.container}>
                <Text style={{ color: 'black', marginRight: 3 }}>Log out</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        marginTop: -54,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 34,
        backgroundColor: "gray"
    },
});