import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../../../screens/HomeScreen/style";

export default function CourseStudentListItem() {
  return (
    <Image
      // source={{uri: 'https://thispersondoesnotexist.com'}}
      source={require("../../../../assets/images/onizuka.png")}
      style={styles.courseCardAvatar}
    />
  );
}
