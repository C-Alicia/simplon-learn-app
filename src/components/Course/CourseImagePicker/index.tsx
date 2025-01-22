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

export default function CourseImagePicker({ image, setImage, setMimeType }: any) {
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
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

 

  return (
    <View style={styles.container}>
      {image && (
        <Image source={{ uri: image }} style={styles.image} />
      ) }

      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>{"Sélectionner une image"}</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
    width: '90%',
    height: 150,
    borderRadius: 10,
    borderColor: COLORS.light,
    borderWidth: 0.5,
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
