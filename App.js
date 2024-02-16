import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importação das telas
import HomeScreen from './screens/Home';
import DailyPicScreen from './screens/DailyPic'; 
import SpaceCraftScreen from './screens/SpaceCraft';
import StarMapScreen from './screens/StarMap';

//Criação da função createStackNavigator dentro de uma constante: Stack
const Stack= createStackNavigator();

export default function App() {
  return (
    //Chamada do componente NavigationContainer e dentro dele, chamada das telas
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DailyPic' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='DailyPic' component={DailyPicScreen}/>
        <Stack.Screen name='SpaceCraft' component={SpaceCraftScreen}/>
        <Stack.Screen name='StarMap' component={StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
