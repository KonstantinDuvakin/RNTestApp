import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export default function CustomHeader() {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {height: top + 40}]}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Text>GO BACK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#dfdfdf',
    position: 'absolute',
    top: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  backBtn: {
    height: 40,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
});
