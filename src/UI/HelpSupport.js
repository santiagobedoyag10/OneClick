import {React, useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Logo from '../Images/Logo.png';
import Ipad from '../Images/Ipad Pro.png'
import Airpods from '../Images/air pods.png'
import styles from "../Styles/globalStyle";
import { StatusBar } from "expo-status-bar";
import {Card, Button, PaperProvider} from 'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from '@react-native-picker/picker';

const ScreenHelps = ({ navigation }) => {
    const handleSave = () => {
        navigation.navigate('Detalle de Articulo');
    };
    const [selectedValue, setSelectedValue] = useState("Queja");

    return (
        <PaperProvider>
            <ScrollView>
        <View>
            <StatusBar hidden={false}/>
            <Text style={styles.title}>¿En que podemos ayudarte?</Text>
            <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={styles.pickerStyle}
            >
            <Picker.Item label="Queja" value="Queja" />
            <Picker.Item label="Petición" value="Petición" />
            <Picker.Item label="Recurso" value="Recurso" />
            </Picker>
            <Text style={styles.title}>Descripcion de la solicitud</Text>
            <TextInput
            style={styles.inputdescribe}
            placeholder="Describe tu solicitud lo más detallado"
            >
            </TextInput>
            <View style={styles.container_logo}>
            <Button style={styles.boton}>Enviar</Button>
            </View>
        </View>
        </ScrollView>
        </PaperProvider>
    );
};
export default ScreenHelps;