import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { RootStackScreenProps } from "../navigators/RootNavigators";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import { LOG_IN_SCREEN } from "../utils/constants";
import PrimaryButton from "../components/PrimaryButton";
import Artwork03 from "../components/artworks/Artwork03";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const LoginScreen = ({ navigation }: RootStackScreenProps<"LogInScreen">) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();

  const handleLogin = () => {
    navigation.navigate("MenuTabs");
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.card,
          minHeight: dimensions.height,
        }}
      >
        <Animated.View
          exiting={FadeInUp.duration(1000).springify()}
          style={{
            paddingHorizontal: 24,
            height: 52,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.replace("IntroScreen02")}>
            <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Artwork03
            width={dimensions.width * 0.8}
            height={dimensions.width * 0.8}
          />
        </Animated.View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 30,
            paddingVertical: 25,
            backgroundColor: theme.colors.card,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          }}
        >
          <Animated.Text
            entering={FadeInDown.delay(100).duration(1000).springify()}
            style={{
              fontSize: 40,
              fontWeight: "800",
              color: theme.colors.text,
            }}
          >
            {LOG_IN_SCREEN.title}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={{
              opacity: 0.5,
              marginTop: 16,
              fontSize: 16,
              color: theme.colors.text,
            }}
          >
            {LOG_IN_SCREEN.description}
          </Animated.Text>
          <View style={{ alignItems: "center", gap: 16, marginTop: 25 }}>
            <Animated.View
              entering={FadeInDown.delay(200).duration(1000).springify()}
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <TextInput
                placeholder="Tu correo"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
                  width: "100%",
                }}
              />
              <Icons
                name="email"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  opacity: 0.5,
                }}
              />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <TextInput
                placeholder="Contraseña"
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  color: theme.colors.text,
                  paddingLeft: 48,
                  paddingRight: 12,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: theme.colors.background,
                  width: "100%",
                }}
                secureTextEntry
              />
              <Icons
                name="lock"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  opacity: 0.5,
                }}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PrimaryButton label="Ingresar" onPress={handleLogin} />
            </Animated.View>
            <View
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 0,
                flexDirection: "column",
              }}
            >
              <TouchableOpacity
                style={{
                  marginTop: 16,
                  alignItems: "center",
                }}
              >
                <Animated.Text
                  entering={FadeInDown.delay(600).duration(1000).springify()}
                  style={{
                    fontSize: 16,
                    marginTop: 0,
                    fontWeight: "400",
                    color: theme.colors.text,
                    paddingBottom: 0,
                    marginBottom: 0,
                    paddingTop: 0,
                  }}
                >
                  ¿Olvidaste tu contraseña?
                </Animated.Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginTop: 16,
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("RegisterScreen")}
              >
                <Animated.Text
                  entering={FadeInDown.delay(600).duration(1000).springify()}
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: theme.colors.text,
                  }}
                >
                  ¿No tienes cuenta aún?
                  <Text
                    style={{
                      color: theme.colors.primary,
                      fontSize: 16,
                      fontWeight: "500",
                      paddingBottom: 16,
                      marginBottom: 10,
                      paddingTop: 0,
                      marginTop: 0,
                    }}
                  >
                    {" "}
                    Regístrate
                  </Text>
                </Animated.Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
