import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import COLORS from "../../../constants/colors";
import CategoryFilter from "../../Category/CategoryFilter";
import { addDoc, collection } from "firebase/firestore";
import { auth, db, storage } from "../../../services/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CourseImagePicker from "../CourseImagePicker";
import CourseVideoPicker from "../CourseVideoPicker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function CourseAddModal({
  modalVisible,
  setModalVisible,
  categories,
}: any) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [chapterCount, setChapterCount] = useState<string>("");

  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null);
  const [videoMimeType, setVideoMimeType] = useState<string | null>(null);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const uploadFile = async (
    fileUri: string | null,
    fileType: string | null,
    folder: string
  ): Promise<string | null> => {
    if (!fileUri) return null;

    try {
      const fileExt = fileUri.split(".").pop();
      const fileName = `${auth.currentUser?.uid}_${title.replace(/\s/g, "")}.${fileExt}`;
      const storageRef = ref(storage, `${folder}/${fileName}`);

      const response = await fetch(fileUri);
      const blob = await response.blob();
      const metadata = { contentType: fileType || "application/octet-stream" };

      const uploadTaskSnapshot = await uploadBytes(storageRef, blob, metadata);
      return await getDownloadURL(uploadTaskSnapshot.ref);
    } catch (error) {
      console.error(`Error uploading ${folder}:`, error);
      return null;
    }
  };

  const saveCourse = async () => {
    if (!title || !description || !chapterCount) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    try {
      const [downloadURL, downloadVideoURL] = await Promise.all([
        uploadFile(image, mimeType, "courseImages"),
        uploadFile(video, videoMimeType, "courseVideos"),
      ]);

      await addDoc(collection(db, "courses"), {
        title,
        description,
        chapterCount,
        authorId: auth.currentUser?.uid,
        image: downloadURL,
        video: downloadVideoURL,
        createdAt: new Date().toUTCString(),
      });

      alert("Cours créé avec succès 🎉");
      setModalVisible(false);
      navigation.navigate("Home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Modal visible={modalVisible} animationType="slide" transparent onRequestClose={() => setModalVisible(false)}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.formContainer}>
                <Text style={styles.title}>Créer un cours</Text>

                <Text style={styles.label}>Titre</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setTitle}
                  value={title}
                  placeholder="Titre"
                  placeholderTextColor={COLORS.light}
                />

                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setDescription}
                  value={description}
                  placeholder="Description"
                  placeholderTextColor={COLORS.light}
                  multiline
                  numberOfLines={4}
                  maxLength={40}
                />

                <Text style={styles.label}>Nombre de chapitres</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={setChapterCount}
                  value={chapterCount}
                  placeholder="Nombre de chapitres"
                  inputMode="numeric"
                  placeholderTextColor={COLORS.light}
                />

                <Text style={styles.label}>Image</Text>
                <CourseImagePicker image={image} setImage={setImage} setMimeType={setMimeType} />

                <Text style={styles.label}>Vidéo</Text>
                <CourseVideoPicker video={video} setVideo={setVideo} setVideoMimeType={setVideoMimeType} />
              </View>
            </TouchableWithoutFeedback>

            <Text style={[styles.label, { marginBottom: 10 }]}>Catégorie</Text>
            <CategoryFilter categories={categories} />

            <TouchableOpacity onPress={saveCourse} style={styles.button}>
              <Text style={styles.buttonText}>Créer le cours</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.close}>Fermer</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
