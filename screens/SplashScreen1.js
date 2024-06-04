import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const SplashScreen1 = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.startScreen}
      locations={[0, 0.85]}
      colors={["#393c50", "#010310"]}
    >
      <Pressable
        style={[styles.login, styles.loginLayout]}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <View style={[styles.loginChild, styles.childLayout]} />
        <Text style={styles.logIn}>Log in</Text>
      </Pressable>
      <Pressable
        style={[styles.signup, styles.loginLayout]}
        onPress={() => navigation.navigate("SignUpPage")}
      >
        <View style={[styles.signupChild, styles.childLayout]} />
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign up</Text>
      </Pressable>
      <Text style={[styles.letsStart, styles.letsStartPosition]}>
        Let’s Start!
      </Text>
      <Image
        style={[styles.noConnectionIcon, styles.letsStartPosition]}
        contentFit="cover"
        source={require("../assets/no-connection.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 54,
    width: 345,
    left: 15,
    position: "absolute",
  },
  childLayout: {
    borderRadius: Border.br_4xl,
    left: 0,
    bottom: 0,
    height: 54,
    width: 345,
    position: "absolute",
  },
  signUpTypo: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
  },
  letsStartPosition: {
    top: 68,
    position: "absolute",
  },
  loginChild: {
    backgroundColor: Color.labelColorDarkPrimary,
  },
  logIn: {
    left: 149,
    fontFamily: FontFamily.interRegular,
    color: Color.colorGray_400,
    textAlign: "center",
    letterSpacing: 0,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    bottom: 16,
    position: "absolute",
  },
  login: {
    bottom: 104,
  },
  signupChild: {
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderStyle: "solid",
    borderColor: Color.labelColorDarkPrimary,
    borderWidth: 1,
  },
  signUp: {
    left: 142,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    bottom: 16,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  signup: {
    bottom: 34,
  },
  letsStart: {
    left: 91,
    fontSize: FontSize.size_17xl,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
  },
  noConnectionIcon: {
    left: -41,
    width: 456,
    height: 456,
  },
  startScreen: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default SplashScreen1;
