import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import cart from '../data/cart'


const CartListItem = ({cartItem}) => {

    const decreaseQuantity = () =>{

    }

    const increaseQuantity = () =>{

    }
  return (
    <View styles = {styles.container}>
        <Image source = {{}} style= {styles.image}/>

        <View style = {styles.contentContainer}>
            <Text style = {styles.name}> nombre del producto</Text>
            <Text style = {styles.size}>tamaño de la zapatilla</Text>

            <View>
                <Feather
                onPress={decreaseQuantity}
                name='minus-circle'
                size={25}
                color='red' 
                />

                <Text style = {styles.quantity}> 5</Text>

                <Feather
                onPress={increaseQuantity}
                name='plus-circle'
                size={25}
                color='red' 
                />

                <Text style = {styles.itemTotal}>precio*cantidad</Text>
            </View>

        </View>
      
    </View>
  )
}

export default CartListItem

const styles = StyleSheet.create({})