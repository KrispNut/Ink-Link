import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PrintingInProcess = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.printingInProcess}
      onPress={() => navigation.navigate("SuccessfulPaymentScreen2")}
    >
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
      <View style={[styles.printingInProcessInner, styles.innerLayout]}>
        <View style={[styles.groupInner, styles.groupPosition]} />
      </View>
      <Image
        style={[styles.printingInProcessChild, styles.printingChildLayout]}
        contentFit="cover"
        source={require("../assets/arrow-13.png")}
      />
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Image
          style={[styles.arrowIcon, styles.printingChildLayout]}
          contentFit="cover"
          source={require("../assets/arrow-12.png")}
        />
      </View>
      <Image
        style={[styles.printingInProcessItem, styles.printingChildLayout]}
        contentFit="cover"
        source={require("../assets/arrow-14.png")}
      />
      <Image
        style={[styles.printingInProcessChild1, styles.printingChildLayout]}
        contentFit="cover"
        source={require("../assets/arrow-14.png")}
      />
      <Image
        style={[styles.printingInProcessChild2, styles.printingChildLayout]}
        contentFit="cover"
        source={require("../assets/arrow-14.png")}
      />
      <Image
        style={[styles.printingInProcessChild3, styles.printingChildLayout]}
        contentFit="cover"
        source={require("../assets/arrow-14.png")}
      />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.groupChild2Position]}
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
      <Text style={[styles.preview, styles.cancelFlexBox]}>Preview</Text>
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
        <Text style={[styles.printingInProcess1, styles.printingFlexBox]}>
          Printing in process 1 of 2
        </Text>
        <Pressable
          style={[styles.groupPressable, styles.groupLayout]}
          onPress={() => navigation.navigate("Preview")}
        >
          <LinearGradient
            style={[styles.groupChild2, styles.groupLayout]}
            locations={[0, 0.77]}
            colors={["rgba(102, 102, 102, 0.15)", "#232547"]}
          />
          <Text style={[styles.cancel, styles.groupLayout]}>Cancel</Text>
        </Pressable>
        <Text style={[styles.printing, styles.printingFlexBox]}>Printing</Text>
      </View>
      <View style={styles.rectangleParent1}>
        <View style={[styles.groupChild3, styles.groupChildPosition]} />
        <View style={[styles.groupChild4, styles.groupChildPosition]} />
      </View>
    </Pressable>
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
  printingChildLayout: {
    width: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 35,
    width: 210,
    position: "absolute",
  },
  groupViewLayout: {
    height: 48,
    width: 150,
    position: "absolute",
  },
  groupChild2Position: {
    backgroundColor: "transparent",
    top: 0,
    left: 0,
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
  cancelFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
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
  printingFlexBox: {
    fontFamily: FontFamily.roundedMplus1c,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  groupLayout: {
    width: 91,
    height: 24,
    position: "absolute",
  },
  groupChildPosition: {
    marginLeft: -160,
    height: 6,
    left: "50%",
    top: 0,
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
    fontWeight: "700",
    color: Color.labelColorDarkPrimary,
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
  printingInProcessInner: {
    top: 471,
    left: 0,
    width: 375,
  },
  printingInProcessChild: {
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
    top: 0,
    width: 210,
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
  },
  printingInProcessItem: {
    top: 619,
    left: 316,
    width: 0,
    height: 0,
  },
  printingInProcessChild1: {
    top: 651,
    left: 316,
    width: 0,
    height: 0,
  },
  printingInProcessChild2: {
    top: 683,
    left: 316,
    width: 0,
    height: 0,
  },
  printingInProcessChild3: {
    top: 715,
    left: 316,
    width: 0,
    height: 0,
  },
  rectangleLineargradient: {
    height: 48,
    width: 150,
    position: "absolute",
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_11xl,
    backgroundColor: "transparent",
  },
  groupView: {
    top: 746,
    left: 128,
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
  preview: {
    marginLeft: -117.5,
    top: 36,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    width: 235,
    height: 45,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    left: "50%",
    justifyContent: "center",
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
  printingInProcess1: {
    top: 73,
    left: 16,
    fontSize: FontSize.size_base,
    fontWeight: "300",
    width: 323,
    height: 69,
    color: Color.colorBlack,
  },
  groupChild2: {
    borderRadius: Border.br_base,
    backgroundColor: "transparent",
    top: 0,
    left: 0,
  },
  cancel: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.labelSmall,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    width: 91,
    top: 0,
    left: 0,
  },
  groupPressable: {
    top: 192,
    left: 130,
  },
  printing: {
    top: 21,
    left: 66,
    fontWeight: "800",
    color: Color.colorRed_100,
    width: 218,
    height: 38,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.roundedMplus1c,
  },
  rectangleContainer: {
    top: 258,
    left: 12,
  },
  groupChild3: {
    backgroundColor: "#a3d9f8",
    width: 320,
    marginLeft: -160,
  },
  groupChild4: {
    backgroundColor: "#35b6ff",
    width: 110,
  },
  rectangleParent1: {
    marginLeft: -159.5,
    top: 411,
    height: 6,
    width: 320,
    left: "50%",
    position: "absolute",
  },
  printingInProcess: {
    backgroundColor: Color.colorDarkslategray_400,
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
  },
});

export default PrintingInProcess;
