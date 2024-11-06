import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from "../constants";
import React from 'react'

const CButton = ({label}:{label: string}) => {
  return (
    <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>{label}</Text>
          </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    primaryButton: {
      backgroundColor: COLORS.secondary,
      paddingVertical: 12,
      borderRadius: 16,
    },
    primaryButtonText: {
      textAlign: "center",
      color: "white",
      fontWeight: "bold",
    },
  });

export default CButton