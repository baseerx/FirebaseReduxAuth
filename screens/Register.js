import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, db} from '../firebase';
import {HelperText} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {ActivityIndicator} from 'react-native-paper';
import { collection, addDoc  } from "firebase/firestore";
import { useDispatch } from 'react-redux';
import { SetUserDetail } from '../redux/userDetails';
const Register = ({name,email,password,setName,setEmail,setPassword}) => {
  const [passwordShow, setPasswordShow] = useState(false);
 
  const [processing, setProcessing] = useState(false);

  const navigation=useNavigation();

  const dispatch=useDispatch();


  const registerUser = async () => {
    let flag = hasErrors();
    setProcessing(true)
    if (flag) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          storeName(user)
          // ...
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    else{
      setProcessing(false)
      Alert('fill fields correctly..')
    }
  };
   
 const storeName=async(user)=>{
  
  try {
    const docRef = await addDoc(collection(db, "user-detail"), {
      name: name,
      uid:user.uid     
    });
    dispatch(SetUserDetail({'uid':user.uid,'email':user.email}))
    setProcessing(false)

    navigation.navigate('Home')

  } catch (e) {
    console.error("Error adding document: ", e);
  }
 }

  const hasErrors = () => {
    if (name.length>0 && name.length<3) return 'name';
    else if (!email.includes('@') && email.length > 0) return 'email';
    else if (password.length < 6 && password != '') return 'password';
    else if (name.length===0 && email.length===0 && password.length===0)
    return false;
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
          value={name}
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
          value={email}
          style={styles.inputField}
          onChangeText={text => setEmail(text.trim())}
        />
      </View>
      <View>
        <HelperText
          type="error"
          visible={hasErrors() === 'email'}>
          Email address is invalid!
        </HelperText>
      </View>
      <View style={styles.passwordContainer}>
        <Icon name="lock" style={{bottom: -5, color: '#A6A6A6'}} size={30} />
        <TextInput
          placeholder="Password"
          value={password}
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
        {processing === true ? (
              <ActivityIndicator animating={true} size="small" color={'#fff'} />
            ) : (
              'Register'
            )}
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
    borderBottomColor: '#A6A6A6',
    borderBottomWidth: 2,
    paddingRight: '35%',
  },
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
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
