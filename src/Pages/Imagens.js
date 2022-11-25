import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

//import das imagens
import primeiraImagem from '../../assets/imagens/foto-1.jpg';
import segundaImagem from '../../assets/imagens/foto-2.jpg';
import terceiraImagem from '../../assets/imagens/foto-3.jpg';
import quartaImagem from '../../assets/imagens/foto-4.jpg';
import quintaImagem from '../../assets/imagens/foto-5.jpg';


export default function Imagens() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.titlePrincipal}>Bem-Vindo a Galeria</Text>
                <View>
                    <Text style={styles.title}>Abaixo nossa turminha: </Text>
                    <View style={styles.areaImg}>
                        <Image source={primeiraImagem} style={styles.img} />
                    </View>
                    <Text style={styles.title}>Sem remédio </Text>
                    <View style={styles.areaImg}>
                        <Image source={segundaImagem} style={styles.img} />
                    </View>
                    <Text style={styles.title}>Assustados </Text>
                    <View style={styles.areaImg}>
                        <Image source={terceiraImagem} style={styles.img} />
                    </View>
                    <Text style={styles.title}>Vida boa </Text>
                    <View style={styles.areaImg}>
                        <Image source={quartaImagem} style={styles.img} />
                    </View>
                    <Text style={styles.title}>Dirigindo meu carro... </Text>
                    <View style={styles.areaImg}>
                        <Image source={quintaImagem} style={styles.img} />
                    </View>
                </View>

            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontFamily: 'cursive',
        fontStyle: "normal",
        fontWeight: 800,
        marginTop: 0,
        color: '#f8f8f8'
    },
    areaImg: {
        marginBottom: 20,
        backgroundColor: '#f8f8f8',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        padding: 5,

        //Android
        elevation: 4,
        //IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.70,
        shadowRadius: 5.00,

    },
    img: {
        width: 200,
        height: 200,
    },
    titlePrincipal: {
        fontSize: 26,
        fontFamily: 'cursive',
        fontStyle: "normal",
        fontWeight: 800,
        marginTop: 10,
        color: '#f8f8f8',
        marginBottom: 20,
    }
}) 