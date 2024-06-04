import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Scan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.imageopen}>
      <View style={[styles.footer, styles.footerPosition]}>
        <Text style={[styles.inactive, styles.activeTypo]}>Inactive</Text>
        <Text style={[styles.active, styles.activeTypo]}>Active</Text>
      </View>
      <Image
        style={styles.flashLightIcon}
        contentFit="cover"
        source={require("../assets/flash-light.png")}
      />
      <Image
        style={[styles.theFlashHead, styles.footerPosition]}
        contentFit="cover"
        source={require("../assets/the-flash-head.png")}
      />
      <Image
        style={styles.cameraIcon}
        contentFit="cover"
        source={require("../assets/camera.png")}
      />
      <Pressable
        style={styles.goBack}
        onPress={() => navigation.navigate("MainMenu")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/multiply.png")}
        />
      </Pressable>
      <Pressable
        style={styles.scan}
        onPress={() => navigation.navigate("Scan")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/scan.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  footerPosition: {
    display: "none",
    position: "absolute",
  },
  activeTypo: {
    height: 30,
    textAlign: "center",
    color: Color.colorSilver_200,
    fontFamily: FontFamily.labelSmall,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    position: "absolute",
  },
  inactive: {
    top: 0,
    left: 284,
    fontSize: FontSize.labelSmall_size,
    width: 74,
  },
  active: {
    top: 2,
    left: 0,
    fontSize: FontSize.size_3xs,
    width: 49,
  },
  footer: {
    top: 820,
    left: 11,
    width: 357,
    height: 32,
  },
  flashLightIcon: {
    top: 51,
    left: 335,
    width: 23,
    height: 21,
    position: "absolute",
  },
  theFlashHead: {
    top: 48,
    left: 331,
    width: 30,
    height: 27,
  },
  cameraIcon: {
    top: 200,
    left: 70,
    width: 234,
    height: 234,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBack: {
    left: 15,
    top: 47,
    width: 28,
    height: 28,
    position: "absolute",
  },
  scan: {
    left: 150,
    top: 710,
    width: 73,
    height: 58,
    position: "absolute",
  },
  imageopen: {
    backgroundColor: "#5f7480",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Scan;
