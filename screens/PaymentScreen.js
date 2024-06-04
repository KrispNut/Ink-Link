import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

const PaymentScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentScreen}>
      <View
        style={[styles.paymentScreenChild, styles.rectangleParentShadowBox]}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Preview")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.mobileMoney, styles.groupIconLayout]}>
          Mobile Money
        </Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <Text style={[styles.rs, styles.rsPosition]}>2050 Rs</Text>
      <Text style={[styles.tvaIncluded18, styles.weWillSendClr]}>
        TVA included (18%)
      </Text>
      <View style={styles.paymentScreenItem} />
      <Text style={[styles.payment, styles.rsTypo]}>{`Payment 💳 `}</Text>
      <View style={[styles.roundedRectangle, styles.activeTabLayout]} />
      <View style={[styles.activeTab, styles.activeTabSpaceBlock]}>
        <View style={styles.creditCard}>
          <Image
            style={styles.creditCardIcon}
            contentFit="cover"
            source={require("../assets/credit-card-icon.png")}
          />
          <Text style={[styles.jazzCash, styles.payTypo]}>Jazz Cash</Text>
        </View>
      </View>
      <View style={styles.creditParent}>
        <Text style={[styles.credit, styles.creditTypo]}>Credit</Text>
        <Image
          style={[styles.groupIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
      </View>
      <View style={styles.cardNumberParent}>
        <Text style={[styles.cardNumber, styles.holderTypo]}>{`Card number
`}</Text>
        <View style={[styles.roundedRectangle1, styles.roundedPosition1]} />
        <Image
          style={[styles.masterCardLogo, styles.text4Layout]}
          contentFit="cover"
          source={require("../assets/master-card-logo.png")}
        />
        <Image
          style={styles.cardIcon}
          contentFit="cover"
          source={require("../assets/card-icon.png")}
        />
        <Text style={[styles.text, styles.textPosition1]}>
          5263 4841 0151 8471
        </Text>
        <Text style={[styles.holder, styles.holderTypo]}>Holder</Text>
        <View style={[styles.roundedRectangle2, styles.roundedPosition1]} />
        <Text style={[styles.mark, styles.textPosition1]}>Mark</Text>
        <Text style={[styles.expirationDate, styles.holderTypo]}>
          Expiration Date
        </Text>
        <View style={[styles.roundedRectangle3, styles.roundedPosition]} />
        <Text style={[styles.text1, styles.textPosition]}>06 / 2024</Text>
        <Text style={[styles.cvvCvc, styles.cvvCvcPosition]}>CVV / CVC</Text>
        <View style={[styles.hint, styles.hintLayout]}>
          <Image
            style={[styles.hintChild, styles.hintLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Text style={[styles.text2, styles.text2Typo]}>?</Text>
        </View>
        <View style={[styles.roundedRectangle4, styles.cvvCvcPosition]} />
        <Text style={[styles.text3, styles.textPosition]}>917</Text>
        <Text style={[styles.weWillSend, styles.text2Typo]}>
          We will send you order details to your email address after successful
          payment.
        </Text>
        <Pressable
          style={[styles.frameWrapper, styles.activeTabSpaceBlock]}
          onPress={() => navigation.navigate("PrintingInProcess")}
        >
          <View style={styles.creditCard}>
            <Image
              style={styles.nounLock1911126Icon}
              contentFit="cover"
              source={require("../assets/noun-lock-1911126.png")}
            />
            <Text style={[styles.pay, styles.payTypo]}>Pay</Text>
          </View>
        </Pressable>
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
        <Text style={[styles.text4, styles.text4Layout]}>1:03</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 30,
  },
  groupLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIconLayout: {
    height: 11,
    position: "absolute",
  },
  rsPosition: {
    right: 20,
    position: "absolute",
  },
  weWillSendClr: {
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.robotoRegular,
  },
  rsTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  activeTabLayout: {
    height: 69,
    borderRadius: Border.br_base,
    top: 247,
    left: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
  },
  activeTabSpaceBlock: {
    paddingHorizontal: Padding.p_3xl,
    backgroundColor: Color.colorMediumspringgreen,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  payTypo: {
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  creditTypo: {
    color: Color.colorDarkslategray_400,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
  },
  holderTypo: {
    fontSize: FontSize.size_base,
    letterSpacing: 0.3,
    textAlign: "left",
    color: Color.colorDarkslategray_400,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  roundedPosition1: {
    backgroundColor: Color.colorWhitesmoke_300,
    right: 11,
    borderRadius: Border.br_base,
    left: 0,
    position: "absolute",
  },
  text4Layout: {
    width: 27,
    position: "absolute",
  },
  textPosition1: {
    color: Color.colorDarkslategray_200,
    top: "50%",
    fontSize: FontSize.size_base,
    left: 20,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  roundedPosition: {
    bottom: 149,
    top: 241,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_base,
  },
  textPosition: {
    marginTop: 33.5,
    color: Color.colorDarkslategray_200,
    letterSpacing: 0.8,
    top: "50%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  cvvCvcPosition: {
    left: 180,
    position: "absolute",
  },
  hintLayout: {
    height: 18,
    width: 18,
    position: "absolute",
  },
  text2Typo: {
    letterSpacing: 0.2,
    fontSize: FontSize.labelSmall_size,
    position: "absolute",
  },
  signalIconLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  paymentScreenChild: {
    top: 29,
    bottom: 541,
    shadowColor: "rgba(1, 118, 63, 0.07)",
    shadowRadius: 20,
    elevation: 20,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.labelColorDarkPrimary,
    left: 0,
    right: 0,
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_100,
    top: 0,
    height: 44,
    width: 30,
    left: 0,
  },
  groupItem: {
    top: 22,
    left: 10,
    width: 1,
    height: 0,
  },
  rectangleParent: {
    top: 47,
    left: 8,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    position: "absolute",
  },
  vectorIcon: {
    height: "3.54%",
    width: "1.7%",
    top: "63.72%",
    right: "97.21%",
    bottom: "32.74%",
    left: "1.09%",
  },
  mobileMoney: {
    marginLeft: -17.15,
    width: 58,
    textAlign: "left",
    color: Color.colorDarkslategray_400,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    top: 0,
  },
  groupIcon: {
    top: 1,
    width: 38,
    left: 0,
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
  rs: {
    top: 131,
    fontSize: FontSize.size_xl,
    letterSpacing: 0.6,
    textAlign: "right",
    color: Color.colorMediumspringgreen,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  tvaIncluded18: {
    top: 156,
    right: 3,
    fontSize: FontSize.subHeadlineMain_size,
    letterSpacing: 0.3,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    position: "absolute",
  },
  paymentScreenItem: {
    top: 67,
    backgroundColor: Color.colorSilver_100,
    width: 411,
    height: 413,
    left: 0,
    position: "absolute",
    display: "none",
  },
  payment: {
    top: 129,
    left: 18,
    fontSize: 22,
    letterSpacing: 0.7,
    color: Color.colorDarkslategray_500,
    textAlign: "left",
    position: "absolute",
  },
  roundedRectangle: {
    shadowColor: "rgba(1, 118, 63, 0.24)",
    shadowRadius: 27,
    elevation: 27,
    backgroundColor: Color.colorWhitesmoke_200,
    right: 20,
    position: "absolute",
  },
  creditCardIcon: {
    width: 24,
    height: 16,
  },
  jazzCash: {
    marginLeft: 8,
  },
  creditCard: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  activeTab: {
    right: 206,
    shadowColor: "rgba(37, 212, 130, 0.2)",
    paddingVertical: 24,
    height: 69,
    borderRadius: Border.br_base,
    top: 247,
    left: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    elevation: 4,
    shadowRadius: 4,
  },
  credit: {
    marginLeft: -17.1,
    top: 4,
    width: 73,
    height: 31,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon1: {
    height: "66.1%",
    width: "24.32%",
    top: "0%",
    right: "75.68%",
    bottom: "33.9%",
    left: "0%",
  },
  creditParent: {
    marginLeft: 41.5,
    top: 264,
    width: 111,
    height: 35,
    left: "50%",
    position: "absolute",
  },
  cardNumber: {
    left: 4,
    fontSize: FontSize.size_base,
    position: "absolute",
    top: 0,
  },
  roundedRectangle1: {
    top: 27,
    bottom: 363,
  },
  masterCardLogo: {
    top: 40,
    left: 283,
    height: 16,
  },
  cardIcon: {
    width: 28,
    height: 23,
  },
  text: {
    marginTop: -180.5,
    letterSpacing: 0.8,
    color: Color.colorDarkslategray_200,
    top: "50%",
  },
  holder: {
    top: 107,
    left: 4,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  roundedRectangle2: {
    top: 134,
    bottom: 256,
  },
  mark: {
    marginTop: -73.5,
    color: Color.colorDarkslategray_200,
    top: "50%",
    letterSpacing: 0.3,
  },
  expirationDate: {
    top: 214,
    left: 4,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  roundedRectangle3: {
    right: 190,
    left: 0,
    position: "absolute",
  },
  text1: {
    left: 20,
    marginTop: 33.5,
  },
  cvvCvc: {
    top: 214,
    fontSize: FontSize.size_base,
    letterSpacing: 0.3,
    textAlign: "left",
    color: Color.colorDarkslategray_400,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  hintChild: {
    opacity: 0.2,
    top: 0,
    left: 0,
  },
  text2: {
    top: 3,
    left: 6,
    fontFamily: FontFamily.interRegular,
    color: Color.colorMediumspringgreen,
    textAlign: "left",
  },
  hint: {
    left: 284,
    top: 214,
  },
  roundedRectangle4: {
    right: 15,
    bottom: 149,
    top: 241,
    backgroundColor: Color.colorWhitesmoke_300,
    borderRadius: Border.br_base,
  },
  text3: {
    left: 196,
  },
  weWillSend: {
    bottom: 79,
    left: 25,
    lineHeight: 17,
    textAlign: "center",
    width: 248,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.robotoRegular,
  },
  nounLock1911126Icon: {
    width: 16,
    height: 21,
  },
  pay: {
    marginLeft: 16,
  },
  frameWrapper: {
    bottom: 0,
    borderRadius: Border.br_17xl,
    paddingVertical: 18,
    right: 11,
    left: 0,
  },
  cardNumberParent: {
    top: 341,
    left: 38,
    width: 310,
    height: 435,
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
  text4: {
    fontSize: FontSize.bodyMain_size,
    color: Color.colorBlack,
    height: 13,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    top: 0,
    left: 0,
  },
  icSignalWifiStatusbar4BarParent: {
    top: 8,
    right: 29,
    width: 313,
    height: 14,
    position: "absolute",
  },
  paymentScreen: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
  },
});

export default PaymentScreen;
