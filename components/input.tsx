import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { COLORS } from "../constants";

const Input = (props: TextInput["props"] & { icon?: string }) => {
  const [isSecure, setIsSecure] = useState(props.secureTextEntry);
  return (
    <View style={styles.input_wrapper}>
      <View style={styles.input_icon}>
        <Entypo
          name={(props.icon ?? "email") as any}
          size={24}
          color={COLORS.border}
        />
      </View>
      <TextInput
        placeholderTextColor={COLORS.border}
        style={styles.input}
        {...props}
        secureTextEntry={isSecure}
      />
      {props.secureTextEntry && (
        <Pressable
          style={styles.input_eye}
          onPress={() => {
            setIsSecure(!isSecure);
          }}
        >
          <Entypo name={isSecure ? "eye-with-line" : "eye"} size={20} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
    borderColor: COLORS.border,
    borderWidth: 0.4,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flex: 1,
  },
  input_icon: {
    padding: 10,
  },
  input_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  input_eye: {
    position: "absolute",
    right: 12,
  },
});

export default Input;
 