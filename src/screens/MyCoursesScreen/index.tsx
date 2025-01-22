import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CourseList from '../../components/Course/CourseList'
import { courses } from '../../../assets/data/data'
import { categories } from '../../../assets/data/data'
import HomeHeader from '../../components/Home/HomeHeader'
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from '../../constants/colors'
import styles from './style'
import CourseAddModal from '../../components/Course/CourseAddModal'

export default function MyCoursesScreen() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View
    style={{flex:1}}
    >
      <HomeHeader title="Cours" subtitle="Parcours tes"/>
      <View
      style={{flexDirection: 'row',
        width: '98%', borderWidth: 1, alignSelf: 'center'
      }}
      >
        
        <TouchableOpacity
        style={{width: '50%', alignItems: 'center', justifyContent: 'center', padding: 10, borderRightWidth: 1 }}
        >
          <Text>
            Suivis
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}
        >
          <Text>
            Créés
          </Text>
        </TouchableOpacity>
      </View>
      {/* Courses List */}
      <CourseList courses={courses} categories={categories}/>
      {/* Bouton pour accéder au formulaire d'ajout de cours */}
      <TouchableOpacity
       onPress={() => setModalVisible(true)}
      style={styles.buttonAdd}
      >
      <MaterialIcons name="assignment-add" size={24} color={COLORS.light} />
      </TouchableOpacity>
      
      <CourseAddModal modalVisible={modalVisible} setModalVisible={setModalVisible} categories={categories}/>
    </View>
  )
}