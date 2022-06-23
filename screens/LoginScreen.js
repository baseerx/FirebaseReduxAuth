import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LoginForm from '../components/LoginForm';
import SocialLogin from '../components/SocialLogin';
import ShadowBox from '../components/ShadowBox';
import Register from './Register';
import { useIsFocused } from '@react-navigation/native';

const LoginScreen = () => {
  const [borderFlag, setborderFlag] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const isFocused=useIsFocused();

  const SwitchTabFunction = params => {
    if (params === 1) {
      setborderFlag(true);
    } else {
      setborderFlag(false);
    }
  };
 
  
  useEffect(() => {
    setEmail('')
    setPassword('')
    setName('')
    setborderFlag(true)
  }, [isFocused])
 
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      enabled={true}>
      <ScrollView>
        <View style={styles.loginContainer}>
          <View style={styles.title}>
            {borderFlag === true ? (
              <Text style={styles.txtTitle}>Login</Text>
            ) : (
              <Text style={styles.txtTitle}>Register</Text>
            )}
          </View>
          <View style={styles.txtDetailContainer}>
            <Text style={styles.txtDetail}>
              By signing in you are agreeing our
              <Text style={styles.blueDetailTxt}>Term and privacy policy</Text>
            </Text>
          </View>
          <View style={styles.topBtnContainer}>
            <View
              style={[
                styles.loginTextContainer,
                borderFlag === true && {borderBottomWidth: 1},
              ]}>
              <TouchableOpacity onPress={() => SwitchTabFunction(1)}>
                <Text
                  style={[
                    styles.topLoginBtnText,
                    borderFlag === true
                      ? {color: '#036BB9'}
                      : {color: '#A6A6A6'},
                  ]}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.registerTextContainer,
                borderFlag === false && {borderBottomWidth: 1},
              ]}>
              <TouchableOpacity onPress={() => SwitchTabFunction(2)}>
                <Text
                  style={[
                    styles.topRegisterBtnText,
                    borderFlag === false
                      ? {color: '#036BB9'}
                      : {color: '#A6A6A6'},
                  ]}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>{borderFlag === true ? <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} /> : <Register email={email} setEmail={setEmail} password={password} setPassword={setPassword} name={name} setName={setName} />}</View>

          <View>
            <SocialLogin />
          </View>
          <View>
            <ShadowBox />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    width: 284,
    height: 50,
    marginTop: 30,
    alignItems: 'center',
  },
  txtTitle: {
    fontFamily: 'Roboto-Medium',
    color: 'black',
    fontSize: 25,
  },
  txtDetail: {
    color: '#6B5E5E',
    fontFamily: 'Roboto-Italic',
  },
  txtDetailContainer: {
    width: 295,
    paddingVertical: 10,
    height: 72,
  },
  topBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 30,
  },
  blueDetailTxt: {
    color: '#0386D0',
  },
  topLoginBtnText: {
    color: '#A6A6A6',
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 35,
  },
  topRegisterBtnText: {
    color: '#A6A6A6',
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 25,
    lineHeight: 35,
  },
  loginTextContainer: {
    marginRight: 10,
    borderBottomColor: 'black',
  },
  registerTextContainer: {
    marginLeft: 10,
    borderBottomColor: 'black',
  },
});
