import {React, useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Logo from '../Images/Logo.png';
import Ipad from '../Images/Ipad Pro.png'
import PSE from '../Images/PSE.png'
import TARJETA from '../Images/Tarjeta.png'
import EFECTY from '../Images/efecty.png'
import styles from "../Styles/globalStyle";
import { StatusBar } from "expo-status-bar";
import {Card, Button, PaperProvider} from 'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";

const ScreenDatailsArticles = ({ navigation }) => {
    const handleSave = () => {
        navigation.navigate('Mi Cuenta');
    };
    return (
        <PaperProvider>
            <ScrollView>
        <View>
            <StatusBar hidden={false}/>
            <View style={styles.container_logo}>
            <Image source={Logo} style={styles.logo}/>
            <Text style={styles.title}>¡Animate a disfrutarde esta oferta!</Text>
            </View>
            <Card>
            <View style={styles.container_logo}>
            <Card.Cover source={Ipad} style={styles.productImages}/>
            </View>
            <Card.Title title="Apple iPad Pro 6th generation 128GB" style={{textAlign: 'center', fontWeight: 'bold'}}/>
            <Card.Content>
            <Text style={styles.Textos}>Detalle</Text>
            <Text variant="bodyMedium" style={styles.textDatailsArticles}>Captura todos tus momentos al instante
            Gracias a sus cámaras, con resoluciones de 12 Mpx y 12 Mpx, podrás hacer videollamadas o sacarte fotos en cualquier momento y lugar, con una excelente calidad de imagen. Nitidez, brillo y colores vibrantes harán que tus experiencias se reflejen de manera óptima.</Text>
            <Text style={styles.Textos}>Caracteristicas</Text>
            <Text variant="bodyMedium" style={styles.textDatailsArticles}>- Tamaño de la pantalla: 12.9</Text>
            <Text variant="bodyMedium"style={styles.textDatailsArticles}>- Sistema operativo: iPadOS 16.0</Text>
            <Text variant="bodyMedium"style={styles.textDatailsArticles}>- Diseñado para llevar a todas partes</Text>
            <Text variant="bodyMedium" maxLength={10} style={styles.title}>$3.700.000</Text>
            <Text style={styles.title}>Medios de Pago</Text>
            <View style={styles.containerPayment}>
            <Image source={TARJETA} style={styles.paymentLogo}/>
            <Text style={styles.textRegistrer}>Tarjeta Debito o Credito</Text>
            </View>
            <View style={styles.containerPayment}>
            <Image source={PSE} style={styles.paymentLogo}/>
            <Text style={styles.textRegistrer}>PSE</Text>
            </View>
            <View style={styles.containerPayment}>
            <Image source={EFECTY} style={styles.paymentLogo}/>
            <Text style={styles.textRegistrer}>Efecty</Text>
            </View>
            </Card.Content>
        <Card.Actions>
        <Button onPress={handleSave} style={styles.buttonProduct}>Proceder al pago</Button>
        </Card.Actions>
        </Card>
        </View>
        </ScrollView>
        </PaperProvider>
    );
};
export default ScreenDatailsArticles;