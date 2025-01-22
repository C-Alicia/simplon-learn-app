import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { auth } from "../../services/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function LandingScreen({ navigation }: any) {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // Si user on va vers la BottomTabNav (écran Home)
      if (user) {
        navigation.navigate("BottomTabNav");
        // console.log(user);
      }
    });
  }, []);

  return (
    // <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      {/* Image */}
      {/* <Image
       style={styles.tinyLogo}
       source={{
         uri: 'https://reactnative.dev/img/tiny_logo.png',
       }}
     /> */}
      <Image
        style={styles.image}
        source={require("../../../assets/images/simplon.png")}
      />
      {/* Titre */}
      <Text style={styles.title}>{`Prêt à apprendre avec Simplon Learn?`}</Text>
      {/* Description */}
      <Text style={styles.description}>
        {`Simplon Learn est une application d'e-learning dédiée au développement
informatique.`}
      </Text>
      {/* Bouton Navigation vers Home */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonText}>{`Explorer les cours`}</Text>

        <MaterialIcons name="navigate-next" size={32} color="#CE0033" />
      </TouchableOpacity>
    </View>
    // </SafeAreaView>
  );
}
