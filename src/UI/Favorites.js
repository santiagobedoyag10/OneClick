import {React, useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Logo from '../Images/Logo.png';
import Iphone15 from '../Images/Iphone 15pro.png'
import Airpods from '../Images/air pods.png'
import styles from "../Styles/globalStyle";
import { StatusBar } from "expo-status-bar";
import {Card, Button, PaperProvider} from 'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";
import FavoriteIcon from '../Images/favoritoRojo.png'

const ScreenFavorites = ({ navigation }) => {
    const handleSave = () => {
        navigation.navigate('Detalle de Articulo');
    };
    const handleSave2 = () => {
        navigation.navigate('Lista de Articulos');
    };
    return (
        <PaperProvider>
            <ScrollView>
        <View>
            <StatusBar hidden={false}/>
            <View style={styles.container_logo}>
            <Text style={styles.title}>Tus Favoritos</Text>
            </View>
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
        <Button onPress={handleSave} style={styles.buttonProduct}>Ver Producto</Button>
        </Card.Actions>
        </Card>
        </View>
        </ScrollView>
        </PaperProvider>
    );
};
export default ScreenFavorites;