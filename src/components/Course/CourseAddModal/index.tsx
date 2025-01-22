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
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../../services/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CourseImagePicker from "../CourseImagePicker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import CourseVideoPicker from "../CourseVideoPicker";

export default function CourseAddModal({
  modalVisible,
  setModalVisible,
  categories,
}: any) {
  const [title, setTitle] = useState<string | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [chapterCount, setChapterCount] = useState<string | undefined>();
  
  const [image, setImage] = useState<any>(null);
  const [mimeType, setMimeType] = useState<any>(null);

  const [video, setVideo] = useState<any>(null);
  const [videoMimeType, setVideoMimeType] = useState<any>(null);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const addCourse = async (downloadURL: string, downloadVideoURL: string) => {
    await addDoc(collection(db, "courses"), {
      title: title,
      description: description,
      chapterCount: chapterCount,
      authorId: auth.currentUser?.uid,
      image: downloadURL,
      video: downloadVideoURL,
      CreatedAt: new Date().toUTCString(),
    })
      .then(() => {
        alert("Course created successfully 🎉");
        setModalVisible(false);
        navigation.navigate("Home");
      })
      .catch((err: any) => {
        alert(err.message);
      }); 
  };

  const saveImage = async () => {
    if (!image) {
      console.log("No image selected.");
      return;
    }

    if (!video) {
      console.log("No video selected.");
      return;
    }

    try {
      if (auth.currentUser?.uid) {
        const storageRef = ref(
          storage,
          `courseImages/${auth.currentUser?.uid}_${title?.replace(
            /\s/g,
            ""
          )}.${image.split('.').pop()}`
        );

        // Convert image URI to Blob
        const response = await fetch(image);
        const blob = await response.blob();

        // Create file metadata including the content type
        const metadata = {
          contentType: mimeType || "image/jpeg",
        };

        // Upload the file and metadata
        const uploadTaskSnapshot = await uploadBytes(
          storageRef,
          blob,
          metadata
        );

        // Get the download URL of the uploaded image
        const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);

        console.log("Image uploaded successfully! URL:", downloadURL);

        const storageRefV = ref(
          storage,
          `courseVideos/${auth.currentUser?.uid}_${title?.replace(
            /\s/g,
            ""
          )}.${video.split('.').pop()}`
        );

        // Convert image URI to Blob
        const responseV = await fetch(video);
        const blobV = await responseV.blob();

        // Create file metadata including the content type
        const metadataV = {
          contentType: videoMimeType || "video/quicktime",
        };

        // Upload the file and metadata
        const uploadTaskSnapshotVideo = await uploadBytes(
          storageRefV,
          blobV,
          metadataV
        );

        // Get the download URL of the uploaded image
        const downloadVideoURL = await getDownloadURL(uploadTaskSnapshotVideo.ref);
        console.log("Video uploaded successfully! URL:", downloadVideoURL);

        addCourse(downloadURL, downloadVideoURL);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const createCourseAndGoHome = async () => {
    if (title && description && chapterCount && image && video) {
      saveImage();
    }
  };

  return (
    
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModalVisible(false)}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.modalContainer}
      >
        
        <View style={styles.modalContent}>
        <ScrollView>
          {/* Formulaire d'inscription */}
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
                placeholder="description"
                placeholderTextColor={COLORS.light}
                multiline
                numberOfLines={4}
                maxLength={40}
              />

              <Text style={styles.label}>Nombre de chapitre</Text>

              <TextInput
                style={styles.input}
                onChangeText={setChapterCount}
                value={chapterCount}
                placeholder="chapitre"
                inputMode="numeric"
                placeholderTextColor={COLORS.light}
              />
              <Text style={styles.label}>Image</Text>

              <CourseImagePicker
                image={image}
                setImage={setImage}
                setMimeType={setMimeType}
              />

              <Text style={styles.label}>Vidéo</Text>

              <CourseVideoPicker
                video={video}
                setVideo={setVideo}
                setVideoMimeType={setVideoMimeType}
              />
            </View>
          </TouchableWithoutFeedback>

          <Text style={[styles.label, { marginBottom: 10 }]}>Categorie</Text>

          <CategoryFilter categories={categories} />

          <TouchableOpacity
            onPress={createCourseAndGoHome}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{`Créer le cours`}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.close}>{`Fermer`}</Text>
          </TouchableOpacity>
          </ScrollView>
        </View>
        
      </KeyboardAvoidingView>
    </Modal>
   
  );
}
