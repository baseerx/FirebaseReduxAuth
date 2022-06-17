import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SocialLogin = () => {
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/fb.png')}
          style={styles.socialImgs}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/insta.png')}
          style={styles.socialImgs}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/p.png')}
          style={styles.socialImgs}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/in.png')}
          style={styles.socialImgs}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 10,
    width: '100%',
  },
  socialImgs: {
    width: 45,
    height: 45,
  },
});
