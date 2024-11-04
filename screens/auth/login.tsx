import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 32,
        }}
      >
        <View
          style={{
            height: 200,
            backgroundColor: "#d3d3d3",
          }}
        ></View>
        <Text style={styles.title}>Login</Text>
        <View>
            <View></View>
            <TextInput />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: COLORS.primary,
  },
});

export default LoginScreen;
