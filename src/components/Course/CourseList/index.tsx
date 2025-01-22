import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "../../../screens/HomeScreen/style";
import CourseListItem from "../CourseListItem";
import Course from "../../../types/course";
import CategoryFilter from "../../Category/CategoryFilter";
import Category from "../../../types/category";

interface Props {
  courses: any;
  categories: Category[]
}

export default function CourseList({ courses, categories }: Props) {
  return (
    <View style={styles.coursesListContainer}>
      <FlatList
        data={courses}
        renderItem={({ item }) => <CourseListItem course={item} />}
        keyExtractor={(item) => courses.indexOf(item)}
        style={styles.coursesList}
        // ListHeaderComponent={() => <CategoryFilter categories={categories}/>}
      />
    </View>
  );
}
