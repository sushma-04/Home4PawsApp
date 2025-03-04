import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CarouselComponent from './CarouselComponent'
import CategoriesScreen from '../CategoriesScreen/CategoriesScreen'
import AdoptionScreen from '../AdoptionScreen/AdoptionScreen'
import { ScrollView } from 'react-native-gesture-handler'
import PetsScreen from '../PetsScreen/PetsScreen'

export default function HomeScreen() {
  return (
   <>
   <ScrollView style={styles.container}>
   <CarouselComponent/>
   <CategoriesScreen/>
   <PetsScreen/>
   {/* <AdoptionScreen/> */}
   </ScrollView>
   
   </>
  )
}

const styles = StyleSheet.create({
container:{
    background:'#fff'
}
})