import {React, useState } from "react";
import {View, Text, TextInput, Image, Button, TouchableOpacity} from 'react-native';
import Logo from '../Images/Logo.png';
import styles from "../Styles/globalStyle";
import { StatusBar } from "expo-status-bar";

const PantallaLogin = ({ navigation }) => {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [isPasswordVisible,setIsPasswordVisible] =useState(false);
    const togglePasswordVisible = () =>{
        setIsPasswordVisible(true);
    }
    
    const handleSave = () => {
        navigation.navigate('Registro');
    };

    const handleHome = () => {
        navigation.navigate('Lista de Articulos');
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={false}/>
            <View style={styles.container_logo}>
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
                value={password}
                secureTextEntry={true}
                icon={<Text>Mostrar</Text>}
                iconPosition={"right"}
                onChangeText={(value) => {onChange ({name: 'password', value})}}
            />
            <View style={styles.container_logo}>
            <TouchableOpacity style={styles.boton} onPress={handleHome}>
            <Text style={styles.ButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MarginRegistrer} onPress={handleSave}>
            <Text style={styles.MarginRegistrer}>Registrarse</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};
export default PantallaLogin;