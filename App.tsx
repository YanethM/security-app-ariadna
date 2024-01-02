import { StatusBar } from "expo-status-bar";
import { StyleSheet, useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
  DarkTheme,
} from "@react-navigation/native";
import { RootNavigators } from "./src/navigators/RootNavigators";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useMemo } from "react";
import { MenuTabs } from "./src/components/MenuTabs";

export default function App() {
  const colorScheme = useColorScheme();
  const theme: Theme = useMemo(
    () =>
      colorScheme === "dark"
        ? {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: "#fff",
              background: "#31373fcc",
              card: "#000",
              text: "#fff",
            },
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              primary: "#000",
              background: "#31373f2e",
              card: "#fff",
              text: "#000",
            },
          },
    [colorScheme]
  );

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer theme={theme}>
        <RootNavigators />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
