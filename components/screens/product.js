import { View, Text, StyleSheet,FlatList, Image } from "react-native";
import { useEffect, useState } from "react";
import Card from "../components2/card";
import {db} from '../controller';
import { collection, getDocs } from "firebase/firestore";

export default function Product(){
    const [produtos, setProdutos] = useState([    ])


    useEffect (() => {
        async function carregarProdutos() {
            try {
                const querrySnapshot = await getDocs(collection(db,'produtos'));
                const lista = [];
                querrySnapshot.forEach((doc) => {
                    lista.push({id: doc.id, ...doc.data()});
                });
                setProdutos(lista);
            } catch (error){
                console.log("erro ao buscar produtos:", error)
            }
            
        }
        carregarProdutos();
    })
    return(
        <View style={styles.container}>
            {/* <Text style={styles.title}>Produtos</Text>
            <Text style={styles.text}>Lista de produtos</Text>
            {produtos.map((item) => (
                <Text style={styles.Ptext}>
                    {item.nome} - R$ {item.valor}
                </Text>
            ))} */}
            <Text style={styles.title}>Lista de produtos</Text>
            <FlatList
            data = {produtos}
            renderItem={({item}) => (
                <Card
                nome={item.nome}
                valor={item.valor}
                img={item.imagem}/>
            )}
            keyExtractor={item => item.id}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'beige',
        /* justifyContent: 'space-around', */
        /* alignItems: 'center' */
        /* fontsize: 30, */
    },
    text:{
        fontSize:30,
        alignItems: 'center',
    },
    title:{
        fontSize:55,
        fontStyle:'italic',
        color:'#556B2F',
        alignItems: 'center'
    },
})