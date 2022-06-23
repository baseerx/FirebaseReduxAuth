import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { signInWithPopup,FacebookAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const provider = new FacebookAuthProvider();
// const navigation=useNavigation();
const SocialLogin = ({navigation}) => {
  const loginWithFb=()=>{
     signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      navigation.navigate('Home');
  
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
  
      // ...
    });
  }
  return (
    <View style={styles.socialContainer}>
      <TouchableOpacity
       onPress={loginWithFb}
      >
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
