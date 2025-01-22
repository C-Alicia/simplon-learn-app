import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "../RegisterScreen/style";
import COLORS from "../../constants/colors";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("BottomTabNav");
        // console.log(user);
      }
    });
  }, []);

  const loginAndGoToBottomTabNav = async () => {
    if (email.length > 0 && password.length > 0) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigation.navigate("BottomTabNav");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <Pressable style={styles.pressableContainer} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{`Connexion`}</Text>

        {/* Formulaire d'inscription */}

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
          onPress={loginAndGoToBottomTabNav}
        >
          <Text style={styles.buttonText}>{`Se connecter`}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.navigateButton}>S'inscrire</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Pressable>
  );
}
