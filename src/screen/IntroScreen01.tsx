import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../navigators/RootNavigators";
import { SafeAreaView } from "react-native-safe-area-context";
import { INTRO_SCREEN_01 } from "../utils/constants";
import Artwork01 from "../components/artworks/Artwork01";
import { useTheme } from "@react-navigation/native";
import ScreenIndicators from "../components/ScreenIndicators";
import PrimaryButton from "../components/PrimaryButton";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const IntroScreen01 = ({
  navigation,
}: RootStackScreenProps<"IntroScreen01">) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.card, flex: 1 }}>
      <Animated.View
        entering={FadeInUp.delay(200).duration(600).springify()}
        style={{
          paddingHorizontal: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 500,
          paddingVertical: 40,
        }}
      >
        <Artwork01 width={360} height={360} />
      </Animated.View>
      <View
        style={{
          padding: 25,
        }}
      >
        <Animated.Text
          entering={FadeInDown.delay(200).duration(500).springify()}
          style={{
            fontSize: 40,
            fontWeight: "800",
            color: theme.colors.text,
          }}
        >
          {INTRO_SCREEN_01.title}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(500).springify()}
          style={{
            opacity: 0.5,
            marginTop: 16,
            fontSize: 16,
            color: theme.colors.text,
          }}
        >
          {INTRO_SCREEN_01.description}
        </Animated.Text>

        <ScreenIndicators count={3} activeIndex={0} />
        <Animated.View
          entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <PrimaryButton
            label="Next"
            style={{
              marginTop: 40,
              paddingHorizontal: 32,
              height: 52,
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.replace("IntroScreen02")}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen01;
