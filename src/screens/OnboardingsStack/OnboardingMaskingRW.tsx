import {StyleSheet, View, ImageProps, PixelRatio} from 'react-native';
import React, {useRef, useState} from 'react';
import {OnboardingScreen} from '../../components/Onboardings/OnboardingMasking/OnboardingScreen';
import {OnboardingButton} from '../../components/Onboardings/OnboardingMasking/OnboardingButton';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../config/constants';
import {Pagination} from '../../components/Onboardings/OnboardingMasking/Pagination';
import {
  Canvas,
  Circle,
  Group,
  Image,
  Mask,
  Rect,
  SkImage,
  makeImageFromView,
} from '@shopify/react-native-skia';

export type OnboardingData = {
  id: number;
  text: string;
  textColor: string;
  backgroundColor: string;
  image: ImageProps;
};

const DATA: OnboardingData[] = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet',
    textColor: '#f8dac2',
    backgroundColor: '#154f40',
    image: require('./../../assets/images/OnboardingMasking/image_1.png'),
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet',
    textColor: '#154f40',
    backgroundColor: '#fd94b2',
    image: require('./../../assets/images/OnboardingMasking/image_2.png'),
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet',
    textColor: '#000',
    backgroundColor: '#f8dac2',
    image: require('./../../assets/images/OnboardingMasking/image_3.png'),
  },
];

export const BTN_SIZE = 120;
export const BTN_BOTTOM_DIST = 100;

const wait = async (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const OnboardingMaskingRW = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(false);
  const [overlay, setOverlay] = useState<SkImage | null>(null);
  const btnValue = useSharedValue(0);
  const mask = useSharedValue(0);
  const ref = useRef(null);
  const pd = PixelRatio.get();
  const pressHandler = async () => {
    if (currentIndex === DATA.length - 1) {
      return;
    }
    if (!active) {
      setActive(true);
      const snapshot = await makeImageFromView(ref);
      setOverlay(snapshot);
      await wait(80);

      setCurrentIndex(pv => pv + 1);
      btnValue.value = withTiming(btnValue.value + SCREEN_HEIGHT);
      mask.value = withTiming(SCREEN_HEIGHT, {duration: 1000});
      await wait(1000);

      setOverlay(null);
      mask.value = 0;
      setActive(false);
    }
  };

  return (
    <View style={styles.container}>
      <View ref={ref} collapsable={false}>
        {DATA.map((item, index) => {
          return (
            currentIndex === index && (
              <OnboardingScreen key={item.id} item={item} />
            )
          );
        })}
        {overlay && (
          <Canvas style={StyleSheet.absoluteFillObject} pointerEvents="none">
            <Mask
              mode="luminance"
              mask={
                <Group>
                  <Circle
                    cx={SCREEN_WIDTH / 2}
                    cy={SCREEN_HEIGHT - BTN_BOTTOM_DIST - BTN_SIZE / 2}
                    r={SCREEN_HEIGHT}
                    color="white"
                  />
                  <Circle
                    cx={SCREEN_WIDTH / 2}
                    cy={SCREEN_HEIGHT - BTN_BOTTOM_DIST - BTN_SIZE / 2}
                    r={mask}
                    color="black"
                  />
                </Group>
              }>
              <Image
                image={overlay}
                x={0}
                y={0}
                width={overlay.width() / pd}
                height={overlay.height() / pd}
              />
            </Mask>
          </Canvas>
        )}
        <OnboardingButton pressHandler={pressHandler} btnValue={btnValue} />
        <Pagination data={DATA} btnValue={btnValue} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
