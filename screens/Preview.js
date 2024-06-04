import * as React from 'react';
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Print from 'expo-print';
import { FontSize, FontFamily, Color, Border } from '../GlobalStyles';

const Preview = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { fileUri } = route.params;

  const handlePrint = async () => {
    await Print.printAsync({
      uri: fileUri,
    });
  };

  return (
    <View style={styles.preview}>
      <Pressable
        style={styles.goBack}
        onPress={() => navigation.navigate('Preview1')}
      >
        <View style={styles.goBackChild} />
        <Image
          style={styles.goBackItem}
          contentFit="cover"
          source={require('../assets/arrow-1.png')}
        />
      </Pressable>
      <Image
        source={{ uri: fileUri }}
        style={styles.previewImage}
      />
      <Pressable
        style={[styles.printbutton, styles.printbuttonLayout]}
        onPress={handlePrint}
      >
        <LinearGradient
          style={[styles.printbuttonChild, styles.printbuttonLayout]}
          locations={[0.22, 0.58, 0.98]}
          colors={['#494949', '#909090', '#afafaf']}
        />
        <Text style={[styles.print, styles.printTypo]}>Print</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goBack: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackChild: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    borderRadius: Border.br_11xl,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  goBackItem: {
    width: 20,
    height: 20,
  },
  preview: {
    backgroundColor: Color.colorDarkslategray_400,
    flex: 1,
    width: '100%',
    height: 812,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '90%',
    height: '70%',
    marginBottom: 20,
    borderRadius: Border.br_11xl,
  },
  printbutton: {
    top: 746,
    left: 128,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    height: 48,
    width: 150,
  },
  printbuttonChild: {
    backgroundColor: 'transparent',
    elevation: 15,
    shadowRadius: 15,
    left: 0,
    top: 0,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: Border.br_11xl,
  },
  print: {
    marginLeft: -41,
    top: 7,
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkslategray_500,
    width: 82,
    height: 33,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: FontSize.size_5xl,
    left: '50%',
    position: 'absolute',
  },
  printTypo: {
    textAlign: 'center',
    fontSize: FontSize.size_5xl,
    left: '50%',
  },
  printbuttonLayout: {
    height: 48,
    width: 150,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: 'absolute',
  },
});

export default Preview;
