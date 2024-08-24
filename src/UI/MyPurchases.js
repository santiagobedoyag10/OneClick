import {React, useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Iphone15 from "../Images/Iphone 15pro.png";
import Airpods from '../Images/air pods.png'
import styles from "../Styles/globalStyle";
import { StatusBar } from "expo-status-bar";
import {Card, Button, PaperProvider} from 'react-native-paper'
import { ScrollView } from "react-native-gesture-handler";
import FavoriteIcon from '../Images/favoritoRojo.png'

const ScreenPurchases = ({ navigation }) => {
    const handleSave = () => {
        navigation.navigate('Lista de Articulos');
    };
    return (
        <PaperProvider>
            <ScrollView>
        <View>
            <StatusBar hidden={false}/>
            <View style={styles.container_logo}>
            <Text style={styles.title}>Tus Mejores Decisiones</Text>
            </View>
            <Card style={styles.cardStyle}>
            <View style={styles.container_logo}>
            <Card.Cover source={Iphone15} style={{width: 100, height: 100, marginVertical: 5}} />
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
            <Text style={styles.Textos}>Estado:  </Text>
            <Text style= {styles.Textos}>Entregado</Text>
            </View>
            </Card.Content>
        </Card>
        </View>
        </ScrollView>
        </PaperProvider>
    );
};
export default ScreenPurchases;