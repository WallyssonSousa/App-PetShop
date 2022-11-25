import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/Home";
import Sobre from "./src/Pages/Sobre";
import Compras from "./src/Pages/Compras";
import Imagens from "./src/Pages/Imagens";
import Curiosidades from './src/Pages/Curiosidades';

const Stack = createNativeStackNavigator()

export default function App(){
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Tela de inicio",
            headerStyle: { backgroundColor: "#121212" },

            headerTintColor: "#FFF",
            headerShown: false
          }}
        />

        <Stack.Screen 
          name="Sobre"
          component={Sobre}
          options={{title: 'Tela Sobre'}}
        />

        <Stack.Screen 
          name="Compras"
          component={Compras}
          options={{title: 'Tela das Compras'}}
        />

        <Stack.Screen 
          name="Imagens"
          component={Imagens}
          options={{title: 'Imagens'}}
        />
        <Stack.Screen 
          name="Curiosidades"
          component={Curiosidades}
          options={{title: 'Curiosidades'}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}  