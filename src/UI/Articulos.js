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

const ScreenArticles = ({ navigation }) => {
    const handleSave = () => {
        navigation.navigate('Detalle de Articulo');
    };
    const handleSupport = () => {
        navigation.navigate('Soporte y Ayuda');
    };

    const handleOffers = () =>{
        navigation.navigate('Ofertas');
    };
    return (
        <PaperProvider>
            <ScrollView>
        <View>
            <StatusBar hidden={false}/>
            <View style={styles.container_logo}>
            <TextInput
            style={{height: 40,borderColor: '#4dd964', borderWidth: 1,paddingHorizontal: 8,marginVertical: 20,borderRadius: 7, width: 300, marginLeft: -60}}
            placeholder="🔎 Buscar Producto"
            />
            <Text style={styles.title}>Los más vendidos</Text>
            </View>
            <Card style={styles.cardStyle}>
            <View style={styles.container_logo}>
            <Card.Cover source={Ipad} style={styles.productImages}/>
            </View>
            <Card.Title title="Apple iPad Pro 6th generation 128GB" style={{textAlign: 'center', fontWeight: 'bold'}}/>
            <Card.Content>
            <Text variant="bodyMedium">$3.700.000</Text>
            <Text variant="bodyMedium">Combina la potencia y la capacidad de una computadora con la versatilidad y facilidad de uso que solo un iPad puede brindar.</Text>
            </Card.Content>
        <Card.Actions>
        <View style={styles.containerPayment}>
        <Image source={FavoriteIconOff} style={styles.favoriteIncon}></Image>
        </View>
        <Button onPress={handleSave} style={styles.buttonProduct}>Ver Producto</Button>
        </Card.Actions>
        </Card>
        <Card style={styles.cardStyle}>
            <View style={styles.container_logo}>
            <Card.Cover source={Airpods} style={styles.productImages}/>
            </View>
            <Card.Title title="Apple AirPods (3ª generación)" style={styles.Textos}/>
            <Card.Content>
            <Text variant="bodyMedium">$700.000</Text>
            <Text variant="bodyMedium">Con audio espacial para disfrutar de un sonido envolvente(1), Ecualización Adaptativa que ajusta la música según la forma de tus oídos, mayor duración de la batería(2) y resistencia al agua y al sudor.</Text>
            </Card.Content>
            <Card.Actions>
            <View style={styles.containerPayment}>
            <Image source={FavoriteIcon} style={styles.favoriteIncon}></Image>
            </View>
            <Button onPress={handleSupport} style={styles.buttonProduct}>Ver Producto</Button>
            </Card.Actions>
            </Card>
            <Card style={styles.cardStyle}>
            <View style={styles.container_logo}>
            <Card.Cover source={Iphone15} style={styles.productImages}/>
            </View>
            <Text variant="bodyMedium" style={styles.discountedPrice}>¡Oferta Flash!</Text>
            <Card.Title title="Iphone 15 Pro 128GB" style={styles.Textos}/>
            <Card.Content>
            <View style={styles.containerPayment}>
            <Text style={styles.originalPrice}>$4.399.900</Text>
            <Text style={styles.discountedPrice}>$4.120.000</Text>
            </View>
            <Text variant="bodyMedium" >Forjado en titanio y equipado con el revolucionario chip A17 Pro, un Botón de Acción personalizable y el sistema de cámaras Pro más versátil.</Text>
            </Card.Content>
            <Card.Actions>
            <View style={styles.containerPayment}>
            <Image source={FavoriteIcon} style={styles.favoriteIncon}></Image>
            </View>
            <Button onPress={handleOffers} style={styles.buttonProduct}>Ver Producto</Button>
            </Card.Actions>
            </Card>
        </View>
        </ScrollView>
        </PaperProvider>
    );
};
export default ScreenArticles;