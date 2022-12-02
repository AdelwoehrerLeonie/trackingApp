import React, { useEffect, useState } from "react";
import { PermissionsAndroid, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MapView, { MapEvent, Region, UrlTile } from "react-native-maps";
import GeoLocation from "react-native-geolocation-service";
import { useIsFocused } from "@react-navigation/native";

export function TrackingMap({ navigation, route, options, back }) {
    const zoom = 0.003;

    const leonding = {
        latitude: 48.26828028542866,
        latitudeDelta: zoom,
        longitude: 14.25201401039552,
        longitudeDelta: zoom
    };

    const focused = useIsFocused();
    const [locationPermission, setLocationPermission] = useState(false);

    const [mapRegion, setMapRegion] = useState(leonding);
    const [mapType, setMapType] = useState("KARTE");

    const [mapReady, setMapReady] = useState(false);
    const [margin, setMargin] = useState(1);

    useEffect(() => {
        if (!focused) {
            return;
        }

        if (locationPermission) {
            return;
        }

        if (Platform.OS === "android") {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Standort",
                    message: "Wir benötigen Zugriff auf Ihren aktuellen Standort für die Geo-Referenzierung.",
                    buttonNegative: "Verweigern",
                    buttonPositive: "Erlauben"
                }
            )
                .then((status) => {
                    if (status === PermissionsAndroid.RESULTS.GRANTED) {
                        setLocationPermission(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        else if (Platform.OS === "ios") {
            GeoLocation.requestAuthorization(
                "whenInUse"
            )
                .then((status) => {
                    if (status === "granted") {
                        setLocationPermission(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [focused, locationPermission]);

    useEffect(() => {

        //Nur wenn fokussiert (Wenn in app und Mapscreen), die erlaubnis erteilt wurde und die 
        //Karte vollständig geladen ist wird die Position ermittelt.

        if (!focused) {
            return;
        }

        if (!locationPermission) {
            return;
        }

        if (!mapReady) {
            return;
        }

        // Setze die Position.

        GeoLocation.getCurrentPosition(
            (position) => {
                setMapRegion({
                    latitude: position.coords.latitude,
                    latitudeDelta: 0.01,
                    longitude: position.coords.longitude,
                    longitudeDelta: 0.01
                })
            },
            (err) => {
                console.log(err);
            },
            {
                enableHighAccuracy: true,
                showLocationDialog: true,
                timeout: 15000,
                maximumAge: 10000
            }
        );
    }, [focused, locationPermission, mapReady]);

    return (
        <SafeAreaView style={styles.Container}>
            <Pressable style={styles.Back} onPress={() => {
                navigation.navigate("GettingStarted");
            }}><Text style={styles.BackFont}>Hauptmenü</Text></Pressable>

            <Pressable style={styles.MapType} onPress={() => {
                mapType === "KARTE"
                ?
                setMapType("SATELLIT")
                :
                setMapType("KARTE")
            }}><Text style={styles.MapTypeFont}>{mapType}</Text></Pressable>
            
            <MapView
                style={{...styles.Map, margin: margin}}
                showsCompass={true}
                showsMyLocationButton={true}
                showsUserLocation={true}
                mapType={mapType === "KARTE" ? "satellite" : "standard"}
                region={mapRegion}
                onRegionChangeComplete={setMapRegion}
                onMapReady={() => {
                    setMargin(0);
                    setMapReady(true);
                }}
            >
            </MapView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    Map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    MapType: {
        position: "absolute",
        bottom: 10,
        right: 10,
        padding: 10,
        backgroundColor: "rgba(100, 100, 100, 0.8)",
        zIndex: 999,
        borderRadius: 5
    },
    MapTypeFont: {
        color: "rgb(230, 230, 230)",
        fontWeight: "bold"
    },
    Back: {
        position: "absolute",
        bottom: 10,
        padding: 15,
        backgroundColor: "rgba(100, 100, 100, 0.8)",
        zIndex: 999,
        borderRadius: 5
    },
    BackFont: {
        color: "rgb(230, 230, 230)",
        fontWeight: "bold"

    }
});