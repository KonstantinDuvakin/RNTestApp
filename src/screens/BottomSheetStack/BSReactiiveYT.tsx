import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {
  BSReactiive,
  IBSReactiiveRefProps,
} from '../../components/BottomSheets/BSReactiive';
import {SCREEN_HEIGHT} from '../../config/constants';
import BSReactiiveHeader from '../../components/BottomSheets/BSReactiiveHeader';

export default function BSReactiiveYT() {
  const ref = useRef<IBSReactiiveRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-SCREEN_HEIGHT / 3);
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <BSReactiiveHeader />
      <TouchableOpacity style={styles.button} onPress={onPress} />
      <BSReactiive ref={ref}>
        <ScrollView style={styles.svStyle}>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
          <Text>Hello</Text>
        </ScrollView>
      </BSReactiive>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    aspectRatio: 1,
    borderRadius: 25,
    backgroundColor: '#fff',
    opacity: 0.6,
  },
  svStyle: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
