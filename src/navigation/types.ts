import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  BSStackEnum,
  CarouselsStackEnum,
  DropdownsStackEnum,
  ListsStackEnum,
  MainStackEnum,
} from './navigationConfig';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackParamsList = {
  [MainStackEnum.BOTTOM_SHEETS_STACK]: NavigatorScreenParams<BSStackParamsList>;
  [MainStackEnum.LISTS_STACK]: NavigatorScreenParams<ListsStackParamsList>;
  [MainStackEnum.DROPDOWNS_STACK]: NavigatorScreenParams<DropdownsStackParamsList>;
  [MainStackEnum.CAROUSELS_STACK]: NavigatorScreenParams<CarouselsStackParamsList>;
};

export type MainStackScreenProps<T extends keyof MainStackParamsList> =
  DrawerScreenProps<MainStackParamsList, T>;

export type BSStackParamsList = {
  [BSStackEnum.BOTTOM_SHEETS]: undefined;
  [BSStackEnum.BS_REACTIVE]: undefined;
};

export type BSScreenProps<T extends keyof BSStackParamsList> =
  CompositeScreenProps<
    NativeStackScreenProps<BSStackParamsList, T>,
    MainStackScreenProps<keyof MainStackParamsList>
  >;

export type ListsStackParamsList = {
  [ListsStackEnum.LISTS]: undefined;
  [ListsStackEnum.ANIMATED_FL_REACTIIVE]: undefined;
};

export type ListsScreenProps<T extends keyof ListsStackParamsList> =
  CompositeScreenProps<
    NativeStackScreenProps<ListsStackParamsList, T>,
    MainStackScreenProps<keyof MainStackParamsList>
  >;

export type DropdownsStackParamsList = {
  [DropdownsStackEnum.DROPDOWNS]: undefined;
  [DropdownsStackEnum.DD_MENU_ANIMATION_REACTIIVE]: undefined;
};

export type DropdownsScreenProps<T extends keyof DropdownsStackParamsList> =
  CompositeScreenProps<
    NativeStackScreenProps<DropdownsStackParamsList, T>,
    MainStackScreenProps<keyof MainStackParamsList>
  >;

export type CarouselsStackParamsList = {
  [CarouselsStackEnum.CAROUSELS]: undefined;
  [CarouselsStackEnum.CIRCULAR_CAROUSEL_REACTIIVE]: undefined;
};

export type CarouselsScreenProps<T extends keyof CarouselsStackParamsList> =
  CompositeScreenProps<
    NativeStackScreenProps<CarouselsStackParamsList, T>,
    MainStackScreenProps<keyof MainStackParamsList>
  >;

declare global {
  namespace ReactNavigation {
    interface MainParamList extends MainStackParamsList {}
  }
}
