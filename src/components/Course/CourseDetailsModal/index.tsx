import { View, Text, Modal, Pressable, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style';
import CourseStudentList from '../CourseStudentList';
import COLORS from '../../../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function CourseDetailsModal({modalVisible, setModalVisible, course}:any) {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const navigateToCourse = () => {
   navigation.navigate("Course", {course: course})
    setModalVisible(false)
  }

  return (
    <Modal
    visible={modalVisible}
    animationType="slide"
    transparent={true}
    onRequestClose={() => setModalVisible(false)}>
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <Text style={styles.description}>{course.chapterCount}{` chapitres`}</Text>
        <CourseStudentList/>
        <TouchableOpacity 
        onPress={navigateToCourse}
        style={styles.button}>
          <Text style={styles.buttonText}>
              {`Rejoindre le cours`}
          </Text>
          <MaterialIcons name="navigate-next" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(false)} >
          <Text style={styles.close}>{`Fermer`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
  )
}