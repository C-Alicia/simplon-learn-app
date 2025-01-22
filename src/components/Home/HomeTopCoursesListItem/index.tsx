import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import styles from '../HomeTopCoursesList/style'
import CourseStudentList from '../../Course/CourseStudentList'
import CourseDetailsModal from '../../Course/CourseDetailsModal'
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeTopCoursesListItem({course}:any) {
    const [modalVisible, setModalVisible] = useState(false)
  return (
    <View
      style={[styles.courseCard, ]}
    >
      <Image
        style={styles.image}
        source={require("../../../../assets/images/simplon.png")}
      />
      <View style={styles.courseCardContent}>
      <View style={styles.courseCardTop}>
        <Text style={styles.smallText}>{`Onizuka`}</Text>
        <TouchableOpacity 
        onPress={() => setModalVisible(true)}
        style={styles.courseCardButton}>
          <MaterialIcons name="school" size={24} color={"#ffffff"} />
        </TouchableOpacity>
      </View>
        <Text style={styles.courseCardTitle}>{course.title}</Text>

        {/* student list */}
        <CourseStudentList />
      </View>
      <CourseDetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} course={course}/>
    </View>
  )
}