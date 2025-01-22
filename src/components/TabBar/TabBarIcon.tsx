import { View, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabBarIcon({ iconName, iconColor, title }: any) {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", paddingTop: 10 }}
    >
      <MaterialIcons
        size={20}
        style={{ marginBottom: 2 }}
        name={iconName}
        color={iconColor}
      />
      <Text
        style={{
          color: iconColor,
          fontFamily: "NunitoSans_600SemiBold",
          fontSize: 15,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
