import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import styles from './style';
import COLORS from '../../../constants/colors';
import appStyles from '../../../styles/appStyles';

export default function CategoryFilterListItem({category}:any) {
  return (
    <View style={styles.categoryFilter}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name={category.icon} size={24} color={COLORS.dark} />
          </View>
          <View style={styles.categorySeparator}></View>
          <View style={styles.categoryFilterName}>
            <Text style={appStyles.smallText}>{category.name}</Text>
          </View>
        </View>
  )
}