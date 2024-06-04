import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Drive = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.drive}>
      <Pressable
        style={styles.goBackParent}
        onPress={() => navigation.navigate("MainMenu")}
      >
        <Text style={styles.goBack}>Go back</Text>
        <Image
          style={[styles.multiplyIcon, styles.folderPosition4]}
          contentFit="cover"
          source={require("../assets/multiply1.png")}
        />
      </Pressable>
      <View style={[styles.folderParent, styles.folderParentLayout]}>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
      </View>
      <View style={[styles.folderGroup, styles.groupPosition]}>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
      </View>
      <View style={[styles.folderContainer, styles.folderParentLayout]}>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
      </View>
      <View style={[styles.groupView, styles.groupPosition]}>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
      </View>
      <View style={[styles.folderParent1, styles.folderParentLayout]}>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
      </View>
      <View style={[styles.folderParent2, styles.groupPosition]}>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
        <View style={[styles.folder, styles.folderParentLayout]}>
          <View style={[styles.folderChild, styles.folderChildLayout]} />
          <Image
            style={styles.folderIcon}
            contentFit="cover"
            source={require("../assets/folder.png")}
          />
          <Text style={styles.data}>Data</Text>
          <Image
            style={[styles.menuVerticalIcon, styles.menuIconLayout]}
            contentFit="cover"
            source={require("../assets/menu-vertical.png")}
          />
        </View>
      </View>
      <View style={[styles.folder24, styles.folderLayout]}>
        <View style={[styles.folderChild21, styles.folderChildLayout]} />
        <Text style={[styles.filenameJpg, styles.filenameJpgTypo]}>
          Filename. jpg
        </Text>
        <Image
          style={[styles.menuVerticalIcon24, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.imageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <Image
          style={[styles.naturePhotoIcon, styles.folderLayout]}
          contentFit="cover"
          source={require("../assets/nature-photo.png")}
        />
      </View>
      <View style={[styles.folder25, styles.folderLayout]}>
        <View style={[styles.folderChild21, styles.folderChildLayout]} />
        <Text style={[styles.filenameJpg, styles.filenameJpgTypo]}>
          Filename. jpg
        </Text>
        <Image
          style={[styles.menuVerticalIcon24, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.imageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <Image
          style={[styles.naturePhotoIcon, styles.folderLayout]}
          contentFit="cover"
          source={require("../assets/nature-photo.png")}
        />
      </View>
      <View style={[styles.folder26, styles.folderPosition3]}>
        <View style={[styles.folderChild21, styles.folderChildLayout]} />
        <Text style={[styles.filenameJpg, styles.filenameJpgTypo]}>
          Filename. jpg
        </Text>
        <Image
          style={[styles.menuVerticalIcon24, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.imageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <Image
          style={[styles.naturePhotoIcon, styles.folderLayout]}
          contentFit="cover"
          source={require("../assets/nature-photo.png")}
        />
      </View>
      <View style={[styles.folder27, styles.folderPosition3]}>
        <View style={[styles.folderChild21, styles.folderChildLayout]} />
        <Text style={[styles.filenameJpg, styles.filenameJpgTypo]}>
          Filename. jpg
        </Text>
        <Image
          style={[styles.menuVerticalIcon24, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.imageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <Image
          style={[styles.naturePhotoIcon, styles.folderLayout]}
          contentFit="cover"
          source={require("../assets/nature-photo.png")}
        />
      </View>
      <View style={[styles.folder28, styles.folderPosition2]}>
        <View style={[styles.folderChild21, styles.folderChildLayout]} />
        <Text style={[styles.filenameJpg, styles.filenameJpgTypo]}>
          Filename. jpg
        </Text>
        <Image
          style={[styles.menuVerticalIcon24, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.imageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <Image
          style={[styles.naturePhotoIcon, styles.folderLayout]}
          contentFit="cover"
          source={require("../assets/nature-photo.png")}
        />
      </View>
      <View style={[styles.folder29, styles.folderPosition2]}>
        <View style={[styles.folderChild21, styles.folderChildLayout]} />
        <Text style={[styles.filenameJpg, styles.filenameJpgTypo]}>
          Filename. jpg
        </Text>
        <Image
          style={[styles.menuVerticalIcon24, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.imageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <Image
          style={[styles.naturePhotoIcon, styles.folderLayout]}
          contentFit="cover"
          source={require("../assets/nature-photo.png")}
        />
      </View>
      <View style={[styles.folder30, styles.folderPosition1]}>
        <View style={[styles.folderChild, styles.folderChildLayout]} />
        <Text style={[styles.filenamepdf, styles.filenameJpgTypo]}>
          Filename.pdf
        </Text>
        <Image
          style={[styles.menuVerticalIcon, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.pdfIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pdf1.png")}
        />
        <Image
          style={styles.foldedDocumentIcon}
          contentFit="cover"
          source={require("../assets/folded-document.png")}
        />
      </View>
      <View style={[styles.folder31, styles.folderPosition]}>
        <View style={[styles.folderChild, styles.folderChildLayout]} />
        <Text style={[styles.filenamepdf, styles.filenameJpgTypo]}>
          Filename.pdf
        </Text>
        <Image
          style={[styles.menuVerticalIcon, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.pdfIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pdf1.png")}
        />
        <Image
          style={styles.foldedDocumentIcon}
          contentFit="cover"
          source={require("../assets/folded-document.png")}
        />
      </View>
      <View style={[styles.folder32, styles.folderPosition1]}>
        <View style={[styles.folderChild, styles.folderChildLayout]} />
        <Text style={[styles.filenamepdf, styles.filenameJpgTypo]}>
          Filename.pdf
        </Text>
        <Image
          style={[styles.menuVerticalIcon, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.pdfIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pdf1.png")}
        />
        <Image
          style={styles.foldedDocumentIcon}
          contentFit="cover"
          source={require("../assets/folded-document.png")}
        />
      </View>
      <View style={[styles.folder33, styles.folderPosition]}>
        <View style={[styles.folderChild, styles.folderChildLayout]} />
        <Text style={[styles.filenamepdf, styles.filenameJpgTypo]}>
          Filename.pdf
        </Text>
        <Image
          style={[styles.menuVerticalIcon, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.pdfIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pdf1.png")}
        />
        <Image
          style={styles.foldedDocumentIcon}
          contentFit="cover"
          source={require("../assets/folded-document.png")}
        />
      </View>
      <View style={[styles.folder34, styles.folderPosition1]}>
        <View style={[styles.folderChild, styles.folderChildLayout]} />
        <Text style={[styles.filenamepdf, styles.filenameJpgTypo]}>
          Filename.pdf
        </Text>
        <Image
          style={[styles.menuVerticalIcon, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.pdfIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pdf1.png")}
        />
        <Image
          style={styles.foldedDocumentIcon}
          contentFit="cover"
          source={require("../assets/folded-document.png")}
        />
      </View>
      <View style={[styles.folder35, styles.folderPosition]}>
        <View style={[styles.folderChild, styles.folderChildLayout]} />
        <Text style={[styles.filenamepdf, styles.filenameJpgTypo]}>
          Filename.pdf
        </Text>
        <Image
          style={[styles.menuVerticalIcon, styles.menuIconLayout]}
          contentFit="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.pdfIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/pdf1.png")}
        />
        <Image
          style={styles.foldedDocumentIcon}
          contentFit="cover"
          source={require("../assets/folded-document.png")}
        />
      </View>
      <View style={[styles.import, styles.importLayout]}>
        <View style={[styles.importChild, styles.importLayout]} />
        <Text style={[styles.new, styles.newLayout]}>New</Text>
      </View>
      <Image
        style={styles.plusIcon}
        contentFit="cover"
        source={require("../assets/plus.png")}
      />
      <Text style={styles.myDrive}>My Drive</Text>
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
        <Text style={[styles.text, styles.newLayout]}>1:03</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  folderPosition4: {
    top: 0,
    left: 0,
  },
  folderParentLayout: {
    height: 117,
    width: 110,
    position: "absolute",
  },
  folderChildLayout: {
    height: 110,
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_5xs,
    width: 110,
    top: 0,
    position: "absolute",
  },
  menuIconLayout: {
    width: 17,
    top: 7,
    height: 17,
    position: "absolute",
  },
  groupPosition: {
    top: 448,
    height: 117,
    width: 110,
    position: "absolute",
  },
  folderLayout: {
    width: 248,
    position: "absolute",
  },
  filenameJpgTypo: {
    width: 66,
    top: 10,
    height: 11,
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMain_size,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 19,
    width: 19,
    top: 12,
    position: "absolute",
  },
  folderPosition3: {
    left: 64,
    width: 248,
    height: 110,
    position: "absolute",
  },
  folderPosition2: {
    left: 188,
    width: 248,
    height: 110,
    position: "absolute",
  },
  folderPosition1: {
    top: 331,
    height: 110,
    width: 110,
    position: "absolute",
  },
  folderPosition: {
    top: 682,
    height: 110,
    width: 110,
    position: "absolute",
  },
  importLayout: {
    height: 31,
    width: 63,
    position: "absolute",
  },
  newLayout: {
    width: 27,
    color: Color.labelColorDarkPrimary,
    textAlign: "left",
    position: "absolute",
  },
  signalIconLayout: {
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  goBack: {
    top: 2,
    left: 21,
    fontSize: FontSize.captionSubdue_size,
    letterSpacing: 0.3,
    width: 48,
    height: 15,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorSilver_300,
    fontWeight: "700",
    position: "absolute",
  },
  multiplyIcon: {
    width: 16,
    height: 16,
    left: 0,
    position: "absolute",
  },
  goBackParent: {
    top: 42,
    left: 7,
    width: 69,
    height: 17,
    position: "absolute",
  },
  folderChild: {
    left: 0,
  },
  folderIcon: {
    top: 17,
    width: 100,
    height: 100,
    left: 5,
    position: "absolute",
  },
  data: {
    top: 9,
    left: 10,
    width: 33,
    height: 11,
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.bodyMain_size,
    textAlign: "left",
    position: "absolute",
  },
  menuVerticalIcon: {
    left: 93,
  },
  folder: {
    left: 0,
    top: 0,
  },
  folderParent: {
    left: 9,
    top: 97,
    width: 110,
  },
  folderGroup: {
    left: 9,
  },
  folderContainer: {
    left: 133,
    top: 97,
    width: 110,
  },
  groupView: {
    left: 133,
  },
  folderParent1: {
    left: 257,
    top: 97,
    width: 110,
  },
  folderParent2: {
    left: 257,
  },
  folderChild21: {
    left: 69,
  },
  filenameJpg: {
    left: 99,
  },
  menuVerticalIcon24: {
    left: 162,
  },
  imageIcon: {
    left: 74,
  },
  naturePhotoIcon: {
    top: 55,
    borderRadius: Border.br_8xs,
    height: 53,
    left: 0,
  },
  folder24: {
    left: -60,
    width: 248,
    height: 110,
    top: 214,
  },
  folder25: {
    top: 565,
    left: -60,
    width: 248,
    height: 110,
  },
  folder26: {
    top: 214,
  },
  folder27: {
    top: 565,
  },
  folder28: {
    top: 214,
  },
  folder29: {
    top: 565,
  },
  filenamepdf: {
    left: 30,
  },
  pdfIcon: {
    left: 5,
  },
  foldedDocumentIcon: {
    top: 47,
    left: 4,
    width: 102,
    height: 58,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  folder30: {
    left: 9,
  },
  folder31: {
    left: 9,
  },
  folder32: {
    left: 133,
  },
  folder33: {
    left: 133,
  },
  folder34: {
    left: 257,
  },
  folder35: {
    left: 257,
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
    borderRadius: 6,
    backgroundColor: "#373737",
    left: 0,
    top: 0,
  },
  new: {
    left: 29,
    fontSize: FontSize.labelSmall_size,
    fontFamily: FontFamily.interRegular,
    top: 7,
    width: 27,
    color: Color.labelColorDarkPrimary,
    height: 17,
  },
  import: {
    top: 771,
    left: 287,
  },
  plusIcon: {
    top: 776,
    left: 291,
    width: 21,
    height: 21,
    position: "absolute",
  },
  myDrive: {
    top: 33,
    left: 145,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    textAlign: "center",
    color: Color.colorSilver_300,
    fontWeight: "700",
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
    height: 13,
    width: 27,
    color: Color.labelColorDarkPrimary,
    fontSize: FontSize.bodyMain_size,
    left: 0,
    top: 0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  icSignalWifiStatusbar4BarParent: {
    top: 8,
    right: 29,
    width: 313,
    height: 14,
    position: "absolute",
  },
  drive: {
    backgroundColor: "#454545",
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
    overflow: "hidden",
  },
});

export default Drive;
