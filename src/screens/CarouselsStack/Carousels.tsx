import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FLItem} from '../../components/FLItem';
import {CarouselsScreenProps} from '../../navigation/types';
import {CarouselsStackEnum} from '../../navigation/navigationConfig';

const ITEM_DATA = ['Circular Carousel Animation Reactiive'];

export const Carousels = () => {
  const navigation =
    useNavigation<
      CarouselsScreenProps<CarouselsStackEnum.CAROUSELS>['navigation']
    >();
  return (
    <FlatList
      data={ITEM_DATA}
      renderItem={({item}) => (
        <FLItem
          item={item}
          onPress={() =>
            navigation.navigate(CarouselsStackEnum.CIRCULAR_CAROUSEL_REACTIIVE)
          }
        />
      )}
      style={styles.flStyle}
    />
  );
};

const styles = StyleSheet.create({
  flStyle: {
    backgroundColor: '#fff',
    padding: 10,
  },
});
