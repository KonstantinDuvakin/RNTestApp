import {DrawerScreenProps} from '@react-navigation/drawer';
import {BSStackEnum, MainStackEnum} from './navigationConfig';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainStackParamsList = {
  [MainStackEnum.BOTTOM_SHEET_STACK]: NavigatorScreenParams<BSStackParamsList>;
  [MainStackEnum.LISTS_STACK]: NavigatorScreenParams<ListsStackParamsList>;
};

export type MainStackScreenProps<T extends keyof MainStackParamsList> =
  DrawerScreenProps<MainStackParamsList, T>;

export type BSStackParamsList = {
  [BSStackEnum.BOTTOM_SHEETS]: undefined;
  [BSStackEnum.BS_REACTIVE_YT]: undefined;
};

export type BSScreenProps<T extends keyof BSStackParamsList> =
  CompositeScreenProps<
    NativeStackScreenProps<BSStackParamsList, T>,
    MainStackScreenProps<keyof MainStackParamsList>
  >;

export type ListsStackParamsList = {
  [BSStackEnum.BOTTOM_SHEETS]: undefined;
  [BSStackEnum.BS_REACTIVE_YT]: undefined;
};

export type ListsScreenProps<T extends keyof ListsStackParamsList> =
  CompositeScreenProps<
    NativeStackScreenProps<ListsStackParamsList, T>,
    MainStackScreenProps<keyof MainStackParamsList>
  >;

declare global {
  namespace ReactNavigation {
    interface MainParamList extends MainStackParamsList {}
  }
}
