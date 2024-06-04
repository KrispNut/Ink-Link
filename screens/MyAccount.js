import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MyAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myAccount}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupViewPosition]}
          locations={[0, 1]}
          colors={["rgba(57, 60, 80, 0.01)", "rgba(0, 0, 0, 0.2)"]}
        />
        <View style={[styles.ellipseParent, styles.groupItemLayout]}>
          <Image
            style={[styles.groupItem, styles.groupItemLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-643.png")}
          />
          <View style={styles.usernameParent}>
            <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
            <Text style={[styles.tagline, styles.taglineTypo]}>@tagline</Text>
          </View>
        </View>
        <Image
          style={styles.avatarGirlWithGlasses}
          contentFit="cover"
          source={require("../assets/avatar-girl-with-glasses.png")}
        />
      </View>
      <View
        style={[styles.iconLightMonthChevronParent, styles.groupIconLayout]}
      >
        <View style={styles.iconLightMonthChevron} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/group-121351.png")}
        />
        <View style={[styles.groupParent, styles.groupIconLayout]}>
          <View style={[styles.myNameParent, styles.parentPosition]}>
            <Text style={[styles.myName, styles.textPosition]}>My Name</Text>
            <Text style={[styles.username1, styles.taglineTypo]}>UserName</Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group-123343.png")}
          />
        </View>
      </View>
      <View style={[styles.iconLightMonthChevronGroup, styles.groupIconLayout]}>
        <View style={styles.iconLightMonthChevron} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/group-121351.png")}
        />
        <View style={[styles.groupContainer, styles.groupIconLayout]}>
          <View style={[styles.languageParent, styles.parentPosition]}>
            <Text style={[styles.myName, styles.textPosition]}>Language</Text>
            <Text style={[styles.username1, styles.taglineTypo]}>English</Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group-123345.png")}
          />
        </View>
        <View style={styles.iconLightMonthChevron} />
        <Image
          style={[styles.monthChevronIcon, styles.monthIconLayout]}
          contentFit="cover"
          source={require("../assets/month-chevron.png")}
        />
      </View>
      <View
        style={[styles.iconLightMonthChevronContainer, styles.groupIconLayout]}
      >
        <View style={styles.iconLightMonthChevron} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/group-121351.png")}
        />
        <View style={[styles.groupView, styles.groupIconLayout]}>
          <View style={[styles.helpParent, styles.parentPosition]}>
            <Text style={[styles.myName, styles.textPosition]}>Help</Text>
            <Text style={[styles.username1, styles.taglineTypo]}>
              Contact us
            </Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group-123346.png")}
          />
        </View>
        <View style={styles.iconLightMonthChevron} />
        <Image
          style={[styles.monthChevronIcon1, styles.monthIconLayout]}
          contentFit="cover"
          source={require("../assets/month-chevron1.png")}
        />
      </View>
      <Text style={[styles.myAccount1, styles.usernameTypo]}>My Account</Text>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <View style={[styles.rectangleView, styles.arrowIconLayout]} />
        <Image
          style={[styles.arrowIcon, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
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
        <Text style={[styles.text, styles.textPosition]}>1:03</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 89,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  groupViewPosition: {
    left: 0,
    top: 0,
  },
  groupItemLayout: {
    height: 57,
    position: "absolute",
  },
  usernameTypo: {
    textAlign: "left",
    fontFamily: FontFamily.subHeadlineMain,
    fontWeight: "700",
    position: "absolute",
  },
  taglineTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.captionSubdue,
    fontSize: FontSize.captionSubdue_size,
    top: 23,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  groupIconLayout: {
    height: 40,
    position: "absolute",
  },
  parentPosition: {
    height: 39,
    left: 56,
    top: 0,
    position: "absolute",
  },
  textPosition: {
    fontSize: FontSize.bodyMain_size,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  monthIconLayout: {
    width: "3.76%",
    height: "17.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 44,
    width: 30,
  },
  arrowIconLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  signalIconLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 44,
    elevation: 44,
    borderRadius: Border.br_8xs,
    backgroundColor: "transparent",
    height: 89,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  groupItem: {
    width: 57,
    left: 0,
    top: 0,
  },
  username: {
    fontSize: FontSize.subHeadlineMain_size,
    lineHeight: 19,
    color: Color.labelColorDarkPrimary,
    left: 0,
    top: 0,
  },
  tagline: {
    lineHeight: 12,
  },
  usernameParent: {
    top: 10,
    left: 68,
    width: 69,
    height: 35,
    position: "absolute",
  },
  ellipseParent: {
    top: 16,
    width: 137,
    left: 16,
    height: 57,
  },
  avatarGirlWithGlasses: {
    top: 18,
    left: 18,
    width: 53,
    height: 53,
    position: "absolute",
  },
  rectangleParent: {
    top: 127,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    width: 343,
    left: 16,
  },
  iconLightMonthChevron: {
    top: 14,
    left: 304,
    width: 7,
    height: 12,
    position: "absolute",
  },
  groupInner: {
    height: "19.5%",
    width: "0.87%",
    top: "42.5%",
    right: "14.82%",
    bottom: "38%",
    left: "84.31%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  myName: {
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.bodyMain,
    color: Color.primaryBlack,
  },
  username1: {
    lineHeight: 16,
  },
  myNameParent: {
    width: 58,
  },
  groupIcon: {
    width: 40,
    left: 0,
    top: 0,
  },
  groupParent: {
    width: 114,
    left: 0,
    top: 0,
  },
  iconLightMonthChevronParent: {
    top: 299,
    width: 311,
    left: 30,
    height: 40,
  },
  languageParent: {
    width: 59,
  },
  groupContainer: {
    width: 115,
    left: 0,
    top: 0,
  },
  monthChevronIcon: {
    top: "71%",
    right: "61.74%",
    bottom: "11.5%",
    left: "34.5%",
  },
  iconLightMonthChevronGroup: {
    top: 375,
    width: 311,
    left: 30,
    height: 40,
  },
  helpParent: {
    width: 57,
  },
  groupView: {
    width: 113,
    left: 0,
    top: 0,
  },
  monthChevronIcon1: {
    top: "70%",
    right: "51.96%",
    bottom: "12.5%",
    left: "44.28%",
  },
  iconLightMonthChevronContainer: {
    top: 448,
    width: 311,
    left: 30,
    height: 40,
  },
  myAccount1: {
    marginLeft: -93.5,
    top: 59,
    left: "50%",
    fontSize: FontSize.size_13xl,
    lineHeight: 21,
    color: Color.colorDimgray_200,
  },
  rectangleView: {
    backgroundColor: Color.colorGainsboro_100,
    height: 44,
    width: 30,
    left: 0,
    top: 0,
  },
  arrowIcon: {
    top: 22,
    left: 10,
    width: 1,
    height: 0,
  },
  rectangleGroup: {
    top: 47,
    left: 8,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 30,
    elevation: 4,
    shadowRadius: 4,
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
  },
  text: {
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    width: 27,
    height: 13,
    fontWeight: "700",
    fontSize: FontSize.bodyMain_size,
  },
  icSignalWifiStatusbar4BarParent: {
    top: 8,
    right: 29,
    width: 313,
    height: 14,
    position: "absolute",
  },
  myAccount: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
  },
});

export default MyAccount;
