import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<DrawerParamList> | undefined;
    NotFound: undefined;
  };
  
  export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
  >;
  
  export type DrawerParamList = {
    Home: undefined;
  };
  
  export type RootTabScreenProps<Screen extends keyof DrawerParamList> = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
