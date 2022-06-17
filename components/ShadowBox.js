import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ShadowBox = () => {
  return (
    <View style={styles.btmContainer}>
      <Image
        style={styles.firstImg}
        resizeMode='cover'
        source={require('../assets/images/figma.png')}
      />
      <Image
        style={styles.secondImg}
        source={require('../assets/images/Subtract.png')}
      />
    </View>
  );
};

export default ShadowBox;

const styles = StyleSheet.create({
  firstImg:{
    width:350,
    height:150,
    top:'10%'
  },
  secondImg:{
   bottom:'45%'
  },
  btmContainer:{
    height:280,
    borderRadius:10,
    alignItems:'center',
    top:15,
    width:410
  }
});
