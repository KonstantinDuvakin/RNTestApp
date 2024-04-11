import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FLItem} from '../../components/FLItem';
import {TopTabsScreenProps} from '../../navigation/types';
import {TopTabsStackEnum} from '../../navigation/navigationConfig';

const ITEM_DATA = [
  {
    name: 'Animated Top Tabs',
    to: TopTabsStackEnum.ANIMATED_TOP_TABS,
  },
];

export const TopTabs = () => {
  const navigation =
    useNavigation<
      TopTabsScreenProps<TopTabsStackEnum.TOP_TABS>['navigation']
    >();
  return (
    <FlatList
      data={ITEM_DATA}
      renderItem={({item}) => (
        <FLItem
          key={item.name}
          item={item.name}
          onPress={() => navigation.navigate(item.to)}
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
