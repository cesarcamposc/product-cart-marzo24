import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ProductsScreen from '../src/screen/ProductsScreen'
import ProductDetailsScreen from '../src/screen/ProductDetailsScreen'
import ShoppingCart from '../src/screen/ShoppingCart'
import CartListItem from '../src/components/CartListItem'


export default function index() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen/> */}
      {/* <ProductDetailsScreen/> */}
      {/* <ShoppingCart/> */}
      <CartListItem/>

      

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

  },

})
