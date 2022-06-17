import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';
import {HelperText} from 'react-native-paper';

const Register = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registerUser = async () => {
    let flag = hasErrors();

    if (flag) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  };

  const hasErrors = () => {
    if (name.length===0) return 'name';
    else if (!email.includes('@') && email.length > 0) return 'email';
    else if (password.length < 6 && password != '') return 'password';
    else return true;
  };

  return (
    <View style={styles.registerContainer}>
      <View style={styles.nameContainer}>
        <Icon name="user" style={{bottom: -5, color: '#A6A6A6'}} size={30} />
        <TextInput
          placeholder="Name"
          placeholderTextColor="#A6A6A6"
          style={styles.inputField}
          onChangeText={text => setName(text)}
        />
      </View>
      <View>
        <HelperText
          padding="none"
          type="error"
          visible={hasErrors() === 'name'}>
          name is empty
        </HelperText>
      </View>
      <View style={styles.emailContainer}>
        <Icon name="user" style={{bottom: -5, color: '#A6A6A6'}} size={30} />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#A6A6A6"
          style={styles.inputField}
          onChangeText={text => setEmail(text)}
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
          style={styles.inputField}
          secureTextEntry={!passwordShow}
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

      <TouchableOpacity style={styles.registerBtn} onPress={registerUser}>
        <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold'}}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  registerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderBottomColor: '#A6A6A6',
    borderBottomWidth: 2,
    paddingRight: '35%',
  },
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    top: 30,
    borderBottomColor: '#A6A6A6',
    borderBottomWidth: 2,
    paddingRight: '35%',
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    top: 30,
    marginVertical: '10%',
    borderBottomColor: '#A6A6A6',
    borderBottomWidth: 2,
  },
  inputField: {
    width: '80%',
    color: 'black',
    paddingLeft: 15,
  },
  registerBtn: {
    backgroundColor: '#0386D0',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 15,
    top: 12,
    borderRadius: 5,
  },
});
