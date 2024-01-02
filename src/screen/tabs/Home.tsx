import { useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "../../components/Slider";
import MapView, { Marker } from "react-native-maps";

export const Home = () => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const [userLocation, setUserLocation] = useState(null);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.card,
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.card,
        }}
      >
        <Animated.View
          exiting={FadeInUp.duration(1000).springify()}
          style={{
            flex: 1,
            backgroundColor: theme.colors.card,
            minHeight: dimensions.height,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 26,
                fontWeight: "800",
                color: theme.colors.text,
              }}
            >
              ¡Bienvenido!
            </Text>
            <Text>Tu seguridad es nuestra misión</Text>
          </View>

          <View style={{ flex: 2 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: theme.colors.text,
                paddingBottom: 10,
                paddingTop: 15,
              }}
            >
              Lo último
            </Text>
            <Slider />
          </View>

          <View style={{ flex: 3, justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: theme.colors.text,
              }}
            >
              Descubre zonas en riesgo
            </Text>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <MapView
                style={{
                  width: dimensions.width * 0.9,
                  height: 200,
                  alignSelf: "center",
                  borderRadius: 20,
                }}
                initialRegion={{
                  latitude: userLocation?.latitude || 37.78825,
                  longitude: userLocation?.longitude || -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                {userLocation && (
                  <Marker
                    coordinate={{
                      latitude: userLocation.latitude,
                      longitude: userLocation.longitude,
                    }}
                    title="Mi Ubicación"
                    description="Aquí estoy"
                  />
                )}
              </MapView>
            </View>
          </View>

          <View
            style={{
              flex: 2,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: theme.colors.text,
                paddingBottom: 10,
                paddingTop: 10,
              }}
            >
              ¿Qué quieres hacer?
            </Text>
            <Animated.View
              entering={FadeInUp.delay(200).duration(1000).springify()}
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <TouchableOpacity
                onPress={() => alert("Reportar")}
                style={{
                  backgroundColor: theme.colors.background,
                  paddingHorizontal: 32,
                  height: 100,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                  width: "45%",
                  marginRight: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: theme.colors.text,
                  }}
                >
                  Chat de ayuda al ciudadano
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert("Buscar")}
                style={{
                  backgroundColor: theme.colors.background,
                  paddingHorizontal: 32,
                  height: 100,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                  width: "45%",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: theme.colors.text,
                  }}
                >
                  Entretenimiento y recursos
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => alert("Buscar")}
                style={{
                  backgroundColor: theme.colors.background,
                  paddingHorizontal: 32,
                  height: 100,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                  width: "50%",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "400",
                    color: theme.colors.text,
                  }}
                >
                  Buscar
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Animated.View>
      </SafeAreaView>
    </ScrollView>
  );
};
