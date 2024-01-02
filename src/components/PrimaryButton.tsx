import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

export default function PrimaryButton({
  onPress,
  label,
  style,
  labelStyle,
}: {
  onPress?: () => void;
  label: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: theme.colors.background,
          paddingHorizontal: 32,
          height: 52,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          {
            fontSize: 16,
            fontWeight: "600",
            color: theme.colors.text, 
          },
          labelStyle,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
