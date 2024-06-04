import React from "react";
import { Text, StyleSheet, View, Pressable, Alert } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const MainMenu = () => {
  const navigation = useNavigation();

  const pickFile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      navigation.navigate("PrintPreview", { fileUri: result.uri });
    }
  };

  const openCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        navigation.navigate("PrintPreview", { fileUri: result.uri });
      }
    } else {
      Alert.alert("Permission Denied", "Camera access is required to take photos.");
    }
  };

  return (
    <LinearGradient
      style={styles.dashboard}
      locations={[0.06, 0.74]}
      colors={["#000", "#8288b6"]}
    >
      <Text style={styles.dashboard1}>{`Dashboard `}</Text>
      <Text style={styles.recent}>Recent</Text>
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.childPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={styles.searchRecentFiles}>Search recent files...</Text>
      </View>
      <Pressable
        style={[styles.personal, styles.personalLayout]}
        onPress={pickFile}
      >
        <View style={[styles.personalChild, styles.personalLayout]} />
        <View style={[styles.personalItem, styles.itemLayout]} />
        <Image
          style={styles.bankSafeIcon}
          contentFit="cover"
          source={require("../assets/bank-safe.png")}
        />
        <Text style={[styles.vault, styles.vaultTypo]}>Vault</Text>
        <Text style={[styles.file, styles.fileTypo]}>120 File</Text>
      </Pressable>
      <Pressable
        style={[styles.eBook, styles.personalLayout]}
        onPress={pickFile}
      >
        <View style={[styles.personalChild, styles.personalLayout]} />
        <View style={[styles.eBookItem, styles.itemLayout]} />
        <Image
          style={styles.bankSafeIcon}
          contentFit="cover"
          source={require("../assets/red-file.png")}
        />
        <Text style={[styles.document, styles.file1Position]}>Document</Text>
        <Text style={[styles.file1, styles.file1Position]}>58 File</Text>
      </Pressable>
      <Pressable
        style={[styles.drive, styles.drivePosition]}
        onPress={pickFile}
      >
        <View style={[styles.personalChild, styles.personalLayout]} />
        <View style={[styles.driveItem, styles.itemLayout]} />
        <Image
          style={styles.googleDriveIcon}
          contentFit="cover"
          source={require("../assets/google-drive.png")}
        />
        <Text style={[styles.drive1, styles.file2Position]}>Drive</Text>
        <Text style={[styles.file2, styles.file2Position]}>41 File</Text>
      </Pressable>
      <Pressable
        style={[styles.gallery, styles.drivePosition]}
        onPress={pickFile}
      >
        <View style={[styles.personalChild, styles.personalLayout]} />
        <View style={[styles.galleryItem, styles.itemLayout]} />
        <Image
          style={styles.bankSafeIcon}
          contentFit="cover"
          source={require("../assets/gallery.png")}
        />
        <Text style={[styles.gallery1, styles.file1Position]}>Gallery</Text>
        <Text style={[styles.file1, styles.file1Position]}>46 File</Text>
      </Pressable>
      <Pressable
        style={styles.userinfo}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/frame-23.png")}
        />
      </Pressable>
      <Pressable
        style={styles.scan}
        onPress={openCamera}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/scan.png")}
        />
      </Pressable>
      <Text style={styles.nawazSharif}>Nawaz Sharif</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 55,
    width: 324,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_16xl,
    left: 0,
    top: 0,
  },
  personalLayout: {
    height: 92,
    width: 174,
    position: "absolute",
  },
  itemLayout: {
    height: 57,
    width: 56,
    borderRadius: Border.br_mini,
    left: 14,
    top: 17,
    position: "absolute",
  },
  vaultTypo: {
    height: 19,
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.labelSmall_size,
    top: 29,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  fileTypo: {
    height: 15,
    color: Color.colorCadetblue_100,
    top: 49,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
  },
  file1Position: {
    left: 80,
    textAlign: "left",
    position: "absolute",
  },
  drivePosition: {
    top: 314,
    height: 92,
    width: 174,
    position: "absolute",
  },
  file2Position: {
    width: 38,
    left: 80,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  dashboard1: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 172,
    textAlign: "left",
    color: Color.colorDarkgray_300,
    fontSize: FontSize.size_5xl,
    left: 26,
    top: 57,
    position: "absolute",
  },
  recent: {
    top: 443,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorDarkgray_300,
    fontSize: FontSize.size_5xl,
    left: 26,
    position: "absolute",
  },
  searchChild: {
    height: 55,
    width: 324,
    position: "absolute",
  },
  vectorIcon: {
    height: "21.82%",
    width: "3.8%",
    top: "38.18%",
    right: "87.96%",
    bottom: "40%",
    left: "8.24%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  searchRecentFiles: {
    top: 19,
    left: 55,
    fontSize: FontSize.subHeadlineMain_size,
    color: "rgba(130, 166, 176, 0.66)",
    width: 139,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  search: {
    top: 123,
    display: "none",
    left: 26,
    height: 55,
    width: 324,
  },
  personalChild: {
    backgroundColor: Color.colorDarkslategray_300,
    borderRadius: Border.br_16xl,
    left: 0,
    top: 0,
  },
  personalItem: {
    backgroundColor: "#d4d3dd",
  },
  bankSafeIcon: {
    top: 26,
    left: 22,
    height: 40,
    width: 39,
    position: "absolute",
  },
  vault: {
    width: 37,
    left: 76,
    textAlign: "left",
    position: "absolute",
  },
  file: {
    width: 45,
    left: 76,
    textAlign: "left",
    position: "absolute",
  },
  personal: {
    left: 4,
    top: 203,
    width: 174,
  },
  eBookItem: {
    backgroundColor: "#f6dbdb",
  },
  document: {
    width: 74,
    height: 19,
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.labelSmall_size,
    top: 29,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  file1: {
    height: 15,
    color: Color.colorCadetblue_100,
    top: 49,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
    width: 39,
  },
  eBook: {
    left: 197,
    top: 203,
    width: 174,
  },
  driveItem: {
    backgroundColor: "#cce7e5",
  },
  googleDriveIcon: {
    top: 21,
    left: 17,
    width: 49,
    height: 50,
    position: "absolute",
  },
  drive1: {
    height: 19,
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.labelSmall_size,
    top: 29,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  file2: {
    height: 15,
    color: Color.colorCadetblue_100,
    top: 49,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interRegular,
  },
  drive: {
    left: 4,
  },
  galleryItem: {
    backgroundColor: "#f6f0db",
  },
  gallery1: {
    width: 52,
    height: 19,
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.labelSmall_size,
    top: 29,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  gallery: {
    left: 197,
  },
  icon: {
    borderRadius: 4,
    overflow: "hidden",
  },
  userinfo: {
    left: 328,
    width: 35,
    height: 35,
    top: 57,
    position: "absolute",
  },
  scan: {
    left: 151,
    top: 724,
    width: 73,
    height: 58,
    position: "absolute",
  },
  nawazSharif: {
    top: 58,
    left: 247,
    letterSpacing: 1,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.labelSmall,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 78,
    height: 34,
    fontSize: FontSize.size_3xs,
    color: Color.labelColorDarkPrimary,
    position: "absolute",
  },
  dashboard: {
    flex: 1,
    height: 812,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default MainMenu;