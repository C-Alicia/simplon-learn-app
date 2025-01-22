import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation,  } from '@react-navigation/native';
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function HomeHeader({title='Simplon Learn!', subtitle=`Apprend avec`}:any) {

  const nav = useNavigation<NativeStackNavigationProp<any>>();
  
  return (
    <View style={styles.header}>
        {/* Title */}
        <View>
          <Text style={[styles.subtitle, styles.subtitle]}>
            {subtitle}
          </Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        {/* profile pic */}
        <TouchableOpacity
        onPress={() => nav.navigate("Account")}
        >
          <Image
            // source={{uri: 'https://thispersondoesnotexist.com'}}
            source={require("../../../../assets/images/onizuka.png")}
            style={styles.profilePicture}
          />
        </TouchableOpacity>
      </View>
  )
}