import {React, useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Logo from '../Images/Logo.png';
import Ipad from '../Images/Ipad Pro.png'
import Airpods from '../Images/air pods.png'
import Avatar from '../Images/avatar.png'
import styles from "../Styles/globalStyle";
import { StatusBar } from "expo-status-bar";
import {Card, Button, PaperProvider} from 'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";

const ScreenProfile = ({ navigation }) => {
    const handleSave = () => {
        navigation.navigate('Soporte y Ayuda'); //PARA FAVORITOS Y MIS COMPRAS
    };
    return (
        <PaperProvider>
            <ScrollView>
        <View>
            <StatusBar hidden={false}/>
            <View style={styles.container_logo}>
                <Image source={Logo} style={styles.logo}></Image>
            <Text style={styles.title}>Tu Cuenta</Text>
            </View>
            <View style={styles.container_logo}>
            <Image source={Avatar} style={{width: 80, height: 80}}/>
            </View>
            <View style={styles.containerAccount}>
            <Text style={styles.Textos}>Santiago Bedoya</Text>
            </View>
            <View style={styles.containerAccount}>
            <Text style={styles.Textos}>Fecha Nacimiento:  </Text>
            <Text style={styles.Textos}>04/06/2004</Text>
            </View>
            <View style={styles.buttonAccount}>
                <Button style={styles.boton} onPress={handleSave}>Mis Favoritos</Button>
                <Button style={styles.boton}>Mis Compras</Button>
            </View>
        </View>
        </ScrollView>
        </PaperProvider>
    );
};
export default ScreenProfile;