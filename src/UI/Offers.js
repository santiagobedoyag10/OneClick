import {React, useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Logo from '../Images/Logo.png';
import Ipad from '../Images/Ipad Pro.png'
import Iphone15 from "../Images/Iphone 15pro.png";
import Airpods from '../Images/air pods.png'
import styles from "../Styles/globalStyle";
import { StatusBar } from "expo-status-bar";
import {Card, Button, PaperProvider} from 'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";
import FavoriteIcon from '../Images/favoritoRojo.png'

const ScreenOffers = ({ navigation }) => {
    const handleSave = () => {
        navigation.navigate('Detalle de Articulo');
    };
    const handleSave2 = () => {
        navigation.navigate('Carrito');
    };
    return (
        <PaperProvider>
            <ScrollView>
        <View>
            <StatusBar hidden={false}/>
            <View style={styles.container_logo}>
            <Text style={styles.title}>Ofertas</Text>
            </View>
            <Card style={styles.cardStyle}>
            <View style={styles.container_logo}>
            <Card.Cover source={Iphone15} style={styles.productImages} />
            </View>
            <View>
            <Card.Title title="Iphone 15 Pro 128GB"/>
            </View>
            <Card.Content>
            <Text style={styles.originalPrice}>$4.399.900</Text>
            <Text style={styles.discountedPrice}>$4.120.000</Text>
            <Text style={styles.description}>
            Forjado en titanio y equipado con el revolucionario chip A17 Pro, un Botón de Acción personalizable y el sistema de cámaras Pro más versátil.
            </Text>
            </Card.Content>
            <Card.Actions>
            <View style={styles.containerPayment}>
            <Image source={FavoriteIcon} style={styles.favoriteIncon}></Image>
            </View>
            <Button onPress={handleSave2} style={styles.buttonProduct}>Ver Producto</Button>
            </Card.Actions>
        </Card>
        </View>
        </ScrollView>
        </PaperProvider>
    );
};
export default ScreenOffers;