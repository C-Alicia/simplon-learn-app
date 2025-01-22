import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import HomeTopCoursesListItem from '../HomeTopCoursesListItem'

export default function HomeTopCoursesList({courses}:any) {
  return (
    <View style={styles.coursesListContainer}>
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
      data={courses}
      renderItem={({ item }) => <HomeTopCoursesListItem course={item} />}
      keyExtractor={(item) => courses.indexOf(item)}
      // ListHeaderComponent={() => <CategoryFilter categories={categories}/>}
    />
   
  </View>
  )
}