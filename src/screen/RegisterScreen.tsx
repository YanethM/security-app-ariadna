import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Modal,
  Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import Icons from "@expo/vector-icons/MaterialIcons";
import { RootStackScreenProps } from "../navigators/RootNavigators";
import PrimaryButton from "../components/PrimaryButton";
import Artwork04 from "../components/artworks/Artwork04";

export const RegisterScreen = ({
  navigation,
}: RootStackScreenProps<"RegisterScreen">) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    console.log("Registrarse");
    navigation.replace("LogInScreen");
  };

  const updateButtonState = () => {
    const areAllFieldsFilled = name && phone && email && password;
    setIsButtonEnabled(areAllFieldsFilled && acceptedTerms);
  };

  const handleTermsChange = (value) => {
    setAcceptedTerms(value);
    updateButtonState();
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
          <TouchableOpacity onPress={() => navigation.replace("LogInScreen")}>
            <Icons name="arrow-back-ios" size={24} color={theme.colors.text} />
          </TouchableOpacity>
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
          <Text
            style={{
              fontSize: 40,
              fontWeight: "800",
              color: theme.colors.text,
              marginBottom: 20,
            }}
          >
            Registro
          </Text>
          <View style={{ alignItems: "center", gap: 16, marginTop: 25 }}>
            <TouchableOpacity
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: theme.colors.background,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icons name="add-a-photo" size={24} color={theme.colors.text} />
            </TouchableOpacity>
            <Text style={{ color: theme.colors.text }}>Subir foto</Text>

            <View
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <TextInput
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
                placeholder="Nombre de usuario"
                value={name}
                onChangeText={(text) => setName(text)}
              />
              <Icons
                name="person"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  opacity: 0.5,
                }}
              />
            </View>

            <View
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <TextInput
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
                placeholder="Número de celular"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                keyboardType="phone-pad"
              />
              <Icons
                name="phone"
                size={24}
                color={theme.colors.text}
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  opacity: 0.5,
                }}
              />
            </View>
            <View
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <TextInput
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
                placeholder="Correo electrónico"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
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
            </View>

            <View
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <TextInput
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
                placeholder="Contraseña"
                value={password}
                onChangeText={(text) => setPassword(text)}
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
            </View>
            <View
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <TextInput
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
                placeholder="Confirmar contraseña"
                value={password}
                onChangeText={(text) => setPassword(text)}
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
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                <TouchableOpacity onPress={() => setShowModal(true)}>
                  <Text style={{ color: theme.colors.text }}>
                    {acceptedTerms
                      ? "Has aceptado los términos y condiciones"
                      : "No has aceptado términos y condiciones"}
                  </Text>
                </TouchableOpacity>
                <Modal
                  visible={showModal}
                  animationType="slide"
                  transparent={true}
                  onRequestClose={() => setShowModal(false)}
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "rgba(0,0,0,0.5)",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        position: "absolute",
                        top: 40,
                        right: 20,
                        zIndex: 1,
                      }}
                      onPress={() => setShowModal(false)}
                    >
                      <Icons name="close" size={24} color="black" />
                    </TouchableOpacity>

                    <View
                      style={styles.modalContainer}
                      onTouchStart={(e) => e.stopPropagation()}
                    >
                      <Animated.View
                        entering={FadeInUp.delay(200)
                          .duration(1000)
                          .springify()}
                        style={{
                          marginBottom: 20,
                          transform: [{ scale: 1.2 }],
                        }}
                      >
                        <Artwork04
                          width={150}
                          height={150}
                          customStyles={{
                            marginBottom: 20,
                            transform: [{ scale: 1.2 }],
                          }}
                        />
                      </Animated.View>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          marginBottom: 20,
                        }}
                      >
                        Términos y Condiciones
                      </Text>
                      <Text style={styles.termsItem}>
                        ✓ Acceder a mi ubicación en tiempo real
                      </Text>
                      <Text style={styles.termsItem}>
                        ✓ Acceso a la cámara para compartir y tomar fotos
                      </Text>
                      <Text style={styles.termsItem}>
                        ✓ Permiso para enviar notas de voz
                      </Text>
                      <Switch
                        value={acceptedTerms}
                        onValueChange={handleTermsChange}
                        style={{ marginBottom: 10 }}
                      />
                      <Text style={{ color: theme.colors.text }}>
                        {acceptedTerms
                          ? "Has aceptado los términos y condiciones"
                          : "No has aceptado términos y condiciones"}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-around",
                          width: "100%",
                          marginTop: 20,
                        }}
                      >
                        <PrimaryButton
                          label={
                            acceptedTerms
                              ? "Continuar con el registro"
                              : "Quizás después"
                          }
                          onPress={() => setShowModal(false)}
                        />
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>

            <Animated.View
              entering={FadeInDown.delay(600).duration(1000).springify()}
              style={{
                marginTop: 20,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PrimaryButton label="Registrarme" onPress={handleRegistration} />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  countryPicker: {
    height: 40,
    width: 80,
    marginRight: 10,
  },
  modalContainer: {
    width: "95%",
    height: "93%",
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  termsItem: {
    marginBottom: 10,
  },
  disabled: {
    backgroundColor: "gray",
  },
});
