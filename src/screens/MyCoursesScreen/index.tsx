import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CourseList from "../../components/Course/CourseList";
import { courses } from "../../../assets/data/data";
import { categories } from "../../../assets/data/data";
import HomeHeader from "../../components/Home/HomeHeader";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import styles from "./style";
import CourseAddModal from "../../components/Course/CourseAddModal";
import { TouchableOpacity } from "react-native";
import CategoryFilter from "../../components/Category/CategoryFilter";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

export default function CourseScreen() {
  const [courses, setCourses] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const coursesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(coursesList);
    };

    fetchCourses();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* En-tête de l'écran */}
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

      {/* Filtre par catégorie */}
      <CategoryFilter categories={categories} />

      {/* Liste des cours */}
      <CourseList courses={courses} categories={categories} />

       {/* Bouton d'ajout de cours */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.buttonAdd}
      >
        <MaterialIcons name="assignment-add" size={24} color={COLORS.light} />
      </TouchableOpacity>

      {/* Modal d'ajout de cours */}
      <CourseAddModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        categories={categories}
      />
    </View>
  );
}
