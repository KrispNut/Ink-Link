import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const SuccessfulPaymentScreen1 = () => {
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
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <View style={styles.successfulPaymentScreenChild} />
      <View
        style={[styles.successfulPaymentScreenInner, styles.groupChildLayout]}
      >
        <Pressable
          style={[styles.rectangleParent, styles.groupChildLayout]}
          onPress={() => navigation.navigate("MainMenu")}
        >
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.goBack, styles.text1Typo]}>Go Back</Text>
        </Pressable>
      </View>
      <Text style={[styles.thankYouFor, styles.thankYouForFlexBox]}>
        Thank you for waiting
      </Text>
      <Text style={[styles.yourCurrentPosition, styles.peopleCurrentlyInClr]}>
        Your current position in our queue is:
      </Text>
      <View style={[styles.peopleCurrentlyInQueueParent, styles.peopleLayout]}>
        <Text
          style={[styles.peopleCurrentlyInContainer, styles.thankYouForFlexBox]}
        >
          <Text style={[styles.text, styles.textTypo]}>14</Text>
          <Text style={styles.peopleCurrentlyInClr}>
            {" "}
            People currently in queue
          </Text>
        </Text>
        <Image
          style={[styles.peopleIcon, styles.peopleLayout]}
          contentFit="cover"
          source={require("../assets/people.png")}
        />
      </View>
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
        <Text style={[styles.text1, styles.text1Typo]}>1:03</Text>
      </View>
      <Text style={[styles.inkLink, styles.text2FlexBox]}>Ink Link</Text>
      <Image
        style={styles.backgroundCircleIcon}
        contentFit="cover"
        source={require("../assets/background-circle.png")}
      />
      <Text style={[styles.text2, styles.text2FlexBox]}>15</Text>
      <Image
        style={[styles.dashedLineIcon, styles.dashedIconLayout]}
        contentFit="cover"
        source={require("../assets/dashed-line.png")}
      />
      <Image
        style={[styles.dashedLineIcon1, styles.dashedIconLayout]}
        contentFit="cover"
        source={require("../assets/dashed-line1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupIconLayout: {
    height: 11,
    position: "absolute",
  },
  iconLayout: {
    width: 38,
    left: 0,
  },
  groupChildLayout: {
    height: 62,
    width: 164,
    position: "absolute",
  },
  text1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  thankYouForFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  peopleCurrentlyInClr: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.robotoRegular,
  },
  peopleLayout: {
    height: 30,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  signalIconLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  text2FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  dashedIconLayout: {
    height: 141,
    width: 141,
    top: 357,
    position: "absolute",
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
    fontSize: FontSize.size_lg,
    left: "50%",
    top: 0,
  },
  groupIcon: {
    top: 1,
    height: 11,
    position: "absolute",
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
    display: "none",
    left: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_17xl,
    backgroundColor: Color.colorMediumslateblue,
    left: 0,
    top: 0,
  },
  goBack: {
    marginLeft: -37,
    top: 21,
    color: Color.labelColorDarkPrimary,
    width: 73,
    letterSpacing: 0.5,
    fontSize: FontSize.size_lg,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  successfulPaymentScreenInner: {
    top: 690,
    left: 109,
  },
  thankYouFor: {
    marginLeft: -93.5,
    top: 148,
    color: Color.colorDarkslategray_500,
    letterSpacing: 0.5,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: "50%",
  },
  yourCurrentPosition: {
    top: 194,
    left: 66,
    fontSize: FontSize.subHeadlineMain_size,
    letterSpacing: 0.4,
    textAlign: "center",
    position: "absolute",
  },
  text: {
    color: "#ebc351",
  },
  peopleCurrentlyInContainer: {
    top: 7,
    fontSize: FontSize.size_base,
    height: 16,
    width: 290,
    letterSpacing: 0.5,
    left: 0,
  },
  peopleIcon: {
    width: 38,
    left: 0,
    top: 0,
  },
  peopleCurrentlyInQueueParent: {
    top: 363,
    left: 62,
    width: 290,
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
  text1: {
    fontSize: FontSize.bodyMain_size,
    color: Color.colorBlack,
    width: 27,
    height: 13,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icSignalWifiStatusbar4BarParent: {
    top: 8,
    right: 29,
    width: 313,
    height: 14,
    position: "absolute",
  },
  inkLink: {
    top: 46,
    left: 73,
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.anuratiRegular,
    color: "#43475f",
    width: 230,
    height: 76,
  },
  backgroundCircleIcon: {
    top: 225,
    left: 136,
    width: 113,
    height: 112,
    position: "absolute",
  },
  text2: {
    top: 261,
    left: 161,
    fontSize: FontSize.size_17xl,
    letterSpacing: 1.1,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: "#808080",
    width: 54,
    height: 50,
  },
  dashedLineIcon: {
    left: 47,
  },
  dashedLineIcon1: {
    left: 188,
  },
  successfulPaymentScreen: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SuccessfulPaymentScreen1;
