import {React, useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Logo from '../Images/Logo.png';
import Iphone15 from "../Images/Iphone 15pro.png";
import PSE from '../Images/PSE.png'
import TARJETA from '../Images/Tarjeta.png'
import EFECTY from '../Images/efecty.png'
import styles from "../Styles/globalStyle";
import { StatusBar } from "expo-status-bar";
import {Card, Button, PaperProvider} from 'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";
import FavoriteIcon from '../Images/favoritoRojo.png'
import FavoriteIconOff from '../Images/favoritoNone.png'

const ScreenCart = ({ navigation }) => {
    const handleSave = () => {
        navigation.navigate('Lista de Articulos');
    };

    return (
        <PaperProvider>
            <ScrollView>
                <View>
                <StatusBar hidden={false}/>
            <View style={styles.container_logo}>
            <Text style={styles.title}>¡Estas a OneClick!</Text>
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
            </Card.Content>
            </Card>
            <View style={styles.statusPurchase}>
            <Text style={styles.Textos}>Valor Total: </Text>
            <Text style={styles.Textos}>$XXX.XXXX</Text>
            </View>
            <View style={styles.statusPurchase}>
            <Text style={styles.Textos}>Drección de entrega: </Text>
            <Text style={styles.Textos}>CR 27B #45-67 </Text>
            </View>
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
            <Button style={styles.buttonPaymentCart}>Pagar</Button>
            </View>
    </ScrollView>
        </PaperProvider>
    );
};
export default ScreenCart;