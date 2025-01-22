import { View, Text } from "react-native";
import React from "react";
import CourseStudentListItem from "../CourseStudentListItem";
import styles from "../../../screens/HomeScreen/style";

export default function CourseStudentList() {
  return (
    <View style={styles.courseCardStudentList}>
      <CourseStudentListItem />
      <CourseStudentListItem />
      <CourseStudentListItem />
      <View style={styles.courseCardStudentNumber}>
        <Text style={styles.smallImportantTextLight}>{`10+`}</Text>
      </View>
    </View>
  );
}
