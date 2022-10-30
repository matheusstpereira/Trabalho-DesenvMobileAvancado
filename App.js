import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

// Novas Telas Trabalho Final
import TelaInicial from './components/app/TelaInicial';
import Cadastro from './components/app/Cadastro';
import Home from './components/app/Home';

//Avaliação 01
import BalaoDaSorte from './components/avaliacao1/appBalaoDaSorte';

//Avaliação 02
import Banco from './components/avaliacao2/TelaInicial/Inicio';
import Ajuda from './components/avaliacao2/TelaAjuda/Ajuda';
import Informacoes from './components/avaliacao2/TelaAjuda/Informacoes';
import AberturaConta from './components/avaliacao2/TelaAberturaConta/AberturaConta';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

//Navegações
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


function MyDrawer(){
  return(
    <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio App Banco" component={Banco} />
        <Drawer.Screen name="Abertura de Conta" component={AberturaConta} />
        <Drawer.Screen name="Ajuda" component={Ajuda} />
        <Drawer.Screen name="Informações" component={Informacoes} />
    </Drawer.Navigator>
  )
}


function MyTabs(){
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
		tabBarIcon: ({ color, size }) => {
			let iconName;

			switch (route.name) {
				case 'Home':
					iconName = 'home';
					break;
				case 'Avaliação 01':
					iconName = 'info';
					break;
        case 'Avaliação 02':
					iconName = 'info';
					break;  
			}

			return <Icon name={iconName} size={size} color={color} />;
		},
	})}
		tabBarOptions={{
		activeTintColor: '#0FA3FF',
		inactiveTintColor: '#161313',
	}}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Avaliação 01" component={BalaoDaSorte}/>
        <Tab.Screen name="Avaliação 02" component={MyDrawer}/>
      </Tab.Navigator>
  )
}


export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
