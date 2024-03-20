import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CircularCarousel} from '../../components/Carousels/CircularCarousel';

const DATA = [
  require('../../assets/images/bear.jpeg'),
  require('../../assets/images/panda.jpeg'),
  require('../../assets/images/cat.jpeg'),
  require('../../assets/images/deer.jpeg'),
  require('../../assets/images/dog.jpeg'),
  require('../../assets/images/hedgehog.jpeg'),
  require('../../assets/images/koala.jpeg'),
  require('../../assets/images/moose.jpeg'),
  require('../../assets/images/parrot.jpeg'),
  require('../../assets/images/rabbit.jpeg'),
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
