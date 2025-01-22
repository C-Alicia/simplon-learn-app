import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./style";
import CategoryFilterListItem from "../CategoryFilterListItem";
import CourseList from "../../Course/CourseList";

export default function CategoryFilter({ categories }: any) {
  return (
    <View style={styles.filterContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => <CategoryFilterListItem category={item} />}
        keyExtractor={(item) => item.id}
        // ListFooterComponent={() => <CourseList courses={courses}/>}
      />
    </View>
  );
}
