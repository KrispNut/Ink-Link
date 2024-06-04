import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const SuccessfulPaymentScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.successfulPaymentScreen}>
      <View style={styles.vectorParent}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.mobileMoney, styles.theTypo]}>Mobile Money</Text>
        <Image
          style={[styles.groupIcon, styles.textPosition]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <View
        style={[styles.successfulPaymentScreenChild, styles.textPosition]}
      />
      <View style={styles.paymentSuccessfulParent}>
        <Text
          style={[styles.paymentSuccessful, styles.theTypo]}
        >{`Payment successful!
`}</Text>
        <Text style={styles.invoiceAlsoSent}>
          Invoice also sent to your email address
        </Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <Pressable
            style={[styles.groupChild, styles.groupChildLayout]}
            onPress={() => navigation.navigate("MainMenu")}
          />
          <Text style={[styles.downloadTheInvoice, styles.theTypo]}>
            Download the invoice
          </Text>
        </View>
        <Pressable
          style={styles.seeTheDetailsParent}
          onPress={() => navigation.navigate("SuccessfulPaymentScreen")}
        >
          <Pressable
            style={[styles.seeTheDetailsContainer, styles.textPosition]}
            onPress={() => navigation.navigate("SuccessfulPaymentScreen")}
          >
            <Text
              style={[styles.seeTheDetails, styles.theTypo]}
            >{`See the details
`}</Text>
          </Pressable>
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/arrow-3.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.paymentTerminalPrintingARe, styles.receiptIconPosition]}
        contentFit="cover"
        source={require("../assets/payment-terminal-printing-a-receipt.png")}
      />
      <Image
        style={[styles.receiptIcon, styles.receiptIconPosition]}
        contentFit="cover"
        source={require("../assets/receipt.png")}
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
  theTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  textPosition: {
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 62,
    width: 334,
    left: 0,
    position: "absolute",
  },
  receiptIconPosition: {
    left: 8,
    position: "absolute",
  },
  signalIconLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.54%",
    width: "1.7%",
    top: "63.72%",
    right: "97.21%",
    bottom: "32.74%",
    left: "1.09%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mobileMoney: {
    marginLeft: -17.15,
    color: Color.colorDarkslategray_400,
    width: 58,
    height: 11,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
    left: "50%",
    top: 0,
  },
  groupIcon: {
    top: 1,
    width: 38,
    height: 11,
  },
  vectorParent: {
    height: "1.39%",
    width: "21.95%",
    top: "-18.42%",
    right: "-14.64%",
    bottom: "117.03%",
    left: "92.69%",
    position: "absolute",
  },
  successfulPaymentScreenChild: {
    top: 67,
    backgroundColor: Color.colorSilver_100,
    width: 411,
    height: 413,
    display: "none",
  },
  paymentSuccessful: {
    marginLeft: -99,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    color: Color.colorDarkslategray_500,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  invoiceAlsoSent: {
    marginLeft: -120,
    top: 485,
    fontSize: FontSize.subHeadlineMain_size,
    letterSpacing: 0.4,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorGray_200,
    textAlign: "center",
    width: 242,
    height: 68,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_17xl,
    backgroundColor: Color.colorMediumslateblue,
    top: 0,
  },
  downloadTheInvoice: {
    top: 21,
    left: 72,
    letterSpacing: 0.5,
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent: {
    top: 637,
  },
  seeTheDetails: {
    fontSize: FontSize.size_base,
    letterSpacing: 0.3,
    color: Color.colorMediumslateblue,
    width: 111,
    height: 22,
  },
  seeTheDetailsContainer: {
    top: 0,
  },
  groupItem: {
    left: 119,
    width: 19,
    height: 0,
    top: 8,
    position: "absolute",
  },
  seeTheDetailsParent: {
    top: 553,
    left: 98,
    width: 138,
    height: 22,
    position: "absolute",
  },
  paymentSuccessfulParent: {
    marginLeft: -166.5,
    top: 53,
    height: 699,
    width: 334,
    left: "50%",
    position: "absolute",
  },
  paymentTerminalPrintingARe: {
    top: 131,
    width: 359,
    height: 275,
    display: "none",
  },
  receiptIcon: {
    top: 124,
    width: 340,
    height: 321,
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
    fontSize: FontSize.bodyMain_size,
    color: Color.colorBlack,
    width: 27,
    height: 13,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 0,
  },
  icSignalWifiStatusbar4BarParent: {
    right: 29,
    width: 313,
    height: 14,
    top: 8,
    position: "absolute",
  },
  successfulPaymentScreen: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
  },
});

export default SuccessfulPaymentScreen2;
