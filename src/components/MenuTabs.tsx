// MenuTabs.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  EmergencyCall,
  Forum,
  Home,
  Localization,
  SecurityAlerts,
} from "../screen/tabs";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const Tab = createBottomTabNavigator();

const PulsatingButton = ({ focused }) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    const animationDuration = 7000;
    scale.value = withRepeat(
      withTiming(1, {
        duration: animationDuration / 2, // La mitad del tiempo para ir a 1.2
        easing: Easing.inOut(Easing.ease),
      }),
      1,
      false // No repitas automáticamente después
    );

    const timer = setTimeout(() => {
      scale.value = withTiming(1, {
        duration: animationDuration / 2, // La mitad del tiempo para volver a 1
        easing: Easing.inOut(Easing.ease),
      });
    }, animationDuration);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
          width: 70,
          height: 70,
          borderRadius: 50,
          backgroundColor: "red",
          shadowColor: "#7F5DF0",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 10,
        },
        animatedStyle,
      ]}
    >
      <Feather
        name="phone-call"
        size={32}
        color={focused ? "white" : "white"}
      />
    </Animated.View>
  );
};

export const MenuTabs = () => {
  const theme = useTheme();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,

          tabBarStyle: {
            position: "absolute",
            bottom: 5,
            left: 5,
            right: 5,
            elevation: 0,
            backgroundColor: "#ffffff",
            borderRadius: 10,
            height: 70,
            ...styles.shadow,
          },
        }}
        initialRouteName="MainMenu"
      >
        <Tab.Screen
          name="MainMenu"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo
                  name="home"
                  size={27}
                  color={focused ? "blue" : "#BDBDBD"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Localization"
          component={Localization}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo
                  name="location-pin"
                  size={27}
                  color={focused ? "blue" : "#BDBDBD"}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="EmergencyCall"
          component={EmergencyCall}
          options={{
            tabBarIcon: ({ focused }) => <PulsatingButton focused={focused} />,
          }}
        />

        <Tab.Screen
          name="SecurityAlerts"
          component={SecurityAlerts}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  elevation: 5,
                }}
              >
                <Entypo
                  name="warning"
                  size={27}
                  color={focused ? "blue" : "#BDBDBD"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Forum"
          component={Forum}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Entypo
                  name="message"
                  size={27}
                  color={focused ? "blue" : "#BDBDBD"}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
