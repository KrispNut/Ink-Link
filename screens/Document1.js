import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Document1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.document}>
      <View style={[styles.doc17, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.docx
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftWordIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-word.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc16, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.ppt
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-powerpoint.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc15, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.xlsx
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-excel-2019.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc14, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.pdf
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/pdf.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc13, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.docx
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftWordIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-word.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc12, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.ppt
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-powerpoint.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc11, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.xlsx
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-excel-2019.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc10, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.pdf
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/pdf.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc9, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.docx
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftWordIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-word.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc8, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.ppt
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-powerpoint.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc7, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.xlsx
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-excel-2019.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc6, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.pdf
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/pdf.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc5, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.docx
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftWordIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-word.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc4, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.ppt
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-powerpoint.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc3, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.xlsx
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-excel-2019.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <View style={[styles.doc2, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.pdf
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
        <Image
          style={[styles.microsoftPowerpointIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/pdf.png")}
        />
      </View>
      <View style={[styles.doc1, styles.docIconPosition]}>
        <View style={styles.briefTaskTodaydocxParent}>
          <Text style={[styles.briefTaskTodaydocx, styles.size25065KbTypo]}>
            Brief-task-today.docx
          </Text>
          <Text style={[styles.size25065Kb, styles.text1Layout]}>
            Size: 250.65 KB | 2024-2-08
          </Text>
        </View>
        <Image
          style={[styles.microsoftWordIcon, styles.docIconPosition]}
          contentFit="cover"
          source={require("../assets/microsoft-word.png")}
        />
        <Image
          style={styles.doc17Child}
          contentFit="cover"
          source={require("../assets/ellipse-644.png")}
        />
      </View>
      <Text style={[styles.importDocument, styles.textFlexBox]}>{`Import
Document`}</Text>
      <Pressable
        style={[styles.import, styles.importLayout1]}
        onPress={() => navigation.navigate("Preview")}
      >
        <LinearGradient
          style={[styles.importChild, styles.importLayout1]}
          locations={[0, 1]}
          colors={["#fff", "#999"]}
        />
        <Text style={[styles.import1, styles.importLayout]}>{`Import
`}</Text>
        <View style={[styles.importItem, styles.importLayout]} />
        <Text style={[styles.text, styles.textFlexBox]}>0</Text>
      </Pressable>
      <Pressable
        style={[styles.goBackParent, styles.importLayout]}
        onPress={() => navigation.navigate("MainMenu")}
      >
        <Text style={[styles.goBack, styles.text1Typo]}>Go back</Text>
        <Image
          style={[styles.multiplyIcon, styles.importChildPosition]}
          contentFit="cover"
          source={require("../assets/multiply1.png")}
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
        <Text style={[styles.text1, styles.text1Typo]}>1:03</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  docIconPosition: {
    height: 37,
    left: 0,
    position: "absolute",
  },
  size25065KbTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    width: 299,
    position: "absolute",
  },
  text1Layout: {
    height: 13,
    left: 0,
  },
  textFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  importLayout1: {
    width: 81,
    height: 31,
    position: "absolute",
  },
  importLayout: {
    height: 17,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  importChildPosition: {
    left: 0,
    top: 0,
  },
  signalIconLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  briefTaskTodaydocx: {
    fontSize: FontSize.size_base,
    height: 18,
    textAlign: "left",
    color: Color.colorDarkslategray_500,
    top: 0,
    left: 0,
  },
  size25065Kb: {
    top: 18,
    color: Color.colorDarkslategray_700,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 299,
    position: "absolute",
  },
  briefTaskTodaydocxParent: {
    top: 4,
    left: 76,
    height: 31,
    width: 299,
    position: "absolute",
  },
  microsoftWordIcon: {
    width: 58,
    top: 0,
  },
  doc17Child: {
    top: 15,
    left: 346,
    width: 9,
    height: 9,
    position: "absolute",
  },
  doc17: {
    top: 764,
    width: 375,
    height: 37,
  },
  microsoftPowerpointIcon: {
    width: 55,
    top: 0,
  },
  doc16: {
    top: 723,
    width: 375,
    height: 37,
  },
  doc15: {
    top: 682,
    width: 375,
    height: 37,
  },
  doc14: {
    top: 641,
    width: 375,
    height: 37,
  },
  doc13: {
    top: 600,
    width: 375,
    height: 37,
  },
  doc12: {
    top: 559,
    width: 375,
    height: 37,
  },
  doc11: {
    top: 518,
    width: 375,
    height: 37,
  },
  doc10: {
    top: 477,
    width: 375,
    height: 37,
  },
  doc9: {
    top: 436,
    width: 375,
    height: 37,
  },
  doc8: {
    top: 395,
    width: 375,
    height: 37,
  },
  doc7: {
    top: 354,
    width: 375,
    height: 37,
  },
  doc6: {
    top: 313,
    width: 375,
    height: 37,
  },
  doc5: {
    top: 272,
    width: 375,
    height: 37,
  },
  doc4: {
    top: 231,
    width: 375,
    height: 37,
  },
  doc3: {
    top: 190,
    width: 375,
    height: 37,
  },
  doc2: {
    top: 149,
    width: 375,
    height: 37,
  },
  doc1: {
    top: 108,
    width: 375,
    height: 37,
  },
  importDocument: {
    top: 33,
    left: 137,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorDarkslategray_500,
  },
  importChild: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: "transparent",
    top: 0,
    left: 0,
  },
  import1: {
    left: 12,
    fontSize: FontSize.labelSmall_size,
    color: Color.colorDarkslategray_100,
    width: 44,
    top: 8,
    height: 17,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  importItem: {
    left: 57,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colorDarkgray_200,
    borderWidth: 1.5,
    width: 17,
    top: 8,
    height: 17,
    backgroundColor: Color.labelColorDarkPrimary,
  },
  text: {
    top: 11,
    left: 60,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDarkgray_200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 10,
    height: 10,
    fontSize: FontSize.size_3xs,
  },
  import: {
    top: 769,
    left: 275,
  },
  goBack: {
    top: 2,
    left: 21,
    fontSize: FontSize.captionSubdue_size,
    letterSpacing: 0.3,
    width: 48,
    height: 15,
    color: Color.colorDarkslategray_500,
  },
  multiplyIcon: {
    width: 16,
    height: 16,
    top: 0,
    position: "absolute",
  },
  goBackParent: {
    top: 42,
    left: 7,
    width: 69,
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
    fontSize: FontSize.bodyMain_size,
    color: Color.colorBlack,
    width: 27,
    height: 13,
    left: 0,
    top: 0,
  },
  icSignalWifiStatusbar4BarParent: {
    right: 29,
    width: 313,
    height: 14,
    top: 8,
    position: "absolute",
  },
  document: {
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
    backgroundColor: Color.labelColorDarkPrimary,
  },
});

export default Document1;
