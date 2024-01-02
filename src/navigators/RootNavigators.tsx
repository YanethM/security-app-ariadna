import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React from "react";
import IntroScreen01 from "../screen/IntroScreen01";
import IntroScreen02 from "../screen/IntroScreen02";
import LoginScreen from "../screen/LogInScreen";
import { RegisterScreen } from "../screen/RegisterScreen";
import { MenuTabs } from "../components/MenuTabs";
import { IntroMap } from "../components/IntroMap";

export type RootStackParamList = {
  IntroMap: undefined;
  IntroScreen01: undefined;
  IntroScreen02: undefined;
  LogInScreen: undefined;
  RegisterScreen: undefined;
  MenuTabs: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export const RootNavigators = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="IntroMap"
          component={IntroMap}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <RootStack.Screen
          name="IntroScreen01"
          component={IntroScreen01}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <RootStack.Screen
          name="IntroScreen02"
          component={IntroScreen02}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <RootStack.Screen
          name="LogInScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <RootStack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
        <RootStack.Screen
          name="MenuTabs"
          component={MenuTabs}
          options={{
            headerShown: false,
            animation: "fade",
          }}
        />
  
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
