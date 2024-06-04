import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <Pressable
        style={[styles.rectangleParent, styles.parentLayout]}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <LinearGradient
          style={[styles.groupChild, styles.groupPosition1]}
          locations={[0, 1]}
          colors={["rgba(102, 102, 102, 0.5)", "rgba(204, 204, 204, 0.5)"]}
        />
        <Text style={[styles.logOut, styles.logOutPosition]}>Log Out</Text>
      </Pressable>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <LinearGradient
          style={[styles.groupItem, styles.groupLayout1]}
          locations={[0, 1]}
          colors={["rgba(57, 60, 80, 0.01)", "rgba(0, 0, 0, 0.2)"]}
        />
        <View style={[styles.ellipseParent, styles.groupInnerLayout]}>
          <Image
            style={[styles.groupInner, styles.groupInnerLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-643.png")}
          />
          <View style={[styles.usernameParent, styles.parentLayout]}>
            <Text style={[styles.username, styles.textTypo]}>Username</Text>
            <Text style={[styles.tagline, styles.taglineTypo]}>@tagline</Text>
          </View>
        </View>
        <Image
          style={styles.avatarGirlWithGlasses}
          contentFit="cover"
          source={require("../assets/avatar-girl-with-glasses.png")}
        />
      </View>
      <Pressable
        style={[styles.iconLightMonthChevronParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("TransactionHistory")}
      >
        <Image
          style={styles.iconLightMonthChevron}
          contentFit="cover"
          source={require("../assets/icon--light--month-chevron.png")}
        />
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View
            style={[styles.transactionHistoryParent, styles.parentPosition]}
          >
            <Text style={[styles.transactionHistory, styles.text1Position]}>
              Transaction History
            </Text>
            <Text style={[styles.getAHold, styles.taglineTypo]}>
              Get a hold of your previous transactions
            </Text>
          </View>
          <Image
            style={styles.groupPosition}
            contentFit="cover"
            source={require("../assets/group-12334.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.groupContainer, styles.containerPosition]}>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <View style={[styles.faceIdTouchIdParent, styles.parentPosition]}>
            <Text style={[styles.transactionHistory, styles.text1Position]}>
              Face ID / Touch ID
            </Text>
            <Text style={[styles.getAHold, styles.taglineTypo]}>
              Manage your device security
            </Text>
          </View>
          <Image
            style={styles.groupPosition}
            contentFit="cover"
            source={require("../assets/group-123341.png")}
          />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-641.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent1, styles.groupParentLayout]}>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-641.png")}
          />
        </View>
        <View style={[styles.groupParent2, styles.groupParentLayout]}>
          <View style={[styles.darkModeParent, styles.parentPosition]}>
            <Text style={[styles.transactionHistory, styles.text1Position]}>
              Dark Mode
            </Text>
            <Text style={[styles.getAHold, styles.taglineTypo]}>
              Switch to dark mode
            </Text>
          </View>
          <View style={styles.groupPosition}>
            <Image
              style={[styles.groupChild4, styles.groupPosition]}
              contentFit="cover"
              source={require("../assets/ellipse-6431.png")}
            />
            <Text style={[styles.text, styles.textTypo]}>🌙</Text>
          </View>
        </View>
      </View>
      <View
        style={[styles.iconLightMonthChevronGroup, styles.groupParentLayout]}
      >
        <Image
          style={styles.iconLightMonthChevron}
          contentFit="cover"
          source={require("../assets/icon--light--month-chevron1.png")}
        />
        <View style={[styles.groupParent3, styles.groupParentLayout]}>
          <View style={[styles.notificationsParent, styles.parentPosition]}>
            <Text style={[styles.transactionHistory, styles.text1Position]}>
              Notifications
            </Text>
            <Text style={[styles.getAHold, styles.taglineTypo]}>
              Manage your notifications at ease
            </Text>
          </View>
          <Image
            style={styles.groupPosition}
            contentFit="cover"
            source={require("../assets/group-123342.png")}
          />
        </View>
      </View>
      <Pressable
        style={[
          styles.iconLightMonthChevronContainer,
          styles.containerPosition,
        ]}
        onPress={() => navigation.navigate("MyAccount")}
      >
        <Image
          style={styles.iconLightMonthChevron}
          contentFit="cover"
          source={require("../assets/icon--light--month-chevron.png")}
        />
        <Image
          style={styles.groupChild6}
          contentFit="cover"
          source={require("../assets/group-12135.png")}
        />
        <View style={[styles.groupParent4, styles.groupParentLayout]}>
          <View style={[styles.myAccountParent, styles.parentPosition]}>
            <Text
              style={[styles.transactionHistory, styles.text1Position]}
            >{`My Account `}</Text>
            <Text style={[styles.getAHold, styles.taglineTypo]}>
              Make changes to your account
            </Text>
          </View>
          <Image
            style={styles.groupPosition}
            contentFit="cover"
            source={require("../assets/group-123343.png")}
          />
        </View>
      </Pressable>
      <Image
        style={styles.icoutlineModeEditOutlineIcon}
        contentFit="cover"
        source={require("../assets/icoutlinemodeeditoutline.png")}
      />
      <Text style={[styles.profile1, styles.textTypo]}>Profile</Text>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("MainMenu")}
      >
        <View style={[styles.groupChild8, styles.arrowIconLayout]} />
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
        <Text style={[styles.text1, styles.text1Position]}>1:03</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 35,
    position: "absolute",
  },
  groupPosition1: {
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  logOutPosition: {
    color: Color.labelColorDarkPrimary,
    left: 0,
    top: 0,
  },
  groupLayout1: {
    height: 89,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  groupInnerLayout: {
    height: 57,
    position: "absolute",
  },
  textTypo: {
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
  groupParentLayout: {
    height: 40,
    position: "absolute",
  },
  parentPosition: {
    height: 39,
    left: 56,
    top: 0,
    position: "absolute",
  },
  text1Position: {
    fontSize: FontSize.bodyMain_size,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  containerPosition: {
    left: 30,
    height: 40,
    width: 311,
    position: "absolute",
  },
  rectangleLayout: {
    height: 30,
    width: 51,
    position: "absolute",
  },
  groupPosition: {
    width: 40,
    height: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
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
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.8)",
    borderWidth: 0.2,
    height: 35,
    position: "absolute",
    width: 145,
  },
  logOut: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    fontFamily: FontFamily.labelSmall,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "500",
    lineHeight: 21,
    height: 35,
    position: "absolute",
    width: 145,
  },
  rectangleParent: {
    top: 692,
    left: 115,
    width: 145,
    height: 35,
  },
  groupItem: {
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 44,
    elevation: 44,
    borderRadius: Border.br_8xs,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  groupInner: {
    width: 57,
    left: 0,
    top: 0,
  },
  username: {
    lineHeight: 19,
    fontSize: FontSize.subHeadlineMain_size,
    fontFamily: FontFamily.subHeadlineMain,
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
  rectangleGroup: {
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
  transactionHistory: {
    lineHeight: 20,
    fontFamily: FontFamily.bodyMain,
    color: Color.primaryBlack,
    fontWeight: "500",
  },
  getAHold: {
    lineHeight: 16,
  },
  transactionHistoryParent: {
    width: 204,
  },
  groupParent: {
    width: 260,
    left: 0,
    top: 0,
  },
  iconLightMonthChevronParent: {
    top: 535,
    width: 311,
    left: 33,
    height: 40,
  },
  faceIdTouchIdParent: {
    width: 146,
  },
  groupView: {
    width: 202,
    left: 0,
    top: 0,
  },
  rectangleView: {
    borderRadius: Border.br_41xl,
    backgroundColor: Color.grayVeryLight,
    left: 0,
    top: 0,
  },
  ellipseIcon: {
    left: 5,
    width: 20,
    height: 20,
    top: 5,
    position: "absolute",
  },
  rectangleContainer: {
    left: 260,
    top: 5,
  },
  groupContainer: {
    top: 476,
  },
  darkModeParent: {
    width: 106,
  },
  groupChild4: {
    opacity: 0.05,
  },
  text: {
    top: 11,
    left: 13,
    color: "#161455",
    lineHeight: 19,
    fontSize: FontSize.subHeadlineMain_size,
    fontFamily: FontFamily.subHeadlineMain,
  },
  groupParent2: {
    width: 162,
    left: 0,
    top: 0,
  },
  groupParent1: {
    top: 417,
    width: 311,
    left: 33,
    height: 40,
  },
  notificationsParent: {
    width: 171,
  },
  groupParent3: {
    width: 227,
    left: 0,
    top: 0,
  },
  iconLightMonthChevronGroup: {
    top: 358,
    width: 311,
    left: 33,
    height: 40,
  },
  groupChild6: {
    height: "36.75%",
    width: "4.86%",
    top: "31.5%",
    right: "12.96%",
    bottom: "31.75%",
    left: "82.19%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  myAccountParent: {
    width: 156,
  },
  groupParent4: {
    width: 212,
    left: 0,
    top: 0,
  },
  iconLightMonthChevronContainer: {
    top: 299,
  },
  icoutlineModeEditOutlineIcon: {
    top: 157,
    left: 311,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  profile1: {
    top: 59,
    left: 132,
    fontSize: FontSize.size_13xl,
    color: Color.colorDimgray_200,
    lineHeight: 21,
  },
  groupChild8: {
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
  groupPressable: {
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
  text1: {
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
  profile: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
  },
});

export default Profile;
