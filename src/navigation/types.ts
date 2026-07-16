import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Intro: undefined;
  Start: undefined;
  WhoAreYou: undefined;
  Activity: undefined;
  ThermometerFirstPage: undefined;
  ThermometerSecondPage: undefined;
  ThermometerThirdPage: undefined;
  Ending: undefined;
};

export type NavigationProp<RouteName extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, RouteName>;
