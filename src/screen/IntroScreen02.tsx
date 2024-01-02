import { View, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../navigators/RootNavigators";
import { SafeAreaView } from "react-native-safe-area-context";
import Artwork02 from "../components/artworks/Artwork02";
import { INTRO_SCREEN_02 } from "../utils/constants";
import ScreenIndicators from "../components/ScreenIndicators";
import PrimaryButton from "../components/PrimaryButton";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const IntroScreen02 = ({
  navigation,
}: RootStackScreenProps<"IntroScreen02">) => {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.card, flex: 1 }}>
      <Animated.View
        exiting={FadeInUp.duration(1000).springify()}
        style={{
          paddingHorizontal: 25,
          height: 52,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("IntroScreen01")}>
          <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
        style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
      >
        <Artwork02 width={360} height={360} />
      </Animated.View>
      <View
        style={{
          padding: 24,
        }}
      >
        <Animated.Text
          entering={FadeInDown.delay(200).duration(1000).springify()}
          style={{
            fontSize: 40,
            fontWeight: "800",
            color: theme.colors.text,
          }}
        >
          {INTRO_SCREEN_02.title}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(1000).springify()}
          style={{
            opacity: 0.5,
            marginTop: 16,
            fontSize: 16,
            color: theme.colors.text,
          }}
        >
          {INTRO_SCREEN_02.description}
        </Animated.Text>
        <Animated.View
          entering={FadeInDown.delay(200).duration(1000).springify()}
        >
          <ScreenIndicators activeIndex={1} count={3} />
        </Animated.View>
        <Animated.View
          style={{ alignItems: "center" }}
          entering={FadeInDown.delay(400).duration(1000).springify()}
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
            onPress={() => navigation.replace("LogInScreen")}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen02;
