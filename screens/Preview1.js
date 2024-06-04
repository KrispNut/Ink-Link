import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Preview1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.preview}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
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
          <Text style={styles.text}>1:03</Text>
        </View>
      </View>
      <View style={[styles.previewInner, styles.innerLayout]}>
        <View style={[styles.groupInner, styles.groupPosition]} />
      </View>
      <Image
        style={[styles.previewChild, styles.previewChildLayout]}
        contentFit="cover"
        source={require("../assets/arrow-13.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Image
          style={[styles.arrowIcon, styles.previewChildLayout]}
          contentFit="cover"
          source={require("../assets/arrow-12.png")}
        />
      </View>
      <Image
        style={[styles.previewItem, styles.previewChildLayout]}
        contentFit="cover"
        source={require("../assets/arrow-14.png")}
      />
      <Image
        style={[styles.previewChild1, styles.previewChildLayout]}
        contentFit="cover"
        source={require("../assets/arrow-14.png")}
      />
      <Image
        style={[styles.previewChild2, styles.previewChildLayout]}
        contentFit="cover"
        source={require("../assets/arrow-14.png")}
      />
      <Image
        style={[styles.previewChild3, styles.previewChildLayout]}
        contentFit="cover"
        source={require("../assets/arrow-14.png")}
      />
      <View style={styles.groupView}>
        <LinearGradient
          style={styles.rectangleLineargradient}
          locations={[0.22, 0.58, 0.98]}
          colors={["#494949", "#909090", "#afafaf"]}
        />
      </View>
      <Text style={styles.print}>Print</Text>
      <Text style={[styles.copies, styles.text1Position]}>Copies:</Text>
      <Text style={[styles.text1, styles.a4FlexBox]}>2</Text>
      <Text style={[styles.paperSize, styles.a4Position]}>Paper Size:</Text>
      <Text style={[styles.a4, styles.a4Position]}>A4</Text>
      <Text style={[styles.color, styles.colorPosition]}>Color:</Text>
      <Text style={[styles.black, styles.colorPosition]}>Black</Text>
      <Text style={[styles.pages, styles.allPosition]}>Pages:</Text>
      <Text style={[styles.all, styles.allPosition]}>All</Text>
      <Text style={[styles.orientation, styles.portraitPosition]}>
        Orientation:
      </Text>
      <Text style={[styles.portrait, styles.portraitPosition]}>Portrait</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-161.png")}
      />
      <Text style={styles.preview1}>Preview</Text>
      <Text style={styles.hpSmartLaser}>HP Smart Laser Jet 11325</Text>
      <Image
        style={styles.printIcon}
        contentFit="cover"
        source={require("../assets/print1.png")}
      />
      <Image
        style={styles.longDocumentWithText}
        contentFit="cover"
        source={require("../assets/long-document-with-text1.png")}
      />
      <Image
        style={[styles.cameraFrameIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/camera-frame1.png")}
      />
      <Image
        style={[styles.notesCompositionIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/notes-composition1.png")}
      />
      <View style={[styles.rectangleContainer, styles.groupChild1Layout]}>
        <View style={[styles.groupChild1, styles.groupChild1Layout]} />
        <Text style={[styles.youHaveUnsaved, styles.youHaveUnsavedFlexBox]}>
          You have unsaved changes. are you sure you want to navigate anyways?
        </Text>
        <Pressable
          style={[styles.groupPressable, styles.groupLayout]}
          onPress={() => navigation.navigate("MainMenu")}
        >
          <LinearGradient
            style={[styles.groupChild2, styles.groupChildPosition]}
            locations={[0.23, 1]}
            colors={["#232547", "rgba(102, 102, 102, 0.15)"]}
          />
          <Text style={[styles.backToHome, styles.backToHomeTypo]}>
            Back to home page
          </Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleParent1, styles.stayOnThisLayout]}
          onPress={() => navigation.navigate("Preview")}
        >
          <LinearGradient
            style={[styles.groupChild3, styles.stayOnThisLayout]}
            locations={[0, 0.77]}
            colors={["rgba(102, 102, 102, 0.15)", "#232547"]}
          />
          <Text style={[styles.stayOnThis, styles.stayOnThisLayout]}>
            Stay on this page
          </Text>
        </Pressable>
        <Text style={[styles.confirmNavigation, styles.youHaveUnsavedFlexBox]}>
          Confirm Navigation
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signalIconLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  innerLayout: {
    height: 401,
    width: 375,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.labelColorDarkPrimary,
    top: 0,
    left: 0,
  },
  previewChildLayout: {
    width: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 35,
    width: 210,
    position: "absolute",
  },
  text1Position: {
    height: 19,
    fontFamily: FontFamily.interRegular,
    top: 574,
    position: "absolute",
  },
  a4FlexBox: {
    width: 107,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    color: Color.colorGray_800,
    fontSize: FontSize.labelSmall_size,
    left: 187,
  },
  a4Position: {
    top: 606,
    height: 19,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  colorPosition: {
    top: 638,
    height: 19,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  allPosition: {
    top: 671,
    height: 19,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  portraitPosition: {
    top: 702,
    height: 19,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconPosition: {
    height: 350,
    top: 96,
    left: "50%",
    position: "absolute",
  },
  groupChild1Layout: {
    height: 240,
    width: 351,
    position: "absolute",
  },
  youHaveUnsavedFlexBox: {
    fontFamily: FontFamily.roundedMplus1c,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  groupLayout: {
    width: 105,
    height: 24,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_base,
    backgroundColor: "transparent",
    top: 0,
    left: 0,
  },
  backToHomeTypo: {
    fontFamily: FontFamily.labelSmall,
    fontWeight: "500",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    top: 0,
    left: 0,
  },
  stayOnThisLayout: {
    width: 91,
    height: 24,
    position: "absolute",
  },
  groupChild: {
    top: 29,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 30,
    height: 44,
    borderRadius: Border.br_11xl,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    top: 51,
    left: 10,
    width: 1,
    height: 0,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  icSignalWifiStatusbar4BarIcon: {
    right: 11,
  },
  icSignalCellularConnectedNIcon: {
    right: 16,
  },
  icBatteryChargingFull48pxIcon: {
    right: 0,
    width: 14,
  },
  text: {
    fontSize: FontSize.bodyMain_size,
    fontFamily: FontFamily.robotoBold,
    width: 27,
    height: 13,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
    fontWeight: "700",
    top: 0,
    left: 0,
    position: "absolute",
  },
  icSignalWifiStatusbar4BarParent: {
    width: 313,
    height: 14,
    right: 0,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 8,
    left: 7,
    width: 339,
    height: 73,
    position: "absolute",
  },
  groupInner: {
    borderRadius: Border.br_52xl,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: 401,
    width: 375,
    position: "absolute",
  },
  previewInner: {
    top: 471,
    left: 0,
    width: 375,
  },
  previewChild: {
    top: 587,
    left: 316,
    width: 0,
    height: 0,
  },
  rectangleView: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMistyrose_100,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    width: 210,
    top: 0,
    left: 0,
  },
  arrowIcon: {
    top: 23,
    left: 188,
    height: 1,
  },
  rectangleGroup: {
    top: 499,
    left: 128,
    width: 210,
  },
  previewItem: {
    top: 619,
    left: 316,
    width: 0,
    height: 0,
  },
  previewChild1: {
    top: 651,
    left: 316,
    width: 0,
    height: 0,
  },
  previewChild2: {
    top: 683,
    left: 316,
    width: 0,
    height: 0,
  },
  previewChild3: {
    top: 715,
    left: 316,
    width: 0,
    height: 0,
  },
  rectangleLineargradient: {
    backgroundColor: "transparent",
    height: 48,
    width: 150,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    top: 0,
    borderRadius: Border.br_11xl,
    left: 0,
    position: "absolute",
  },
  groupView: {
    top: 746,
    height: 48,
    width: 150,
    left: 128,
    position: "absolute",
  },
  print: {
    marginLeft: -25.5,
    top: 753,
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkslategray_500,
    width: 82,
    height: 33,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    left: "50%",
    fontWeight: "700",
    position: "absolute",
  },
  copies: {
    width: 140,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: 37,
    textAlign: "left",
  },
  text1: {
    height: 19,
    fontFamily: FontFamily.interRegular,
    top: 574,
    position: "absolute",
  },
  paperSize: {
    width: 140,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: 37,
    textAlign: "left",
  },
  a4: {
    width: 107,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    color: Color.colorGray_800,
    fontSize: FontSize.labelSmall_size,
    left: 187,
  },
  color: {
    width: 140,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: 37,
    textAlign: "left",
  },
  black: {
    width: 107,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    color: Color.colorGray_800,
    fontSize: FontSize.labelSmall_size,
    left: 187,
  },
  pages: {
    width: 140,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: 37,
    textAlign: "left",
  },
  all: {
    width: 107,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    color: Color.colorGray_800,
    fontSize: FontSize.labelSmall_size,
    left: 187,
  },
  orientation: {
    width: 140,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    left: 37,
    textAlign: "left",
  },
  portrait: {
    width: 107,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    color: Color.colorGray_800,
    fontSize: FontSize.labelSmall_size,
    left: 187,
  },
  ellipseIcon: {
    top: 495,
    width: 44,
    left: 37,
    height: 44,
    position: "absolute",
  },
  preview1: {
    marginLeft: -117.5,
    top: 36,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 235,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
    left: "50%",
    position: "absolute",
  },
  hpSmartLaser: {
    top: 505,
    left: 138,
    color: Color.colorRed_200,
    width: 164,
    height: 24,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.labelSmall_size,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  printIcon: {
    top: 498,
    left: 41,
    width: 37,
    height: 37,
    position: "absolute",
  },
  longDocumentWithText: {
    top: 101,
    left: 59,
    width: 285,
    height: 334,
    position: "absolute",
    display: "none",
  },
  cameraFrameIcon: {
    marginLeft: -166.5,
    width: 332,
  },
  notesCompositionIcon: {
    marginLeft: -150.5,
    width: 316,
  },
  groupChild1: {
    borderRadius: Border.br_43xl,
    backgroundColor: Color.labelColorDarkPrimary,
    top: 0,
    left: 0,
  },
  youHaveUnsaved: {
    top: 73,
    left: 16,
    fontSize: FontSize.size_base,
    fontWeight: "300",
    width: 323,
    height: 94,
    color: Color.colorBlack,
    fontFamily: FontFamily.roundedMplus1c,
  },
  groupChild2: {
    width: 105,
    height: 24,
    position: "absolute",
  },
  backToHome: {
    width: 105,
    height: 24,
    position: "absolute",
  },
  groupPressable: {
    left: 69,
    top: 195,
  },
  groupChild3: {
    borderRadius: Border.br_base,
    backgroundColor: "transparent",
    top: 0,
    left: 0,
  },
  stayOnThis: {
    fontFamily: FontFamily.labelSmall,
    fontWeight: "500",
    lineHeight: 21,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    top: 0,
    left: 0,
  },
  rectangleParent1: {
    left: 189,
    top: 195,
  },
  confirmNavigation: {
    top: 21,
    left: 66,
    fontWeight: "800",
    color: Color.colorRed_100,
    width: 218,
    height: 38,
    fontFamily: FontFamily.roundedMplus1c,
    fontSize: FontSize.size_xl,
  },
  rectangleContainer: {
    top: 258,
    left: 12,
  },
  preview: {
    backgroundColor: Color.colorDarkslategray_400,
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
  },
});

export default Preview1;
