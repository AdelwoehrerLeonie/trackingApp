import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Pressable, Image, PopupState } from "react-native";
export function Footer() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable onPress={() => { navigation.goBack() }}><View><Image style={{ left: 6, bottom: 1, zIndex: 2, width: 60 }} source={require('../../img/Back.png')} /></View></Pressable>
            
            
    {/* <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <Pressable variant="contained" {...bindTrigger(popupState)}>
                        <View><Image style={{ left: " 600%", bottom: 3, zIndex: 2 }} source={require('../../img/Settings.png')} /></View>
                        </Pressable>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>Profile</MenuItem>
                            <MenuItem onClick={popupState.close}>My account</MenuItem>
                            <MenuItem onClick={popupState.close}>Logout</MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState> */}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 35,
        backgroundColor: "gray"
    },
});