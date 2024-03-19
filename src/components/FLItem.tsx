import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type FLItemProps = {
  item: string;
  onPress: () => void;
};

export const FLItem = ({item, onPress}: FLItemProps) => {
  return (
    <TouchableOpacity style={styles.containerItem} onPress={onPress}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
});
