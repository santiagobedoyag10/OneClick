import {StyleSheet} from 'react-native'

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            padding: 10,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 15,
            textAlign: 'center',
        },
        logo:{
            height:200,
            width: 200
        },
        container_logo: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
            height: 40,
            borderColor: '#4dd964',
            borderWidth: 1,
            marginBottom: 12,
            paddingHorizontal: 8,
            marginVertical: 20,
            borderRadius: 7,
            marginLeft: 30,
            marginRight: 30
        },
        boton: {
            backgroundColor: 'rgba(72,226,98,0.2)',
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            marginBottom: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            marginTop: 35
        },
        ButtonText: {
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        Textos:{
            fontSize: 18,
            fontWeight: 'bold',
        },
        MarginRegistrer: {
            marginVertical: 45,
            fontSize: 20,
            fontWeight: 'bold'
        },
        textRegistrer: {
            fontSize: 14,
            textAlign: 'center'
        },
        pickerStyle:{
            borderRadius: 7,
            marginLeft: 25,
            marginRight: 30,
            width: '88%',
            marginBottom: 16
        },
        titleCountry: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 15,
            textAlign: 'center',
            marginVertical: 20
        },
        productImages: {
            width: 190,
            height: 220,
        },
        cardStyle: {
            marginTop: 20,
            backgroundColor: 'white'
        },
        buttonProduct: {
            backgroundColor: 'rgba(72,226,98,0.2)',
            color: 'white',
        },
        textDatailsArticles: {
            fontSize: 15,
            textAlign:'justify',
            marginTop: 8,
            marginVertical: 8,
        },
        paymentLogo: {
            width: 50,
            height: 50,
            marginRight: 10,
            resizeMode: 'contain'
        },
        containerPayment: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          },
        
        containerAccount: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            marginLeft: 'auto',
            marginRight: 'auto'
          },
        buttonAccount:{
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            marginBottom: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            marginTop: 35
        },
        inputdescribe: {
            height: 120,
            borderColor: '#4dd964',
            borderWidth: 1,
            marginBottom: 12,
            paddingHorizontal: 8,
            marginVertical: 20,
            borderRadius: 7,
            marginLeft: 30,
            marginRight: 30
        },
        favorteContainer: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        },
        favoriteIncon: {
            width: 50,
            height: 50,
            marginBottom: 'auto',
            marginRight: 'auto',
            resizeMode: 'contain'
        },
        originalPrice: {
            textDecorationLine: 'line-through',
            fontSize: 16,
            color: 'grey',
            textAlign: 'center',
            marginBottom: 4,
          },
          discountedPrice: {
            fontSize: 20,
            color: '#d32f2f',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingBottom: 8
          },

          statusPurchase: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: 10,
          },
          
          buttonCart: {
            backgroundColor: 'rgba(72,226,98,0.2)',
            paddingVertical: 8,
            paddingHorizontal: 24,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            marginTop: 35,
            marginLeft: '8%'
          },

          buttonPaymentCart:{
            backgroundColor: 'rgba(72,226,98,0.2)',
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            marginBottom: 24,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            marginTop: 35
        },
        }

);

export default styles;
