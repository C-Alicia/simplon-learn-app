import { useState } from "react";
import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import COLORS from "../../../constants/colors";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../../../services/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export default function ProfilePicPicker({ userInfo, setRefresh }: any) {
  const [image, setImage] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<any>(null);

  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      // set type pour les metadata
      setMimeType(result.assets[0].mimeType);
    }
  };

 
  const saveImage = async () => {
    if (!image) {
      console.log("No image selected.");
      return;
    }

    try {
      if(auth.currentUser?.uid){
      const storageRef = ref(storage, `profilePics/${auth.currentUser?.uid}.jpg`);

      // Convert image URI to Blob
      const response = await fetch(image);
      const blob = await response.blob();

      // Create file metadata including the content type
      const metadata = {
        contentType: mimeType || "image/jpeg",
      };

      // Upload the file and metadata
      const uploadTaskSnapshot = await uploadBytes(storageRef, blob, metadata);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);

      setImageUrl(downloadURL);

      console.log("Image uploaded successfully! URL:", downloadURL);

      // Update user data with the image URL
      await updateUserProfilePic(downloadURL, auth.currentUser?.uid);
    }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const updateUserProfilePic = async (url: string, uid: string) => {
    try {
      // Update user data in Firestore with the image URL
      const docRef = doc(db, "users", uid);

      await updateDoc(docRef, {
        profilePic: url,
      });
      console.log("User profile picture updated successfully!");
      setRefresh(true)
    } catch (error) {
      console.error("Error updating user profile picture:", error);
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={styles.userInitial}>
          <Text style={styles.initialText}>
            {userInfo?.name.substring(0, 1)}
          </Text>
        </View>
      )}

      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>{"Sélectionner une image"}</Text>
      </TouchableOpacity>

      {image && (
        <TouchableOpacity onPress={saveImage} style={styles.button}>
          <Text style={styles.buttonText}>{"Sauvegarder"}</Text>
        </TouchableOpacity>
      )}
      {/* <Button title="Pick an image from camera roll"  /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  userInitial: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: COLORS.light,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: COLORS.light,
    borderWidth: 1,
  },
  initialText: {
    fontSize: 60,
    fontFamily: "NunitoSans_700Bold",
    color: COLORS.light,
  },
  button: {
    margin: 20,
    backgroundColor: COLORS.light,
    padding: 6,
  },
  buttonText: {
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: "NunitoSans_700Bold",
    color: COLORS.primary,
  },
});
