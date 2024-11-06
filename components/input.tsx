import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { COLORS } from "../constants";

const Input = (props: TextInput["props"] & { icon?: string }) => {
  const [isSecure, setIsSecure] = useState(props.secureTextEntry);
  return (
    <View style={styles.input_wrapper}>
      <Entypo
        name={(props.icon ?? "email") as any}
        size={24}
        color={COLORS.border}
        style={styles.input_icon}
      />

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
  input_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.border,
    borderRadius:10,
    borderWidth: 0.8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  input_icon: {
    marginRight: 10,
  },
  input_eye: {
    position: "absolute",
    right: 12,
  },
});

export default Input;
