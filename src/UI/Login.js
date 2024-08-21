import React from "react";
import {View, Text, TextInput, Image, Button, TouchableOpacity} from 'react-native'
import Logo from '../Images/Logo.png'
import styles from "../Styles/globalStyle";
import { StatusBar } from "expo-status-bar";

const PantallaLogin = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false}/>
            <View style={styles.contendor_logo}>
            <Image source={Logo} style={styles.logo}/>
            </View>
        <Text style={styles.title}>¡Estás a un Click!</Text>
            <TextInput 
                style={styles.input}
                placeholder="Usuario"
            />
            <TextInput 
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
            />
            <View style={styles.contendor_logo}>
            <TouchableOpacity style={styles.boton}>
            <Text style={styles.ButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MarginRegistrer}>
            <Text style={styles.Textos}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MarginRegistrer}>
            <Text style={styles.MarginRegistrer}>Registrarse</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};
export default PantallaLogin;