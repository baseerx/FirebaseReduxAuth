import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux/';
import {auth} from '../firebase';
import {signOut} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const email = useSelector(state => state.user.email);
  const navigation=useNavigation();
  const FlushSession = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Authenticate');
      })
      .catch(error => {
        // An error happened.
      });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25,
      }}>
      <Text style={{color: 'black'}}>{email}</Text>
      <TouchableOpacity
        onPress={FlushSession}
        style={{
          backgroundColor: '#0386D0',
          width: '100%',
          height: 50,
          alignItems: 'center',
          borderRadius: 10,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontFamily: 'Roboto-Medium'}}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
