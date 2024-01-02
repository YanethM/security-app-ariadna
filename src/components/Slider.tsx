import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SlideItem } from "./SlideItem";
import { Slides } from "../data/Slides";
import { Pagination } from "./Pagination";

export default function Slider() {
  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        snapToAlignment="center"
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <Pagination
        data={Slides}
      />
    </View>
  );
}
