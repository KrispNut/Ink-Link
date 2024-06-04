import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Vault = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.vault}
      locations={[0, 0.85]}
      colors={["#393c50", "#010310"]}
    >
      <Text style={[styles.vault1, styles.textClr]}>Vault</Text>
      <View style={styles.icSignalWifiStatusbar4BarParent}>
        <Image
          style={[
            styles.icSignalWifiStatusbar4BarIcon,
            styles.signalIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/ic-signal-wifi-statusbar-4-bar-26x24px.png")}
        />
        <Image
          style={[
            styles.icSignalCellularConnectedNIcon,
            styles.signalIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/ic-signal-cellular-connected-no-internet-2-bar-48px1.png")}
        />
        <Image
          style={[
            styles.icBatteryChargingFull48pxIcon,
            styles.signalIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/ic-battery-charging-full-48px1.png")}
        />
        <Text style={[styles.text, styles.textPosition]}>1:03</Text>
      </View>
      <Pressable
        style={[styles.goBack, styles.backLayout1]}
        onPress={() => navigation.navigate("Preview1")}
      >
        <View style={[styles.goBackChild, styles.backLayout]} />
        <Image
          style={[styles.goBackItem, styles.backLayout]}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  textClr: {
    color: Color.labelColorDarkPrimary,
    fontWeight: "700",
    position: "absolute",
  },
  signalIconLayout: {
    width: 14,
    top: 0,
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  textPosition: {
    left: 0,
    top: 0,
  },
  backLayout1: {
    height: 44,
    width: 30,
  },
  backLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  vault1: {
    top: 33,
    left: 137,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.interBold,
    textAlign: "center",
  },
  icSignalWifiStatusbar4BarIcon: {
    right: 11,
  },
  icSignalCellularConnectedNIcon: {
    right: 16,
  },
  icBatteryChargingFull48pxIcon: {
    right: 0,
  },
  text: {
    fontSize: FontSize.bodyMain_size,
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    width: 27,
    height: 13,
    color: Color.labelColorDarkPrimary,
    fontWeight: "700",
    position: "absolute",
  },
  icSignalWifiStatusbar4BarParent: {
    top: 8,
    right: 29,
    width: 313,
    display: "none",
    height: 14,
    position: "absolute",
  },
  goBackChild: {
    backgroundColor: Color.colorWhitesmoke_200,
    height: 44,
    width: 30,
    left: 0,
    top: 0,
  },
  goBackItem: {
    top: 22,
    left: 9,
    maxWidth: "100%",
    height: 18,
    overflow: "hidden",
  },
  goBack: {
    top: 28,
    left: 15,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
    height: 44,
    width: 30,
  },
  vault: {
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Vault;
