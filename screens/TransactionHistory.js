import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const TransactionHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.transactionHistory}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupPosition1]}
          locations={[1, 1]}
          colors={["rgba(93, 200, 117, 0.2)", "rgba(106, 206, 128, 0.01)"]}
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
      <View style={[styles.groupParent, styles.groupPosition]}>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-121351.png")}
        />
        <View style={[styles.groupContainer, styles.groupParentPosition]}>
          <View style={[styles.transaction1Parent, styles.parentPosition]}>
            <Text style={[styles.transaction1, styles.textPosition]}>
              Transaction 1
            </Text>
            <Text style={[styles.date120124, styles.taglineTypo]}>
              Date: 12/01/24
            </Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupParentPosition]}
            contentFit="cover"
            source={require("../assets/group-123344.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-121351.png")}
        />
        <View style={[styles.groupParent1, styles.groupParentPosition]}>
          <View style={[styles.transaction2Parent, styles.parentPosition]}>
            <Text style={[styles.transaction1, styles.textPosition]}>
              Transaction 2
            </Text>
            <Text style={[styles.date120124, styles.taglineTypo]}>
              Date: 10/03/24
            </Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupParentPosition]}
            contentFit="cover"
            source={require("../assets/group-123344.png")}
          />
        </View>
      </View>
      <View
        style={[styles.iconLightMonthChevronParent, styles.iconParentLayout]}
      >
        <View style={styles.iconLightMonthChevron} />
        <Image
          style={[styles.groupChild3, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-121351.png")}
        />
        <View style={[styles.groupParent2, styles.groupParentPosition]}>
          <View style={[styles.transaction3Parent, styles.parentPosition]}>
            <Text style={[styles.transaction1, styles.textPosition]}>
              Transaction 3
            </Text>
            <Text style={[styles.date120124, styles.taglineTypo]}>
              Date: 12/11/23
            </Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupParentPosition]}
            contentFit="cover"
            source={require("../assets/group-123344.png")}
          />
        </View>
      </View>
      <View
        style={[styles.iconLightMonthChevronGroup, styles.iconParentLayout]}
      >
        <View style={styles.iconLightMonthChevron} />
        <Image
          style={[styles.groupChild3, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-121351.png")}
        />
        <View style={[styles.groupParent2, styles.groupParentPosition]}>
          <View style={[styles.transaction3Parent, styles.parentPosition]}>
            <Text style={[styles.transaction1, styles.textPosition]}>
              Transaction 4
            </Text>
            <Text style={[styles.date120124, styles.taglineTypo]}>
              Date: 12/09/23
            </Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupParentPosition]}
            contentFit="cover"
            source={require("../assets/group-123344.png")}
          />
        </View>
      </View>
      <View
        style={[styles.iconLightMonthChevronContainer, styles.iconParentLayout]}
      >
        <View style={styles.iconLightMonthChevron} />
        <Image
          style={[styles.groupChild3, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-121351.png")}
        />
        <View style={[styles.groupParent2, styles.groupParentPosition]}>
          <View style={[styles.transaction3Parent, styles.parentPosition]}>
            <Text style={[styles.transaction1, styles.textPosition]}>
              Transaction 5
            </Text>
            <Text style={[styles.date120124, styles.taglineTypo]}>
              Date: 10/07/23
            </Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupParentPosition]}
            contentFit="cover"
            source={require("../assets/group-123344.png")}
          />
        </View>
      </View>
      <View
        style={[styles.iconLightMonthChevronParent1, styles.iconParentLayout]}
      >
        <View style={styles.iconLightMonthChevron} />
        <Image
          style={[styles.groupChild3, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-121351.png")}
        />
        <View style={[styles.groupParent2, styles.groupParentPosition]}>
          <View style={[styles.transaction3Parent, styles.parentPosition]}>
            <Text style={[styles.transaction1, styles.textPosition]}>
              Transaction 6
            </Text>
            <Text style={[styles.date120124, styles.taglineTypo]}>
              Date: 12/05/23
            </Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupParentPosition]}
            contentFit="cover"
            source={require("../assets/group-123344.png")}
          />
        </View>
      </View>
      <View
        style={[styles.iconLightMonthChevronParent2, styles.iconParentLayout]}
      >
        <View style={styles.iconLightMonthChevron} />
        <Image
          style={[styles.groupChild3, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-121351.png")}
        />
        <View style={[styles.groupParent1, styles.groupParentPosition]}>
          <View style={[styles.transaction2Parent, styles.parentPosition]}>
            <Text style={[styles.transaction1, styles.textPosition]}>
              Transaction 7
            </Text>
            <Text style={[styles.date120124, styles.taglineTypo]}>
              Date: 12/01/23
            </Text>
          </View>
          <Image
            style={[styles.groupIcon, styles.groupParentPosition]}
            contentFit="cover"
            source={require("../assets/group-123344.png")}
          />
        </View>
      </View>
      <Text style={[styles.transactionHistory1, styles.usernameTypo]}>
        Transaction History
      </Text>
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
  groupPosition1: {
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
  groupPosition: {
    left: "8%",
    right: "21.36%",
    width: "70.64%",
    height: "4.93%",
    position: "absolute",
  },
  groupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "38%",
    top: "42.5%",
    height: "19.5%",
    position: "absolute",
    overflow: "hidden",
  },
  groupParentPosition: {
    height: 40,
    left: 0,
    top: 0,
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
  iconParentLayout: {
    width: 311,
    left: 30,
    height: 40,
    position: "absolute",
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
  groupInner: {
    width: "1.02%",
    right: "0%",
    left: "98.98%",
  },
  transaction1: {
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.bodyMain,
    color: Color.primaryBlack,
  },
  date120124: {
    lineHeight: 16,
  },
  transaction1Parent: {
    width: 80,
  },
  groupIcon: {
    width: 40,
  },
  groupContainer: {
    width: 136,
  },
  groupParent: {
    top: "36.82%",
    bottom: "58.25%",
  },
  transaction2Parent: {
    width: 83,
  },
  groupParent1: {
    width: 139,
  },
  groupView: {
    top: "43.6%",
    bottom: "51.48%",
  },
  iconLightMonthChevron: {
    top: 14,
    left: 304,
    width: 7,
    height: 12,
    position: "absolute",
  },
  groupChild3: {
    width: "0.87%",
    right: "14.82%",
    left: "84.31%",
  },
  transaction3Parent: {
    width: 84,
  },
  groupParent2: {
    width: 140,
  },
  iconLightMonthChevronParent: {
    top: 409,
  },
  iconLightMonthChevronGroup: {
    top: 464,
  },
  iconLightMonthChevronContainer: {
    top: 519,
  },
  iconLightMonthChevronParent1: {
    top: 574,
  },
  iconLightMonthChevronParent2: {
    top: 629,
  },
  transactionHistory1: {
    marginLeft: -141.5,
    top: 59,
    left: "50%",
    fontSize: 30,
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
  transactionHistory: {
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
  },
});

export default TransactionHistory;
