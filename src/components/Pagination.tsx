import React from "react";
import { View } from "react-native";

export const Pagination = ({ data }) => {
  return (
    <View
      style={{
        position: "absolute",
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      {data.map((_, i) => {
        return (
          <View
            key={i}
            style={{
              width: 7,
              height: 7,
              backgroundColor: "gray",
              borderRadius: 10,
              margin: 7,
            }}
          />
        );
      })}
    </View>
  );
};
