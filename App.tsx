import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro from "./src/pages/intro";
import Start from "./src/pages/start";
import WhoAreYou from "./src/pages/who-are-you";
import Activity from "./src/pages/activity";
import ThermometerFirstPage from "./src/pages/thermometer-first-page";
import ThermometerSecondPage from "./src/pages/thermometer-second-page";
import ThermometerThirdPage from "./src/pages/thermometer-third-page";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="WhoAreYou" component={WhoAreYou} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="ThermometerFirstPage" component={ThermometerFirstPage} />
        <Stack.Screen name="ThermometerSecondPage" component={ThermometerSecondPage} />
        <Stack.Screen name="ThermometerThirdPage" component={ThermometerThirdPage} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
