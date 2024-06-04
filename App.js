const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import SuccessfulPaymentScreen1 from "./screens/SuccessfulPaymentScreen1";
import MainMenu from "./screens/MainMenu";
import SplashScreen1 from "./screens/SplashScreen1";
import Vault from "./screens/Vault";
import Document1 from "./screens/Document1";
import Drive from "./screens/Drive";
import Gallery from "./screens/Gallery";
import Preview1 from "./screens/Preview1";
import Profile from "./screens/Profile";
import PaymentScreen from "./screens/PaymentScreen";
import TransactionHistory from "./screens/TransactionHistory";
import MyAccount from "./screens/MyAccount";
import GoogleSignIn from "./screens/GoogleSignIn";
import PrintingInProcess from "./screens/PrintingInProcess";
import SuccessfulPaymentScreen2 from "./screens/SuccessfulPaymentScreen2";
import SuccessfulPaymentScreen from "./screens/SuccessfulPaymentScreen";
import GoogleSignUp from "./screens/GoogleSignUp";
import ForgotPassword from "./screens/ForgotPassword";
import Scan from "./screens/Scan";
import Preview from "./screens/Preview";
import LoginPage from "./screens/LoginPage";
import SignUpPage from "./screens/SignUpPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "WorkSans-Medium": require("./assets/fonts/WorkSans-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Anurati-Regular": require("./assets/fonts/Anurati-Regular.otf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "DMSans-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessfulPaymentScreen1"
              component={SuccessfulPaymentScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainMenu"
              component={MainMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen1"
              component={SplashScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Vault"
              component={Vault}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Document1"
              component={Document1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Drive"
              component={Drive}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Gallery"
              component={Gallery}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Preview1"
              component={Preview1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentScreen"
              component={PaymentScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionHistory"
              component={TransactionHistory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MyAccount"
              component={MyAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GoogleSignIn"
              component={GoogleSignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrintingInProcess"
              component={PrintingInProcess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessfulPaymentScreen2"
              component={SuccessfulPaymentScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessfulPaymentScreen"
              component={SuccessfulPaymentScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GoogleSignUp"
              component={GoogleSignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Scan"
              component={Scan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Preview"
              component={Preview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPage"
              component={SignUpPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
