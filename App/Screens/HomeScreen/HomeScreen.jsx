import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CarouselComponent from './CarouselComponent'

export default function HomeScreen() {
  return (
   <>
   <View style={styles.container}>
   <CarouselComponent/>
   </View>
   
   </>
  )
}

const styles = StyleSheet.create({
container:{
    background:'#fff'
}
})