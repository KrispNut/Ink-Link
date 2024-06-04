import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SuccessfulPaymentScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.successfulPaymentScreen}>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.mobileMoney, styles.groupIconLayout]}>
          Mobile Money
        </Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <View style={styles.successfulPaymentScreenChild} />
      <View
        style={[
          styles.collectYourDocumentsParent,
          styles.manOnKickScooterUsingHoloPosition,
        ]}
      >
        <Text style={[styles.collectYourDocuments, styles.okTypo]}>
          Collect your Documents
        </Text>
        <Text style={styles.fromBookShopNear}>{`From Book-Shop 
near Cafeteria`}</Text>
        <Pressable
          style={[styles.rectangleParent, styles.groupChildLayout]}
          onPress={() => navigation.navigate("MainMenu")}
        >
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.ok, styles.okTypo]}>OK</Text>
        </Pressable>
      </View>
      <Image
        style={[
          styles.manOnKickScooterUsingHolo,
          styles.manOnKickScooterUsingHoloPosition,
        ]}
        contentFit="cover"
        source={require("../assets/man-on-kick-scooter-using-holographic-map-for-navigation.png")}
      />
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
          source={require("../assets/ic-signal-cellular-connected-no-internet-2-bar-48px.png")}
        />
        <Image
          style={[
            styles.icBatteryChargingFull48pxIcon,
            styles.signalIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/ic-battery-charging-full-48px.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>1:03</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    height: 11,
    position: "absolute",
  },
  manOnKickScooterUsingHoloPosition: {
    left: "50%",
    position: "absolute",
  },
  okTypo: {
    letterSpacing: 0.5,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 62,
    width: 164,
    position: "absolute",
  },
  signalIconLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 0,
  },
  vectorIcon: {
    height: "3.54%",
    width: "1.7%",
    top: "63.72%",
    right: "97.21%",
    bottom: "32.74%",
    left: "1.09%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mobileMoney: {
    marginLeft: -17.15,
    color: Color.colorDarkslategray_400,
    width: 58,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 0,
    fontSize: FontSize.size_lg,
    height: 11,
    left: "50%",
  },
  groupIcon: {
    top: 1,
    width: 38,
    left: 0,
  },
  vectorParent: {
    height: "1.39%",
    width: "21.95%",
    top: "-18.42%",
    right: "-14.64%",
    bottom: "117.03%",
    left: "92.69%",
    position: "absolute",
  },
  successfulPaymentScreenChild: {
    top: 67,
    backgroundColor: Color.colorSilver_100,
    width: 411,
    height: 413,
    left: 0,
    position: "absolute",
    display: "none",
  },
  collectYourDocuments: {
    marginLeft: -102.5,
    color: Color.colorDarkslategray_500,
    top: 0,
  },
  fromBookShopNear: {
    top: 37,
    left: 43,
    fontSize: FontSize.subHeadlineMain_size,
    letterSpacing: 0.4,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_200,
    textAlign: "center",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_17xl,
    backgroundColor: Color.colorMediumslateblue,
    left: 0,
    top: 0,
  },
  ok: {
    marginLeft: -11.3,
    top: 21,
    color: Color.labelColorDarkPrimary,
    width: 26,
  },
  rectangleParent: {
    top: 170,
    left: 23,
  },
  collectYourDocumentsParent: {
    marginLeft: -101.5,
    top: 520,
    width: 205,
    height: 232,
  },
  manOnKickScooterUsingHolo: {
    marginLeft: -176.5,
    top: 100,
    width: 350,
    height: 350,
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
    color: Color.colorBlack,
    width: 27,
    height: 13,
    left: 0,
    position: "absolute",
  },
  icSignalWifiStatusbar4BarParent: {
    top: 8,
    right: 29,
    width: 313,
    height: 14,
    position: "absolute",
  },
  successfulPaymentScreen: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
  },
});

export default SuccessfulPaymentScreen;
