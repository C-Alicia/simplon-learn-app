import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import ProfilePicPicker from "../../components/Account/ProfilePicPicker";
import { useIsFocused } from "@react-navigation/native";
import ProfilePicker from "../../components/Account/ProfilePicker";

export default function AccountScreen({ navigation }: any) {
  const [userInfo, setUserInfo] = useState<any>(null);
  // permet de savoir si on est sur cet écran
  const isFocused = useIsFocused();

  // State pour recharger les données de l'utilisateur après update du user
  const [refresh, setRefresh] = useState(false);

  const getUserInfo = async () => {
    if (auth.currentUser) {
      const docRef = doc(db, "users", auth.currentUser?.uid);
      const userInfo = await getDoc(docRef);
      if (userInfo?.exists()) {
        console.log("Document data:", userInfo?.data());
        setUserInfo(userInfo?.data());
      } else {
        console.log("No such document!");
      }
    }
  };

  useEffect(() => {
    if (auth?.currentUser) {
      getUserInfo();
      refresh && setRefresh(false);
    }
  }, [auth.currentUser, isFocused, refresh]);

  const handleSignOut = async () => {
    auth.signOut();
    // navigation.navigate("Login")
  };

  return (
    <View style={styles.container}>
      {/* Image */}

      {userInfo?.profilePic ? (
        <Image
          style={styles.image}
          source={{uri: userInfo.profilePic}
            
            // require("../../../assets/images/onizuka.png")
          }
        />
      ) : (
        <ProfilePicPicker userInfo={userInfo} setRefresh={setRefresh}/>
        // <ProfilePicker/>
      )}

      

      {/* Titre */}
      <Text style={styles.title}>{userInfo?.name}</Text>
      {/* Description */}
      {/* <Text style={styles.description}>
        {`Simplon Learn est une application d'e-learning dédiée au développement
        informatique.`}
      </Text> */}

      {/* Bouton Deconnexion */}
      <TouchableOpacity style={styles.disconnect} onPress={handleSignOut}>
        <Text style={styles.disconnectText}>{`Déconnexion`}</Text>
      </TouchableOpacity>
    </View>
  );
}
