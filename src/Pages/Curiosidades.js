import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Curiosidades() {
    return (

        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Curiosidades</Text>
                <View style={styles.areaText}>
                    <Text style={styles.textos}>• Um cachorro adulto tem 42 dentes </Text>
                </View>
                <View style={styles.areaText}>
                    <Text style={styles.textos}>• O olfato canino é 1 milhão de vezes melhor do que o dos humanos </Text>
                </View>
                <View style={styles.areaText}>
                    <Text style={styles.textos}>• Castrar seu cachorro pode ajudar a prevenir alguns tipos de câncer</Text>
                </View>
                <View style={styles.areaText}>
                    <Text style={styles.textos}>•Se não for castrada, uma cachorra pode ter 66 filhotes em 6 anos</Text>
                </View>
                <View style={styles.areaText}>
                    <Text style={styles.textos}>• A audição canina é 10 vezes melhor do que a dos humanos</Text>
                </View>            <View>
                    <Text>ㅤ</Text>
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
        marginBottom: 30,
        fontSize: 24,
        fontFamily: 'cursive',
        fontStyle: "normal",
        fontWeight: 800,
        marginTop: 80,
        color: '#f8f8f8'
    },
    areaText: {
        marginBottom: 10,
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
    },
    textos: {
        textAlign: "center",
        display: "flex",
        fontFamily: 'cursive',
        fontWeight: 550,
        fontSize: 20,
    },
}) 