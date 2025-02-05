import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', image: 'https://media.istockphoto.com/id/837572972/photo/lost-and-homeless-abandoned-dog.jpg?s=612x612&w=0&k=20&c=eN1O0_oSgK1K15LEofqxQJAVDJPNne4QsiaxKg3RIOI=' },
  { id: '2', image: 'https://media.istockphoto.com/id/511576613/photo/the-citten-looking-from-the-cage.jpg?s=612x612&w=0&k=20&c=0mUcq5s-VI0D0r18acthahbPsG5Xjyd9j8Ljy-LCtmc=' },
  { id: '3', image: 'https://media.istockphoto.com/id/482762635/photo/pet-adoption.jpg?s=612x612&w=0&k=20&c=HXtr_J3RTWGWMsdZbIHsklRXbt-B0ASyATBUrIhjxpo=' },
];

const CarouselComponent = () => {
  return (
    <Carousel
      loop
      width={width}
      height={350}
      autoPlay={true}
      autoPlayInterval={2000}
      data={data}
      renderItem={({ item }) => (
        <View style={styles.slide}>
          <Image source={{ uri: item.image }} style={styles.image} />
         
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '80%',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default CarouselComponent;
