import {ImageSourcePropType, StyleSheet} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {CAROUSEL_LIST_ITEM_WIDTH, CircularCarouselItem} from './CircularCarouselItem';
import {useSharedValue} from 'react-native-reanimated';

type CircularCarouselProps = {
  data: ImageSourcePropType[];
};

export const CircularCarousel = ({data}: CircularCarouselProps) => {
  const contentOffsetX = useSharedValue(0);
  return (
    <FlatList
      data={data}
      style={styles.flStyle}
      contentContainerStyle={styles.flContentContainerStyle}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToInterval={CAROUSEL_LIST_ITEM_WIDTH}
      scrollEventThrottle={16}
      onScroll={({nativeEvent}) => {
        contentOffsetX.value = nativeEvent.contentOffset.x;
      }}
      renderItem={({item, index}) => (
        <CircularCarouselItem
          imageSrc={item}
          index={index}
          contentOffsetX={contentOffsetX}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  flStyle: {
    position: 'absolute',
    bottom: 0,
    height: 300,
  },
  flContentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 1.5 * CAROUSEL_LIST_ITEM_WIDTH,
    paddingLeft: 1.5 * CAROUSEL_LIST_ITEM_WIDTH,
  },
});
