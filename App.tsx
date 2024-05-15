/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {App as AppRoot} from './src/App';

export const App = () => {
  return (
    <GestureHandlerRootView style={styles.ghRootView}>
      <NavigationContainer>
        <AppRoot />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  ghRootView: {
    flex: 1,
  },
});
