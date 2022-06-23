import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';

const ShadowBox = () => {
  return (
    <View style={styles.btmContainer}>
      <ImageBackground
        style={{width: '100%', height: 250,bottom:0}}
        source={require('../assets/images/Subtract.png')}>
       <View style={{alignItems:'center',top:8}}>
       <Image
          style={{width: 250, height: 150}}
          source={require('../assets/images/figma.png')}
        />
       </View>
      </ImageBackground>
    </View>
  );
};

export default ShadowBox;

const styles = StyleSheet.create({
  btmContainer: {
    height: 235,
    width: 410,
    top:12
  },
});
