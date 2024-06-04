import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";
import { getAuth, googleSignIn } from 'firebase/auth';
import firebase from '../firebase';
const GoogleSignIn = () => {
  return (
    <LinearGradient
      style={[styles.googleSignIn, styles.pressableBg]}
      locations={[0, 0.85]}
      colors={["#393c50", "#010310"]}
    >
      <View style={[styles.topNav, styles.topNavPosition]}>
        <Text style={[styles.title, styles.titleTypo]}>Sign In</Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Image
            style={[styles.groupItem, styles.groupLayout2]}
            contentFit="cover"
            source={require("../assets/arrow-1.png")}
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
          <Text style={[styles.text, styles.textFlexBox]}>1:03</Text>
        </View>
      </View>
      <View style={styles.homeIndicator} />
      <Text style={[styles.createAccountUsing, styles.orLayout]}>
        Create account using email
      </Text>
      <Text style={[styles.or, styles.orLayout]}>or</Text>
      <View style={styles.socialbutton}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.label, styles.orLayout]}>Sign In with Google</Text>
      </View>
      <View style={[styles.yourEmailParent, styles.yourParentLayout]}>
        <Text style={[styles.yourEmail, styles.yourTypo]}>Your Email</Text>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.groupInner, styles.groupLayout1]} />
          <Text style={[styles.someonegmailcom, styles.passwordTypo]}>
            someone@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.yourPasswordParent, styles.yourParentLayout]}>
          <Text style={[styles.yourPassword, styles.yourTypo]}>
            Your Password
          </Text>
          <View style={[styles.rectangleGroup, styles.groupLayout1]}>
            <View style={[styles.rectangleContainer, styles.groupLayout1]}>
              <View style={[styles.groupInner, styles.groupLayout1]} />
              <Text style={[styles.password, styles.passwordLayout]}>
                password
              </Text>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group-228.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.forgotPassword, styles.yourTypo]}>
          Forgot password?
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <View style={[styles.signInWrapper, styles.passwordLayout]}>
          <Text style={[styles.signIn, styles.signInLayout]}>Sign In</Text>
        </View>
      </View>
      <View style={[styles.googleSignInChild, styles.topNavPosition]} />
      <View style={[styles.rectangleParent1, styles.groupChild2Layout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <View
          style={[
            styles.someonegmailcomSomeonegmaiParent,
            styles.someonegmailcomLayout,
          ]}
        >
          <Text
            style={[
              styles.someonegmailcomSomeonegmai,
              styles.chooseAccountTypo,
            ]}
          >{`      someone@gmail.com
      someone@gmail.com`}</Text>
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-644.png")}
          />
          <Image
            style={[styles.groupChild3, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-644.png")}
          />
        </View>
        <View style={[styles.rectangleParent2, styles.loginLayout]}>
          <LinearGradient
            style={[styles.wrapper, styles.loginLayout]}
            locations={[0, 0.77]}
            colors={["rgba(102, 102, 102, 0.15)", "#232547"]}
          >
            <Pressable
              style={[styles.pressable, styles.pressableBg]}
              onPress={() => navigation.navigate("MainMenu")}
            />
          </LinearGradient>
          <Text style={[styles.login, styles.loginLayout]}>Login</Text>
        </View>
        <Text style={[styles.chooseAccount, styles.chooseAccountTypo]}>
          Choose Account
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  pressableBg: {
    backgroundColor: "transparent",
    width: "100%",
  },
  topNavPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  titleTypo: {
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  groupChildLayout: {
    height: 44,
    width: 30,
  },
  groupChildPosition: {
    backgroundColor: Color.colorDarkslategray_500,
    left: 0,
    top: 0,
  },
  groupLayout2: {
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
  textFlexBox: {
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
  },
  orLayout: {
    lineHeight: 20,
    textAlign: "left",
  },
  yourParentLayout: {
    height: 74,
    width: 345,
    position: "absolute",
  },
  yourTypo: {
    lineHeight: 18,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.bodyMain_size,
    letterSpacing: 0,
    position: "absolute",
  },
  groupLayout1: {
    height: 52,
    width: 345,
    left: 0,
    position: "absolute",
  },
  passwordTypo: {
    color: Color.colorGray_700,
    left: 24,
    top: 15,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  passwordLayout: {
    height: 21,
    position: "absolute",
  },
  groupLayout: {
    height: 50,
    width: 345,
    position: "absolute",
  },
  signInLayout: {
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild2Layout: {
    height: 240,
    position: "absolute",
  },
  someonegmailcomLayout: {
    height: 94,
    width: 323,
  },
  chooseAccountTypo: {
    fontFamily: FontFamily.roundedMplus1c,
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 9,
    width: 9,
    left: 0,
    position: "absolute",
  },
  loginLayout: {
    width: 91,
    height: 24,
    position: "absolute",
  },
  title: {
    top: 67,
    left: 136,
    fontSize: FontSize.size_13xl,
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: 0,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_11xl,
    position: "absolute",
    height: 44,
    width: 30,
  },
  groupItem: {
    left: 10,
    width: 1,
    height: 0,
    top: 22,
  },
  rectangleParent: {
    left: 6,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    top: 56,
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
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    width: 27,
    height: 13,
    fontSize: FontSize.bodyMain_size,
    textAlign: "left",
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
  topNav: {
    height: 100,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  createAccountUsing: {
    top: 334,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
    left: 16,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  or: {
    top: 268,
    left: 175,
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_600,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: FontSize.size_lgi,
    color: Color.colorBlack,
    marginLeft: 8,
    fontFamily: FontFamily.interRegular,
  },
  socialbutton: {
    top: 200,
    flexDirection: "row",
    paddingHorizontal: Padding.p_66xl,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    width: 345,
    borderRadius: Border.br_7xl,
    left: 16,
    backgroundColor: Color.labelColorDarkPrimary,
    position: "absolute",
    overflow: "hidden",
  },
  yourEmail: {
    color: Color.colorGray_600,
    left: 0,
    top: 0,
  },
  groupInner: {
    backgroundColor: Color.colorLightsteelblue,
    borderRadius: Border.br_7xl,
    height: 52,
    top: 0,
  },
  someonegmailcom: {
    lineHeight: 21,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 22,
  },
  yourEmailParent: {
    top: 378,
    left: 16,
  },
  yourPassword: {
    left: 1,
    color: Color.colorGray_600,
    top: 0,
  },
  password: {
    width: 207,
    display: "flex",
    lineHeight: 21,
    alignItems: "center",
    letterSpacing: 0,
    color: Color.colorGray_700,
    left: 24,
    top: 15,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  groupIcon: {
    height: "20.58%",
    width: "4.26%",
    top: "39.81%",
    right: "7.13%",
    bottom: "39.62%",
    left: "88.61%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleContainer: {
    top: 0,
  },
  yourPasswordParent: {
    left: 0,
    top: 0,
  },
  forgotPassword: {
    top: 84,
    left: 237,
    color: Color.colorRoyalblue,
  },
  groupParent: {
    top: 468,
    width: 346,
    height: 102,
    left: 16,
    position: "absolute",
  },
  groupChild1: {
    borderRadius: Border.br_4xl,
    backgroundColor: Color.labelColorDarkPrimary,
    left: 0,
    top: 0,
  },
  signIn: {
    color: Color.colorGray_400,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  signInWrapper: {
    top: 14,
    left: 147,
    width: 50,
  },
  groupView: {
    top: 682,
    left: 16,
  },
  googleSignInChild: {
    backgroundColor: Color.colorDarkslategray_600,
    height: 812,
  },
  groupChild2: {
    borderRadius: Border.br_43xl,
    width: 351,
    backgroundColor: Color.colorDarkslategray_500,
    left: 0,
    top: 0,
  },
  someonegmailcomSomeonegmai: {
    fontWeight: "300",
    height: 94,
    width: 323,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.labelColorDarkPrimary,
  },
  ellipseIcon: {
    top: 31,
  },
  groupChild3: {
    top: 56,
  },
  someonegmailcomSomeonegmaiParent: {
    top: 73,
    left: 51,
    position: "absolute",
  },
  pressable: {
    borderRadius: Border.br_base,
    height: "100%",
  },
  wrapper: {
    left: 0,
    top: 0,
  },
  login: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.labelSmall,
    color: Color.colorDarkslategray_500,
    display: "flex",
    lineHeight: 21,
    alignItems: "center",
    letterSpacing: 0,
    justifyContent: "center",
    fontWeight: "500",
    textAlign: "center",
    left: 0,
    top: 0,
  },
  rectangleParent2: {
    top: 195,
    left: 130,
  },
  chooseAccount: {
    top: 23,
    left: 79,
    fontSize: FontSize.size_xl,
    color: Color.colorCornflowerblue,
    width: 183,
    height: 38,
    justifyContent: "center",
    fontWeight: "500",
    textAlign: "center",
  },
  rectangleParent1: {
    top: 265,
    left: 12,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 374,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  googleSignIn: {
    flex: 1,
    display: "none",
    overflow: "hidden",
    height: 812,
  },
});

export default GoogleSignIn;
