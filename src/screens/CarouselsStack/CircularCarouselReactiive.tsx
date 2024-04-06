import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CircularCarousel} from '../../components/Carousels/CircularCarousel';

const DATA = [
  require('../../assets/images/CircularCarousel/bear.jpeg'),
  require('../../assets/images/CircularCarousel/panda.jpeg'),
  require('../../assets/images/CircularCarousel/cat.jpeg'),
  require('../../assets/images/CircularCarousel/deer.jpeg'),
  require('../../assets/images/CircularCarousel/dog.jpeg'),
  require('../../assets/images/CircularCarousel/hedgehog.jpeg'),
  require('../../assets/images/CircularCarousel/koala.jpeg'),
  require('../../assets/images/CircularCarousel/moose.jpeg'),
  require('../../assets/images/CircularCarousel/parrot.jpeg'),
  require('../../assets/images/CircularCarousel/rabbit.jpeg'),
]

export const CircularCarouselReactiive = () => {
  return (
    <View style={styles.container}>
      <CircularCarousel data={DATA} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
