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
        contendor_logo: {
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
            marginVertical: 15,
            fontSize: 20,
            fontWeight: 'bold'
        }
    }

);

export default styles;
