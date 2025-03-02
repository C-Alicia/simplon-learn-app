import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import CourseStudentList from "../CourseStudentList";
import styles from "../../../screens/HomeScreen/style";
import { MaterialIcons } from "@expo/vector-icons";
import CourseDetailsModal from "../CourseDetailsModal";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebaseConfig";

export default function CourseListItem({ course }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [authorName, setAuthorName] = useState("Chargement...");

  useEffect(() => {
    const fetchAuthorName = async () => {
      if (!course.authorId) return;
      
      console.log("🔍 Author ID récupéré :", course.authorId); // Vérifie si l'ID est bien reçu

      try {
        const authorRef = doc(db, "users", course.authorId);
        const authorSnap = await getDoc(authorRef);

        if (authorSnap.exists()) {
          console.log("✅ Données de l'auteur :", authorSnap.data()); // Affiche les données récupérées
          setAuthorName(authorSnap.data().name);
        } else {
          console.warn("⚠️ Auteur introuvable !");
          setAuthorName("Auteur inconnu");
        }
      } catch (error) {
        console.error("❌ Erreur lors de la récupération de l’auteur :", error);
        setAuthorName("Erreur");
      }
    };

    fetchAuthorName();
  }, [course.authorId]);

  return (
    <View style={[styles.courseCard, { backgroundColor: "rgba(255, 0, 0, 0.05)" }]}>
      <View style={styles.courseCardTop}>
        <Text style={styles.smallText}>{authorName}</Text> 
        <TouchableOpacity 
          onPress={() => setModalVisible(true)}
          style={styles.courseCardButton}>
          <MaterialIcons name="school" size={24} color={"#ffffff"} />
        </TouchableOpacity>
      </View>

      <View style={styles.courseCardContent}>
        <Text style={styles.courseCardTitle}>{course.title}</Text>
        <CourseStudentList />
      </View>
      
      <CourseDetailsModal modalVisible={modalVisible} setModalVisible={setModalVisible} course={course} />
    </View>
  );
}
