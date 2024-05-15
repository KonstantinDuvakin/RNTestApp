import {
  View,
  FlatList,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import React, {RefObject, createRef, useRef} from 'react';
import {SCREEN_WIDTH} from '../../config/constants';
import {Tabs} from '../../components/TopTabs/AnimatedTopTabs/Tabs';
import {useSharedValue} from 'react-native-reanimated';
import {RenderScreen} from '../../components/TopTabs/AnimatedTopTabs/RenderScreen';

export type TopTabsDataType = {
  id: number;
  title: string;
  url: string;
  ref: RefObject<TouchableOpacity>;
};

const data: TopTabsDataType[] = [
  {
    id: 1,
    title: 'first',
    url: 'https://i.pinimg.com/736x/c9/d6/74/c9d6743d1072fbb6018f78146463e646.jpg',
    ref: createRef(),
  },
  {
    id: 2,
    title: 'second',
    url: 'https://zamanilka.ru/wp-content/uploads/2019/08/Blue-Pebbles-Orange-Butterfly-.jpg',
    ref: createRef(),
  },
  {
    id: 3,
    title: 'third',
    url: 'https://img3.akspic.ru/attachments/crops/6/6/9/4/4/144966/144966-avrora-ios-gorizont-noch-atmosfera-1440x2560.jpg',
    ref: createRef(),
  },
  {
    id: 4,
    title: 'forth',
    url: 'https://catherineasquithgallery.com/uploads/posts/2023-02/1676715110_catherineasquithgallery-com-p-oboi-na-telefon-zelenii-fon-vertikalnie-66.jpg',
    ref: createRef(),
  },
  {
    id: 5,
    title: 'fifth',
    url: 'https://i.yapx.cc/PYP.jpg',
    ref: createRef(),
  },
];

export default function AnimatedTopTabs() {
  const scrollX = useSharedValue(0);
  const flRef = useRef<FlatList>(null);
  const onPressTab = (itemIndex: number) => {
    flRef.current?.scrollToOffset({offset: itemIndex * SCREEN_WIDTH});
  };

  const onScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollX.value = nativeEvent.contentOffset.x;
  };

  return (
    <View>
      <FlatList
        ref={flRef}
        data={data}
        renderItem={({item}) => <RenderScreen item={item} />}
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={item => String(item.id)}
        onScroll={onScroll}
      />
      <Tabs data={data} scrollX={scrollX} onPressTab={onPressTab} />
    </View>
  );
}
