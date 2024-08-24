import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/UI/Login';
import Registro from './src/UI/Registro';
import Articulos from './src/UI/Articulos';
import DetalleArticulos from './src/UI/DetalleArticulo';
import myAccount from './src/UI/Profile';
import Supports from './src/UI/HelpSupport';
import myFavorite from './src/UI/Favorites'
import Offerts from './src/UI/Offers'
import Purcharses from './src/UI/MyPurchases'
import Cart from './src/UI/Cart'
import Payment from './src/UI/Payment'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Iniciar Sesion" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Lista de Articulos" component={Articulos}/>
        <Stack.Screen name="Detalle de Articulo" component={DetalleArticulos}/>
        <Stack.Screen name="Mi Cuenta" component={myAccount}/>
        <Stack.Screen name="Soporte y Ayuda" component={Supports}/>
        <Stack.Screen name="Mis Favoritos" component={myFavorite}/>
        <Stack.Screen name='Ofertas' component={Offerts}/>
        <Stack.Screen name='Mis Compras' component={Purcharses}/>
        <Stack.Screen name='Carrito' component={Cart}/>
        <Stack.Screen name='Sucursal de Pago' component={Payment}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
