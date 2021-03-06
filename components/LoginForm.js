import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Checkbox,
  HelperText,
  Dialog,
  Portal,
  Paragraph,
} from 'react-native-paper';
import {sendPasswordResetEmail, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {SetUserDetail} from '../redux/userDetails';

const LoginForm = ({email, setEmail, password, setPassword}) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [checked, setChecked] = useState(false);

  const [failed, setFailed] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const signIn = async () => {
    const flag = hasErrors();

    setProcessing(true);

    if (flag === true) {
      await signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;

          storeUserDetails(user);
          // ...
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFailed(true);
          setProcessing(false);
        });
    } else {
      setProcessing(false)
      alert('fill fields correctly..')

    }
  };

  const storeUserDetails = user => {
    dispatch(SetUserDetail({uid: user.uid, email: user.email}));
    setProcessing(false);
    setFailed(false);

    navigation.navigate('Home');
  };
  const hasErrors = () => {
    if (email.length == 0 && password == 0) return false;
    else if (!email.includes('@') && email.length > 0) return 'email';
    else if (password.length < 6 && password != '') return 'password';
    else return true;
  };
 const forgotPassword=()=>{
  email.length===0 ? alert('fill the email field..'):

  sendPasswordResetEmail(auth, email)
  .then(() => {
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 }
  return (
    <View style={styles.loginformContainer}>
      <View>
        <Portal>
          <Dialog visible={failed} onDismiss={failed}>
            <Dialog.Title>Failed</Dialog.Title>
            <Dialog.Content>
              <Paragraph>User Not Found!!</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setFailed(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
      <View style={styles.emailContainer}>
        <Icon name="user" style={{bottom: -5, color: '#A6A6A6'}} size={30} />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#A6A6A6"
          style={styles.emailField}
          value={email}
          onChangeText={text => setEmail(text.trim())}
        />
      </View>
      <View>
        <HelperText
          padding="none"
          type="error"
          visible={hasErrors() === 'email'}>
          Email address is invalid!
        </HelperText>
      </View>
      <View style={styles.passwordContainer}>
        <Icon name="lock" style={{bottom: -5, color: '#A6A6A6'}} size={30} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#A6A6A6"
          style={styles.passwordField}
          secureTextEntry={!passwordShow}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity onPress={() => setPasswordShow(!passwordShow)}>
          <Icon
            name="eye"
            style={[
              {bottom: -5, color: '#A6A6A6'},
              passwordShow == true && {
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              },
            ]}
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View>
        <HelperText
          padding="none"
          type="error"
          visible={hasErrors() === 'password'}>
          password is short!!
        </HelperText>
      </View>
      <View style={styles.rememberContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center', left: -20}}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            uncheckedColor="#747070"
          />
          <Text style={{color: '#6B5E5E', fontSize: 12}}>
            Remember Password
          </Text>
        </View>
        <View style={{right: -20}}>
          <TouchableOpacity
           onPress={forgotPassword}
          >
          <Text style={{color: '#0386D0', fontSize: 12}}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.loginBtn} onPress={signIn}>
          <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
            {processing === true ? (
              <ActivityIndicator animating={true} size="small" color={'#fff'} />
            ) : (
              'Login'
            )}
          </Text>
        </TouchableOpacity>
        <Text style={{color: '#747070', paddingTop: 15}}>or connect with</Text>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  emailField: {
    width: '80%',
    color: 'black',
    paddingLeft: 15,
    paddingBottom: 0,
    marginRight: 30,
  },
  passwordField: {
    width: '80%',
    color: 'black',
    paddingLeft: 15,
    paddingBottom: 0,
  },
  loginformContainer: {
    width: '80%',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderBottomColor: '#A6A6A6',
    borderBottomWidth: 2,
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: '8%',
    borderBottomColor: '#A6A6A6',
    borderBottomWidth: 2,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: '#0386D0',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    top: 12,
    borderRadius: 5,
  },
});
