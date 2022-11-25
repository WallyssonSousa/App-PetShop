import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";

//import das imagens
import racao from '../../assets/racao.png';
import coleira from '../../assets/coleira.png';
import shampoo from '../../assets/shampoo-pet.png';
import vacina from '../../assets/vacina.png';
import cama from '../../assets/cama.png';
import roupa from '../../assets/roupas.png';
import brinquedo from '../../assets/brinquedo.png';

export default function Compras() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.cartao}>
                    <Image source={racao} style={styles.produto} />
                    <View style={styles.informacoes}>
                        <View>
                            <Text style={styles.nome}>Ração: R$ 40,00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartao}>
                    <Image source={coleira} style={styles.produto} />
                    <View style={styles.informacoes}>
                        <View>
                            <Text style={styles.nome}>Coleira: R$ 15,00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartao}>
                    <Image source={shampoo} style={styles.produto} />
                    <View style={styles.informacoes}>
                        <View>
                            <Text style={styles.nome}>Shampoo: R$ 25,00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartao}>
                    <Image source={vacina} style={styles.produto} />
                    <View style={styles.informacoes}>
                        <View>
                            <Text style={styles.nome}>Vacina: R$ 10,00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartao}>
                    <Image source={cama} style={styles.produto} />
                    <View style={styles.informacoes}>
                        <View>
                            <Text style={styles.nome}>Cama: R$ 40,00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartao}>
                    <Image source={roupa} style={styles.produto} />
                    <View style={styles.informacoes}>
                        <View>
                            <Text style={styles.nome}>Roupa: R$ 50,00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartao}>
                    <Image source={brinquedo} style={styles.produto} />
                    <View style={styles.informacoes}>
                        <View>
                            <Text style={styles.nome}>Brinquedo: R$ 05,50</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text>ㅤ</Text>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
    },
    produto: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 11,
    },
    cartao: {
        backgroundColor: '#f8f8f8',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        alignItems: "center",
        borderColor: '#121212',
        borderWidth: 4,
        marginTop: 20,

        //Android
        elevation: 4,
        //IOS
        shadowColor: '#fff',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.70,
        shadowRadius: 5.00,

    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginLeft: 16,
        marginRight: 17,

    },
    nome: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "700",
        color: '#121212'
    }
}) 