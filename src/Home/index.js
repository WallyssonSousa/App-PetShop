import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import logo from '../../assets/pet-shop.png';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    return (
        <View style={styles.navigation}>

            <Text style={styles.title}>Bem-Vindo PetShop Dogzinho</Text>
            
            <View style={styles.cabecalho}>
                <Image source={logo} style={styles.logo} />
            </View>


            <View style={styles.buttons}>
                <Button title="Sobre o PetShop" onPress={() => navigation.navigate('Sobre')} color="#121212" />
                <Text>ㅤ</Text>
                <Button title="Compras do PetShop" onPress={() => navigation.navigate('Compras')}  color="#121212" />
                <Text>ㅤ</Text>
                <Button title="Imagens" onPress={() => navigation.navigate('Imagens')} color="#121212"  />
                <Text>ㅤ</Text>
                <Button title="Curiosidades" onPress={() => navigation.navigate('Curiosidades')} color="#121212" />
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    title:{
        marginBottom: 30,
        fontSize: 26,
        fontFamily: 'cursive',
        fontStyle: "normal",
        fontWeight: 500,
        marginTop: 80,
        fontWeight: 800,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 15,
        position: "relative",
    },
    buttons: {
        marginTop: 37,
        marginBottom: 110,
        borderColor: '#000', 
        borderWidth: 3,
        padding: 30,
        borderRadius: 10,
        backgroundColor: '#fff', 
         //Android
         elevation: 4,
         //IOS
         shadowColor: '#000', 
         shadowOffset: {
             width: 10,
             height: 10,
         },
         shadowOpacity: 0.70,
         shadowRadius: 5.00,
    },
    navigation: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#f8f8f8'
    }, 
})