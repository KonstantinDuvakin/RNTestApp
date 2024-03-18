import {FlatList, StyleSheet, ViewToken} from 'react-native';
import React from 'react';
import {ListItem} from '../../components/Lists/ListItem';
import {useSharedValue} from 'react-native-reanimated';

const DATA = new Array(50).fill(0).map((_, index) => ({id: index}));

export const AnimatedFLReactiive = () => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => (
        <ListItem key={item.id} item={item} viewableItems={viewableItems} />
      )}
      onViewableItemsChanged={({viewableItems: vItems}) => {
        viewableItems.value = vItems;
      }}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
});
