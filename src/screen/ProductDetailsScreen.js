import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'
import products from '../data/products'

const ProductDetailsScreen = () => {

    const product = products[0];

    const { width } = useWindowDimensions();

    const addToCart = () =>{
        console.warn('add to cart');

    }
    return (
        <View>
             <ScrollView>
            {/* Image carousel */}
            <FlatList
                data={product.images}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item }}
                        style={{ width: width, aspectRatio: 1 }} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled

            />
           
            <View style = {{padding:20}}>
                {/* Título */}
                <Text style={styles.title}>{product.name}</Text>

                {/* Precio */}
                <Text style={styles.price}>$ {product.price}</Text>

                {/* Descripción} */}
                <Text style={styles.description}>{product.description}</Text>

            </View>

            </ScrollView>

            {/* ADD cart button */}
            <Pressable style = {styles.button} onPress={addToCart}>
                <Text style = {styles.buttonText}>Add To CART</Text>
            </Pressable>

        </View>
    )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 10,
    },

    price: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 3,
    },

    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '500',
    },

    button: {
        position: 'absolute',
        backgroundColor: 'red',
        bottom: 30,
        width: '80%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20

    }
    

})