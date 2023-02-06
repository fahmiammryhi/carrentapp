import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './page/login';
import Signup from './page/signup';
import Peta from './page/peta';
import Front from './page/splash';
import Dashboard from './page/dashboard';
import DetailMobil from './page/DetailMobil';
import Transaksi from './page/transaksi';
import History from './page/history';
import Botabs from './page/bottomtabs';
import About from './page/about';
import { HeaderTitle } from 'react-navigation-stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen 
        name="Login" 
        component={Login} 
      />
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
      />       
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
     />
     <Stack.Screen 
       name="DetailMobil" 
       component={DetailMobil} 
     />
      <Stack.Screen 
       name="Peta" 
       component={Botabs}
     />
     <Stack.Screen 
       name="About" 
       component={About}
     />
     <Stack.Screen 
       name="Transaksi" 
       component={Transaksi}
     />
     <Stack.Screen 
       name="History" 
       component={History}
     />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
  
const RootNavigator = createSwitchNavigator(
  {
    Splash: Front,
    Stack: MyStack,
    Tab: {screen: Botabs}
    
  },
  {
    initialRouteName: "Splash",
  }
);

export default createAppContainer(RootNavigator);
