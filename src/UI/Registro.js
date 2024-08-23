import React, { useState } from 'react';
import {View, Text, TextInput, Image, Button, TouchableOpacity, ScrollView} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import Logo from '../Images/Logo.png'
import styles from "../Styles/globalStyle";
import { StatusBar } from "expo-status-bar";

const Registrer = ({navigation}) => {
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');
    const [isPasswordVisible,setIsPasswordVisible] =useState(false);
    const togglePasswordVisible = () =>{
        setIsPasswordVisible(true);
    }
    const [selectedCountry, setSelectedCountry] = useState('Colombia');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const departments = {
        'Antioquia': ['Medellín', 'Envigado', 'Rionegro', 'Itagüí', 'Bello'],
        'Bolivar': ['Barranquilla', 'Baranoa', 'Candelaria', 'Galapa', 'Luruaco'],
        'Cesar': ['Valledupar', 'Aguachica', 'Bosconia', 'El Copey', 'Pueblo Bello'],
        'Cordoba': ['Ayapel', 'Buenavista', 'Canalete', 'Cereté', 'Chimá'],
        'La Guajira': ['Riohacha', 'Albania', 'Barrancas', 'Dibulla', 'Distraccion']
    }
    const [departmentsList, setDepartmentsList] = useState(Object.keys(departments));
    const [citiesList, setCitiesList] = useState(departments[Object.keys(departments)[0]] || []);
    const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
    setCitiesList(departments[department] || []);
    setSelectedCity('');
    };

    const handleCityChange = (city) => {
    setSelectedCity(city);
    };

    const handleSave = () => {
        navigation.navigate('Iniciar Sesion');
    };

    return (
        <ScrollView>
        <View style={styles.container}>
            <StatusBar hidden={false}/>
            <View style={styles.container_logo}>
            <Image source={Logo} style={styles.logo}/>
            </View>
            <TextInput 
                style={styles.input}
                placeholder="Usuario"
                value={email}
                onChangeText={(text) => setEmail(text)}
                maxLength={10}
            />
            <TextInput 
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                secureTextEntry={!isPasswordVisible}
                onChangeText={(text) => setPassword(text)}
            />
            <TextInput 
                style={styles.input}
                placeholder="Correo"
            />
            <TextInput 
                style={styles.input}
                placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
            />
            <Text style={styles.textRegistrer}>Dirección</Text>
            <TextInput 
                style={styles.input}
                placeholder="Direccion"
                maxLength={30}
            />
            <Text style={styles.textRegistrer}>Pais</Text>
            <Text style={styles.titleCountry}>COLOMBIA</Text>
            <Text style={styles.textRegistrer}>Departamento</Text>
            <Picker 
            style={styles.pickerStyle}
            selectedValue={selectedDepartment}
            onValueChange={handleDepartmentChange}
            enabled={selectedCountry==='Colombia'}
            >
                {departmentsList.map((dept, index) => (
                <Picker.Item key={index} label={dept} value={dept}/>
                ))}
            </Picker>
            <Text style={styles.textRegistrer}>Ciudad</Text>
            <Picker
            selectedValue={selectedCity}
            style={styles.picker}
            onValueChange={handleCityChange}
            enabled={selectedDepartment !== ''}
            >
            {citiesList.map((city, index) => (
            <Picker.Item key={index} label={city} value={city} />
            ))}
            </Picker>
            <View style={styles.container_logo}>
            <TouchableOpacity style={styles.boton}>
            <Text style={styles.ButtonText}>Registrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.MarginRegistrer} onPress={handleSave}>
            <Text style={styles.MarginRegistrer}>¿Iniciar Sesion?</Text>
            </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
};
export default Registrer;