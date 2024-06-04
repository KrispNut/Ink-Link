import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput, Alert } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Color, FontSize, FontFamily, Border, Padding } from '../GlobalStyles';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../firebase';

const LoginPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const auth = getAuth(firebase);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('MainMenu');
    } catch (error) {
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <LinearGradient
      style={styles.loginPage}
      locations={[0, 0.85]}
      colors={['#393c50', '#010310']}
    >
      <View style={styles.topNav}>
        <Text style={styles.title}>Log in</Text>
        <Pressable
          style={[styles.goBack, styles.backLayout]}
          onPress={() => navigation.navigate('SplashScreen1')}
        >
          <View style={[styles.goBackChild, styles.backLayout]} />
          <Image
            style={[styles.goBackItem, styles.goBackItemLayout]}
            contentFit="cover"
            source={require('../assets/arrow-1.png')}
          />
        </Pressable>
      </View>
      <Text style={styles.logInBy}>Log in by using email</Text>
      <Pressable
        style={styles.socialbutton}
        onPress={() => navigation.navigate('GoogleSignIn')}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require('../assets/icon.png')}
        />
        <Text style={styles.label}>Log in with Google</Text>
      </Pressable>
      <View style={[styles.enterEmail, styles.enterLayout]}>
        <Text style={[styles.yourEmail, styles.yourTypo]}>Your Email</Text>
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <TextInput
            style={[styles.emailInput, styles.passwordTypo]}
            placeholder="email@gmail.com"
            placeholderTextColor={Color.colorGray_700}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <View style={[styles.enterPassword, styles.enterLayout]}>
        <View style={[styles.yourPasswordParent, styles.enterLayout]}>
          <Text style={[styles.yourPassword, styles.yourTypo]}>Your Password</Text>
          <View style={[styles.rectangleParent, styles.groupLayout]}>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.groupLayout]} />
              <TextInput
                style={[styles.passwordInput, styles.passwordLayout]}
                placeholder="password"
                placeholderTextColor={Color.colorGray_700}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Image
                style={[styles.groupInner, styles.goBackItemLayout]}
                contentFit="cover"
                source={require('../assets/group-227.png')}
              />
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.login, styles.loginLayout]}
        onPress={handleLogin}
      >
        <View style={[styles.loginChild, styles.loginLayout]} />
        <View style={[styles.logInWrapper, styles.passwordLayout]}>
          <Text style={styles.logIn}>Log in</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backLayout: {
    height: 44,
    width: 30,
    position: 'absolute',
  },
  goBackItemLayout: {
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  enterLayout: {
    height: 74,
    width: 345,
    position: 'absolute',
  },
  yourTypo: {
    color: Color.colorGray_600,
    lineHeight: 18,
    fontSize: FontSize.bodyMain_size,
    fontFamily: FontFamily.interRegular,
    textAlign: 'left',
    letterSpacing: 0,
    top: 0,
    position: 'absolute',
  },
  groupLayout: {
    height: 52,
    width: 345,
    left: 0,
    position: 'absolute',
  },
  passwordTypo: {
    color: Color.colorGray_700,
    left: 24,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    textAlign: 'left',
    letterSpacing: 0,
  },
  passwordLayout: {
    height: 21,
    position: 'absolute',
  },
  loginLayout: {
    height: 50,
    width: 160,
    position: 'absolute',
  },
  title: {
    top: 67,
    left: 141,
    fontSize: FontSize.size_13xl,
    lineHeight: 22,
    textAlign: 'center',
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    letterSpacing: 0,
    position: 'absolute',
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
    shadowColor: 'rgba(0, 0, 0, 0.05)',
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
    position: 'absolute',
  },
  logInBy: {
    top: 183,
    fontSize: FontSize.size_mini,
    textAlign: 'left',
    lineHeight: 20,
    left: 18,
    color: Color.labelColorDarkPrimary,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    letterSpacing: 0,
    position: 'absolute',
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
    textAlign: 'left',
    lineHeight: 20,
  },
  socialbutton: {
    top: 603,
    left: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: Padding.p_66xl,
    paddingVertical: Padding.p_3xs,
    alignItems: 'center',
    width: 345,
    backgroundColor: Color.labelColorDarkPrimary,
    borderRadius: Border.br_7xl,
    position: 'absolute',
    overflow: 'hidden',
  },
  yourEmail: {
    left: 0,
  },
  groupChild: {
    backgroundColor: Color.colorLightsteelblue,
    borderRadius: Border.br_7xl,
    height: 52,
    top: 0,
  },
  emailInput: {
    top: 16,
    position: 'absolute',
    width: '90%', // adjust as needed
  },
  rectangleParent: {
    top: 22,
  },
  enterEmail: {
    top: 227,
    left: 18,
    height: 74,
  },
  forgotPassword: {
    top: 401,
    left: 255,
    color: Color.colorRoyalblue,
    lineHeight: 18,
    fontSize: FontSize.bodyMain_size,
    fontFamily: FontFamily.interRegular,
    textAlign: 'left',
    letterSpacing: 0,
    position: 'absolute',
  },
  yourPassword: {
    left: 1,
  },
  passwordInput: {
    top: 15,
    display: 'flex',
    width: '90%', // adjust as needed
  },
  groupInner: {
    height: '20.58%',
    width: '4.26%',
    top: '39.81%',
    right: '7.13%',
    bottom: '39.62%',
    left: '88.61%',
    maxHeight: '100%',
  },
  rectangleGroup: {
    top: 0,
  },
  yourPasswordParent: {
    left: 0,
    top: 0,
  },
  enterPassword: {
    top: 317,
    left: 18,
    height: 74,
  },
  loginChild: {
    borderRadius: Border.br_4xl,
    backgroundColor: Color.labelColorDarkPrimary,
    height: 50,
    width: 160,
    left: 0,
    top: 0,
  },
  logIn: {
    color: Color.colorGray_400,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    textAlign: 'center',
    letterSpacing: 0,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  logInWrapper: {
    top: 14,
    left: 55,
    width: 45,
  },
  login: {
    top: 470,
    left: 108,
  },
  loginPage: {
    flex: 1,
    width: '100%',
    height: 812,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
});

export default LoginPage;
