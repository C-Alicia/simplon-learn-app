import {
  View,
  Text,
  TextInput,
  Pressable,
  Keyboard,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../../constants/colors";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../services/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("BottomTabNav");
        // console.log(user);
      }
    });
  }, []);

  const createUserAndGoToBottomTabNav = async () => {
    // Si email et password on inscrit l'utilisateur dans auth puis dans db
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //Une fois qu'il est créé on l'ajoute à la base de données firestore
          setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            CreatedAt: new Date().toUTCString(),
          });
        })
        .then(() => {
          alert("account created successfully 🎉");
          navigation.navigate("BottomTabNav");
        })
        .catch((err: any) => {
          alert(err.message);
        });
    }
  };

  return (
    <Pressable style={styles.pressableContainer} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{`Inscription`}</Text>

        {/* Formulaire d'inscription */}
        <Text style={styles.label}>Nom</Text>

        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Nom"
          placeholderTextColor={COLORS.light}
        />

        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="email"
          placeholderTextColor={COLORS.light}
          inputMode="email"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Mot de passe</Text>

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="******"
          secureTextEntry
          placeholderTextColor={COLORS.light}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={createUserAndGoToBottomTabNav}
        >
          <Text style={styles.buttonText}>{`S'inscrire`}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.navigateButton}>Se connecter</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Pressable>
  );
}
