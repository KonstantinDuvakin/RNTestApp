import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../../components/CustomHeader.tsx';
import {CustomDrawerScreensWrapper} from './CustomDrawerScreensWrapper.tsx';

export const CustomDrawerRwContacts = () => {
  return (
    <CustomDrawerScreensWrapper>
      <View style={styles.container}>
        <Text>Contacts</Text>
      </View>
    </CustomDrawerScreensWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
