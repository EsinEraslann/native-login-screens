import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../constants";
import Input from "../../components/input";
import CButton from "../../components/button";
import BottomLink from "../../components/bottom-link";

const SignupScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          paddingHorizontal: 32,
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 300,
            }}
          >
            <Image
              style={{
                height: 250,
                width: 350,
                objectFit: "contain",
                position: "absolute",
              }}
              source={require("../../assets/relaxation.png")}
            />
          </View>
          <Text style={styles.title}>Register</Text>
          <Text style={styles.subtitle}>Create your account</Text>
          <View style={{ rowGap: 32 }}>
            <Input placeholder="Email ID" />
            <Input icon="lock" placeholder="Password" secureTextEntry={true} />
          </View>
          <Text
            style={{
              color: COLORS.secondary,
              textAlign: "right",
              marginVertical: 12,
            }}
          >
            Forgot Password?
          </Text>
        </View>
        <CButton label="Register" />
        <BottomLink
          preText="Already have an account?"
          postText="Login"
          route="login"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: COLORS.primary,
    textAlign:"center",
  },
  subtitle: {
    color: COLORS.primary,
    textAlign:"center",
    paddingBottom: 10,
  },
});

export default SignupScreen;
