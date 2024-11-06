import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from "../constants";
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CButton = ({ label, transparent }: { label: string, transparent?: boolean }) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity 
    onPress={() => {
        navigation.navigate("home" as never);
    }}
    style={[styles.primaryButton, transparent && styles.transparentButton]}>
      <Text style={[styles.primaryButtonText, transparent && styles.transparentButtonText]}>{label}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    primaryButton: {
      backgroundColor: COLORS.secondary,
      paddingVertical: 16,
      borderRadius: 16,
    },
    primaryButtonText: {
      textAlign: "center",
      color: "white",
      fontWeight: "bold",
    },
    transparentButton: {
        backgroundColor: 'transparent', 
        borderWidth: 2,
        borderColor: "rgb(59, 59, 123)",
      },
      transparentButtonText: {
        textAlign: "center",
        color: "rgb(59, 59, 123)", 
        fontWeight: "bold",
      },
  });

export default CButton