import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.splashScreen}
      locations={[0, 0.85]}
      colors={["#393c50", "#010310"]}
    >
      <Pressable
        style={styles.proceed}
        onPress={() => navigation.navigate("SplashScreen1")}
      >
        <View style={styles.proceedChild} />
        <Text style={[styles.proceed1, styles.proceed1FlexBox]}>Proceed</Text>
      </Pressable>
      <View style={[styles.description, styles.descriptionLayout]}>
        <Text style={[styles.printAnytimeAnywhere, styles.descriptionLayout]}>
          Print anytime, anywhere. Ink Link makes printing effortless.
        </Text>
        <Text style={[styles.instantInk, styles.inkClr]}>Instant Ink</Text>
      </View>
      <Text style={[styles.inkLink, styles.inkClr]}>Ink Link</Text>
      <Image
        style={styles.secureDocumentIcon}
        contentFit="cover"
        source={require("../assets/secure-document.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  proceed1FlexBox: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    left: 0,
  },
  descriptionLayout: {
    width: 213,
    position: "absolute",
  },
  inkClr: {
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  proceedChild: {
    borderRadius: Border.br_base,
    backgroundColor: Color.labelColorDarkPrimary,
    left: 0,
    top: 0,
    height: 35,
    width: 145,
    position: "absolute",
  },
  proceed1: {
    fontSize: FontSize.size_base,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.labelSmall,
    color: Color.colorBlack,
    alignItems: "center",
    letterSpacing: 0,
    justifyContent: "center",
    top: 0,
    height: 35,
    width: 145,
    position: "absolute",
  },
  proceed: {
    top: 732,
    left: 116,
    height: 35,
    width: 145,
    position: "absolute",
  },
  printAnytimeAnywhere: {
    top: 44,
    fontSize: FontSize.labelSmall_size,
    lineHeight: 16,
    fontFamily: FontFamily.interRegular,
    color: "rgba(255, 255, 255, 0.8)",
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    left: 0,
  },
  instantInk: {
    left: 34,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.labelColorDarkPrimary,
    textAlign: "center",
    letterSpacing: 0,
    top: 0,
  },
  description: {
    top: 470,
    left: 81,
    height: 76,
  },
  inkLink: {
    top: 352,
    left: 73,
    fontSize: 64,
    fontFamily: FontFamily.anuratiRegular,
    textAlign: "left",
    width: 230,
    height: 76,
    alignItems: "center",
    display: "flex",
    color: Color.labelColorDarkPrimary,
  },
  secureDocumentIcon: {
    top: 211,
    left: 106,
    width: 197,
    height: 141,
    position: "absolute",
  },
  splashScreen: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default SplashScreen;
