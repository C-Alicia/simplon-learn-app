import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CourseStudentList from "../CourseStudentList";
import styles from "../../../screens/HomeScreen/style";
import { MaterialIcons } from "@expo/vector-icons";
import CourseDetailsModal from "../CourseDetailsModal";
import { users } from "../../../../assets/data/data";

export default function CourseListItem({course}:any) {
  const [modalVisible, setModalVisible] = useState(false)
   
  return (
    <View
      style={[styles.courseCard, { backgroundColor: "rgba(255, 0, 0, 0.05)" }]}
    >
      <View style={styles.courseCardTop}>
        <Text style={styles.smallText}>{users.id}</Text>
        <TouchableOpacity 
        onPress={() => setModalVisible(true)}
        style={styles.courseCardButton}>
          <MaterialIcons name="school" size={24} color={"#ffffff"} />
        </TouchableOpacity>
      </View>

      <View style={styles.courseCardContent}>
        <Text style={styles.courseCardTitle}>{course.title}</Text>

        {/* student list */}

        






        <CourseStudentList />
      </View>
      <CourseDetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} course={course}/>
    </View>
  );
}
