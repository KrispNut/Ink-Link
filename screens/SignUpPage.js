import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput, Alert } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from '../firebase';

const SignUpPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    const auth = getAuth(firebase);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <LinearGradient
      style={styles.signUpPage}
      locations={[0, 0.85]}
      colors={["#393c50", "#010310"]}
    >
      <View style={styles.topNav}>
        <Text style={styles.title}>Sign Up</Text>
        <Pressable
          style={[styles.goBack, styles.backLayout]}
          onPress={() => navigation.navigate("SplashScreen1")}
        >
          <View style={[styles.goBackChild, styles.backLayout]} />
          <Image
            style={[styles.goBackItem, styles.goBackItemLayout]}
            contentFit="cover"
            source={require("../assets/arrow-1.png")}
          />
        </Pressable>
      </View>
      <Text style={styles.createAccountUsing}>Create account using email</Text>
      <View style={[styles.enterUsername, styles.enterLayout]}>
        <Text style={[styles.yourUsername, styles.yourTypo]}>Your Username</Text>
        <View style={[styles.textField, styles.textLayout]}>
          <View style={[styles.textFieldChild, styles.textLayout]} />
          <TextInput
            style={[styles.usernameInput, styles.usernameTypo]}
            placeholder="Username"
            placeholderTextColor={Color.colorGray_700}
            // Add state and handler for username if needed
          />
        </View>
      </View>
      <View style={[styles.enterPassword, styles.enterLayout]}>
        <Text style={[styles.yourUsername, styles.yourTypo]}>Your Password</Text>
        <View style={[styles.textField, styles.textLayout]}>
          <View style={[styles.textFieldChild, styles.textLayout]} />
          <TextInput
            style={[styles.passwordInput, styles.usernameTypo]}
            placeholder="Password"
            placeholderTextColor={Color.colorGray_700}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Image
            style={[styles.textFieldInner, styles.goBackItemLayout]}
            contentFit="cover"
            source={require("../assets/group-2281.png")}
          />
        </View>
      </View>
      <View style={[styles.enterEmail, styles.enterLayout]}>
        <View style={[styles.yourEmailParent, styles.enterLayout]}>
          <Text style={[styles.yourEmail, styles.yourTypo]}>Your Email</Text>
          <View style={[styles.textField, styles.textLayout]}>
            <View style={[styles.rectangleParent, styles.textLayout]}>
              <View style={[styles.textFieldChild, styles.textLayout]} />
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
        </View>
      </View>
      <Pressable
        style={[styles.signUp, styles.signLayout]}
        onPress={handleSignup}
      >
        <View style={[styles.signUpChild, styles.signLayout]} />
        <View style={[styles.signUpWrapper, styles.emailInputPosition]}>
          <Text style={styles.signUp1}>Sign Up</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backLayout: {
    height: 44,
    width: 30,
    position: "absolute",
  },
  goBackItemLayout: {
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  enterLayout: {
    height: 74,
    width: 345,
    position: "absolute",
  },
  yourTypo: {
    color: Color.colorGray_600,
    fontFamily: FontFamily.interRegular,
    lineHeight: 18,
    fontSize: FontSize.bodyMain_size,
    textAlign: "left",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    height: 52,
    width: 345,
    left: 0,
    position: "absolute",
  },
  usernameTypo: {
    color: Color.colorGray_700,
    left: 24,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    letterSpacing: 0,
  },
  emailInputPosition: {
    height: 21,
    top: 15,
    position: "absolute",
  },
  signLayout: {
    height: 50,
    width: 160,
    position: "absolute",
  },
  title: {
    top: 67,
    left: 128,
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
    borderRadius: Border.br_11xl,
    left: 0,
    top: 0,
  },
  goBackItem: {
    left: 9,
    height: 18,
    top: 22,
    borderRadius: Border.br_11xl,
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
  },
  topNav: {
    width: 375,
    height: 100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  createAccountUsing: {
    top: 176,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    textAlign: "left",
    left: 14,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  yourUsername: {
    left: 0,
  },
  textFieldChild: {
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorLightsteelblue,
    top: 0,
  },
  usernameInput: {
    top: 15,
    position: 'absolute',
    width: '90%', // adjust as needed
  },
  textField: {
    top: 22,
  },
  enterUsername: {
    top: 220,
    left: 14,
    width: 345,
  },
  textFieldInner: {
    height: "20.58%",
    width: "4.26%",
    top: "40.38%",
    right: "7.04%",
    bottom: "39.04%",
    left: "88.7%",
    maxHeight: "100%",
  },
  passwordInput: {
    top: 15,
    position: 'absolute',
    width: '90%', // adjust as needed
  },
  enterPassword: {
    top: 400,
    left: 15,
  },
  yourEmail: {
    left: 1,
  },
  emailInput: {
    display: "flex",
    alignItems: "center",
    width: 207,
    color: Color.colorGray_700,
    left: 24,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    letterSpacing: 0,
  },
  rectangleParent: {
    top: 0,
  },
  yourEmailParent: {
    left: 0,
    top: 0,
  },
  enterEmail: {
    top: 310,
    left: 14,
    width: 345,
  },
  signUpChild: {
    borderRadius: Border.br_4xl,
    backgroundColor: Color.labelColorDarkPrimary,
    left: 0,
    top: 0,
  },
  signUp1: {
    color: Color.colorGray_400,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  signUpWrapper: {
    left: 51,
    width: 58,
  },
  signUp: {
    top: 490,
    left: 109,
  },
  signUpPage: {
    flex: 1,
    width: "100%",
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default SignUpPage;
