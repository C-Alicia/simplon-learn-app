import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./style";
import HomeHeader from "../../components/Home/HomeHeader";
import CategoryFilter from "../../components/Category/CategoryFilter";
import CourseList from "../../components/Course/CourseList";
// import { courses } from "../../../assets/data/data";
import { categories } from "../../../assets/data/data";
import HomeTopCoursesList from "../../components/Home/HomeTopCoursesList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { useIsFocused } from "@react-navigation/native";

const HomeScreen: React.FC = ({route}:any) => {
  const [courses, setCourses] = useState<any>(null);
  // permet de savoir si on est sur cet écran
  const isFocused = useIsFocused()

  const getCourses = async () => {
    const querySnapshot = await getDocs(collection(db, "courses"));
    // console.log(querySnapshot)
    const coursesData = querySnapshot.docs.map((doc) => doc.data());

    setCourses(coursesData);

    // let getCoursesList: any[] = [];
    // querySnapshot.forEach((course) => {
    //   const data = course.data();
    //   const id = course.id;
    //   const courseWithId = { ...data, id };
    //   getCoursesList.push(courseWithId);
    // });
    // setCourses(getCoursesList);
  };

  // console.log(courses)

  useEffect(() => {
    getCourses();
  }, [isFocused]);

  return (
    
      <View style={styles.container}>
        <View>
          {/* HomeScreen Header */}
          <HomeHeader />
          
         
          {/* Top cours */}
          <HomeTopCoursesList courses={courses} /> 

          

          {/* Courses List */}
          <CourseList courses={courses} categories={categories} />
        </View>
      </View>
  
  );
};

export default HomeScreen;
