import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput, Alert } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Border, FontSize, FontFamily, Color } from '../GlobalStyles';
import firebase from '../firebase';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    const auth = getAuth(firebase);
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Success', 'Password reset email sent');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <LinearGradient
      style={styles.forgotPassword}
      locations={[0, 0.85]}
      colors={["#393c50", "#010310"]}
    >
      <View style={[styles.topNav, styles.childPosition]}>
        <Text style={styles.title}>Forgot Password</Text>
        <Pressable
          style={[styles.goBack, styles.backLayout1]}
          onPress={() => navigation.navigate("SplashScreen1")}
        >
          <View style={[styles.goBackChild, styles.backLayout]} />
          <Image
            style={[styles.goBackItem, styles.backLayout]}
            contentFit="cover"
            source={require("../assets/arrow-1.png")}
          />
        </Pressable>
      </View>
      <Text style={styles.enterYourEmail}>
        Enter Your Email To Reset Password
      </Text>
      <View style={styles.enterEmail}>
        <Text style={[styles.yourEmail, styles.yourEmailFlexBox]}>
          Your Email
        </Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <TextInput
            style={[styles.emailInput, styles.emailInputPosition]}
            placeholder="email@gmail.com"
            placeholderTextColor={Color.colorGray_700}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>
      <Pressable
        style={[styles.resetPassword, styles.resetLayout]}
        onPress={handleResetPassword}
      >
        <View style={[styles.resetPasswordChild, styles.resetLayout]} />
        <View style={styles.resetPasswordWrapper}>
          <Text style={[styles.resetPassword1, styles.emailgmailcomTypo]}>
            Reset Password
          </Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  childPosition: {
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
  yourEmailFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  groupChildLayout: {
    height: 64,
    width: 345,
    left: 0,
    position: "absolute",
  },
  emailgmailcomTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  resetLayout: {
    height: 50,
    width: 160,
    position: "absolute",
  },
  title: {
    top: 67,
    left: 60,
    fontSize: FontSize.size_13xl,
    lineHeight: 22,
    textAlign: "center",
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  goBackChild: {
    backgroundColor: Color.colorDarkslategray_500,
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
    top: 56,
    left: 6,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
  },
  topNav: {
    width: 375,
    height: 100,
    position: "absolute",
  },
  enterYourEmail: {
    top: 183,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    textAlign: "left",
    left: 18,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  yourEmail: {
    fontSize: FontSize.bodyMain_size,
    lineHeight: 18,
    color: Color.colorGray_600,
    width: 64,
    height: 22,
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
    display: "flex",
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorLightsteelblue,
    top: 0,
    height: 64,
  },
  emailInput: {
    top: 18,
    left: 24,
    color: Color.colorGray_700,
    width: 300, // Adjust as necessary
    height: 26,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  rectangleParent: {
    top: 27,
  },
  enterEmail: {
    top: 227,
    height: 91,
    width: 345,
    left: 18,
    position: "absolute",
  },
  resetPasswordChild: {
    borderRadius: Border.br_4xl,
    backgroundColor: Color.labelColorDarkPrimary,
    left: 0,
    top: 0,
  },
  resetPassword1: {
    color: Color.colorGray_400,
    textAlign: "center",
    left: 0,
    top: 0,
  },
  resetPasswordWrapper: {
    top: 14,
    width: 118,
    height: 21,
    left: 18,
    position: "absolute",
  },
  resetPassword: {
    top: 381,
    left: 108,
  },
  forgotPassword: {
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default ForgotPassword;
