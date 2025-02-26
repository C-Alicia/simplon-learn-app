import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "../../../screens/HomeScreen/style";
import CourseListItem from "../CourseListItem"; // Assurez-vous que ce composant affiche correctement chaque cours
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
        keyExtractor={(item) => item.id}  // Utilisez `id` comme clé unique
        style={styles.coursesList}
      />
    </View>
  );
}
