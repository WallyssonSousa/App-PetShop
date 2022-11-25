import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre o PetShop:</Text>
            <View style={styles.areaText}>
                <Text style={styles.textos}>O PetShop doguinho, tem como principal característica cuidar do seu amiguinho de quatro patas, e dar a ele, todo tratamento de um rei, ou rainha... Abertos desde 2019, nos orgulhamos de cada cachorro, ou cachorra que sai daqui lindo, cheiroso e com seus pelos macios... Além de termos o melhor tratamento com animais, tambem deixamos câmeras de
                    supervisão, para que os donos possam acompanhar o tratamento do amiguinho a hora que quiser.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
    },
    title: {
        marginBottom: 30,
        fontSize: 24,
        fontFamily: 'cursive',
        fontStyle: "normal",
        fontWeight: 800,
        marginTop: 80,
        color: '#f8f8f8'
    },
    textos: {
        textAlign: "center",
        display: "flex",
        fontFamily: 'cursive',
        fontWeight: 550,
        fontSize: 20,
    }, 
    areaText:{
        marginBottom: 150,
        
            backgroundColor: '#f8f8f8',
            marginVertical: 8,
            marginHorizontal: 16,
            borderRadius: 6,
            flexDirection: "row",
            alignItems: "center",
            borderColor: '#121212',
            borderWidth: 4,
            marginTop: 20,
            padding: 5,
    
            //Android
            elevation: 4,
            //IOS
            shadowColor: '#fff',
            shadowOffset: {
                width: 5,
                height: 5,
            },
            shadowOpacity: 0.70,
            shadowRadius: 5.00,

    }
}) 