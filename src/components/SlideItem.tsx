import React from "react";
import moment from "moment";
import { Dimensions, Image, Text, View } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export const SlideItem = ({ item }) => {
  const { width } = Dimensions.get("window");

  const formattedDate = moment(item.incident_date).calendar(null, {
    sameDay: "[Hoy]",
    nextWeek: "dddd",
    lastDay: "[Ayer]",
    lastWeek: "DD/MM/YYYY",
    sameElse: "DD/MM/YYYY",
  });

  const formattedDateTime = moment(item.incident_date).format("h:mm A");

  return (
    <Animated.View
    entering={FadeInUp.delay(200).duration(1000).springify()}
      style={{
        width: width * 0.8,
        height: 120,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FBFBFB",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2.6,
        marginHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
          width: width * 0.8,
        }}
      >
        <Image
          source={{ uri: item.incident_image }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            marginHorizontal: 10,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "black",
            }}
          >
            {item.incident_name}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "300",
              color: "black",
            }}
          >
            {item.incident_location} {formattedDate} a las {formattedDateTime}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "400",
          color: "blue",
          textAlign: "center",
          paddingHorizontal: 20,
        }}
      >
        Ver más información
      </Text>
    </Animated.View>
  );
};
