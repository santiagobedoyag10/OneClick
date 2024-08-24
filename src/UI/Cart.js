import {React, useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Logo from '../Images/Logo.png';
import Iphone15 from "../Images/Iphone 15pro.png";
import Ipad from '../Images/Ipad Pro.png'
import Airpods from '../Images/air pods.png'
import styles from "../Styles/globalStyle";
import { StatusBar } from "expo-status-bar";
import {Card, Button, PaperProvider} from 'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";
import FavoriteIcon from '../Images/favoritoRojo.png'
import FavoriteIconOff from '../Images/favoritoNone.png'

const ScreenCart = ({ navigation }) => {
    const handleSave = () => {
        navigation.navigate('Sucursal de Pago');
    };

    return (
        <PaperProvider>
            <ScrollView>
                <View>
                <StatusBar hidden={false}/>
            <View style={styles.container_logo}>
            <Text style={styles.title}>!Ya estas a punto de obtenrlos!</Text>
            </View>
            <Card style={styles.cardStyle}>
            <View style={styles.container_logo}>
            <Card.Cover source={Iphone15} style={{width: 100, height: 100, marginVertical: 8}} />
            </View>
            <View>
            <Card.Title title="Iphone 15 Pro 128GB"/>
            </View>
            <Card.Content>
            <Text style={styles.Textos}>$4.120.000</Text>
            <Text style={styles.description}>
            Forjado en titanio y equipado con el revolucionario chip A17 Pro, un Botón de Acción personalizable y el sistema de cámaras Pro más versátil.
            </Text>
            <View style={styles.statusPurchase}>
            <Text style={styles.Textos}>Cantidad:  </Text>
            <Text style= {styles.Textos} maxlength={2}>XX</Text>
            </View>
            <View style={styles.statusPurchase}>
            <Button style={styles.buttonCart}>Agregar</Button>
            <Button style={styles.buttonCart}>Eliminar</Button>
            </View>
            </Card.Content>
            </Card>
            <View style={styles.statusPurchase}>
            <Text style={styles.Textos}>Valor Total: </Text>
            <Text style={styles.Textos}>$XXX.XXXX</Text>
            </View>
            <Button onPress={handleSave} style={styles.buttonPaymentCart}>Proceder al pago</Button>
            </View>
    </ScrollView>
        </PaperProvider>
    );
};
export default ScreenCart;