import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TopTabsDataType} from '../../../screens/TopTabsStack/AnimatedTopTabs';
import {Indicator} from './Indicator';
import {SharedValue} from 'react-native-reanimated';

type TabsProps = {
  data: TopTabsDataType[];
  scrollX: SharedValue<number>;
  onPressTab: (i: number) => void;
};

export type measuresType = {
  x: number;
  width: number;
};

export const Tabs = ({data, scrollX, onPressTab}: TabsProps) => {
  const [measures, setMeasures] = useState<measuresType[]>([]);
  const viewRef = useRef<View>(null);

  useEffect(() => {
    const m: measuresType[] = [];
    data.forEach(item => {
      item.ref.current?.measureLayout(viewRef.current, (x, _, width) => {
        m.push({x, width});
        if (m.length === data.length) {
          setMeasures(m);
        }
      });
    });
  }, []);

  return (
    <View style={styles.container} ref={viewRef}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          ref={item.ref}
          onPress={() => onPressTab(index)}>
          <Text style={[styles.text, {fontSize: 84 / data.length}]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '800',
  },
});
