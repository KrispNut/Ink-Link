import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Gallery = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gallery}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.childShadowBox]} />
        <Text style={[styles.selectAll, styles.import1Typo]}>Select All</Text>
        <View style={[styles.groupItem, styles.groupItemBorder]} />
      </View>
      <View style={[styles.image1Parent, styles.groupParentLayout]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Group, styles.groupParentLayout]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Container, styles.groupParentLayout]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent1, styles.groupParentLayout]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent2, styles.groupParentLayout]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent3, styles.image1ParentPosition1]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent4, styles.image1ParentPosition1]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent5, styles.image1ParentPosition1]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent6, styles.image1ParentPosition1]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent7, styles.image1ParentPosition1]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent8, styles.image1ParentPosition1]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent9, styles.image1ParentPosition]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent10, styles.image1ParentPosition]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent11, styles.image1ParentPosition]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent12, styles.image1ParentPosition]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent13, styles.image1ParentPosition]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <View style={[styles.image1Parent14, styles.image1ParentPosition]}>
        <Image
          style={[styles.image1Icon, styles.groupParentLayout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <View style={[styles.groupInner, styles.textLayout]} />
      </View>
      <Pressable
        style={[styles.import, styles.importLayout1]}
        onPress={() => navigation.navigate("Preview")}
      >
        <LinearGradient
          style={[styles.importChild, styles.importLayout1]}
          locations={[0, 1]}
          colors={["#fff", "#999"]}
        />
        <Text style={[styles.import1, styles.importLayout]}>{`Import
`}</Text>
        <View style={[styles.importItem, styles.importLayout]} />
        <Text style={[styles.text, styles.textLayout]}>0</Text>
      </Pressable>
      <Pressable
        style={[styles.goBackParent, styles.importLayout]}
        onPress={() => navigation.navigate("MainMenu")}
      >
        <Text style={[styles.goBack, styles.text1Typo]}>Go back</Text>
        <Image
          style={[styles.multiplyIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/multiply1.png")}
        />
      </Pressable>
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
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 18,
    width: 69,
    position: "absolute",
  },
  childShadowBox: {
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: 0,
    top: 0,
  },
  import1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  groupItemBorder: {
    borderWidth: 1.5,
    borderStyle: "solid",
  },
  groupParentLayout: {
    height: 110,
    width: 110,
    position: "absolute",
  },
  textLayout: {
    height: 10,
    width: 10,
    position: "absolute",
  },
  image1ParentPosition1: {
    left: 132,
    height: 110,
    width: 110,
    position: "absolute",
  },
  image1ParentPosition: {
    left: 255,
    height: 110,
    width: 110,
    position: "absolute",
  },
  importLayout1: {
    height: 31,
    width: 81,
    position: "absolute",
  },
  importLayout: {
    height: 17,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.robotoBold,
    textAlign: "left",
    fontWeight: "700",
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    top: 0,
  },
  signalIconLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    backgroundColor: "rgba(81, 81, 81, 0.28)",
    height: 18,
    width: 69,
    position: "absolute",
  },
  selectAll: {
    left: 22,
    fontSize: 8,
    color: "rgba(72, 98, 90, 0.78)",
    width: 38,
    height: 9,
    top: 4,
    position: "absolute",
  },
  groupItem: {
    borderRadius: 1,
    width: 11,
    height: 11,
    borderColor: Color.labelColorDarkPrimary,
    backgroundColor: Color.colorDarkgray_200,
    borderWidth: 1.5,
    borderStyle: "solid",
    left: 7,
    top: 4,
    position: "absolute",
  },
  rectangleParent: {
    top: 41,
    left: 294,
  },
  image1Icon: {
    borderRadius: Border.br_11xs,
    left: 0,
    top: 0,
  },
  groupInner: {
    top: 6,
    left: 6,
    borderRadius: Border.br_11xs,
    borderWidth: 1.5,
    borderStyle: "solid",
    borderColor: Color.labelColorDarkPrimary,
    backgroundColor: Color.colorDarkgray_200,
  },
  image1Parent: {
    left: 9,
    width: 110,
    top: 97,
  },
  image1Group: {
    top: 220,
    left: 9,
    width: 110,
  },
  image1Container: {
    top: 343,
    left: 9,
    width: 110,
  },
  groupView: {
    top: 466,
    left: 9,
    width: 110,
  },
  image1Parent1: {
    top: 589,
    left: 9,
    width: 110,
  },
  image1Parent2: {
    top: 712,
    left: 9,
    width: 110,
  },
  image1Parent3: {
    top: 97,
  },
  image1Parent4: {
    top: 220,
  },
  image1Parent5: {
    top: 343,
  },
  image1Parent6: {
    top: 466,
  },
  image1Parent7: {
    top: 589,
  },
  image1Parent8: {
    top: 712,
  },
  image1Parent9: {
    top: 97,
  },
  image1Parent10: {
    top: 220,
  },
  image1Parent11: {
    top: 343,
  },
  image1Parent12: {
    top: 466,
  },
  image1Parent13: {
    top: 589,
  },
  image1Parent14: {
    top: 712,
  },
  importChild: {
    backgroundColor: "transparent",
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    left: 0,
    top: 0,
  },
  import1: {
    left: 12,
    fontSize: FontSize.labelSmall_size,
    color: Color.colorDarkslategray_100,
    width: 44,
    top: 8,
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  importItem: {
    left: 57,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorDarkgray_200,
    width: 17,
    top: 8,
    height: 17,
    borderWidth: 1.5,
    borderStyle: "solid",
    backgroundColor: Color.labelColorDarkPrimary,
  },
  text: {
    top: 11,
    left: 60,
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkgray_200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  import: {
    top: 769,
    left: 275,
  },
  goBack: {
    top: 2,
    left: 21,
    fontSize: FontSize.captionSubdue_size,
    letterSpacing: 0.3,
    color: Color.colorDarkslategray_500,
    width: 48,
    height: 15,
  },
  multiplyIcon: {
    width: 16,
    height: 16,
    position: "absolute",
    top: 0,
  },
  goBackParent: {
    top: 42,
    left: 7,
    height: 17,
    width: 69,
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
  },
  icSignalWifiStatusbar4BarParent: {
    right: 29,
    width: 313,
    height: 14,
    top: 8,
    position: "absolute",
  },
  gallery: {
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
  },
});

export default Gallery;
