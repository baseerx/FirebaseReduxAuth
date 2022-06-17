import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',marginHorizontal:25}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Authenticate')} style={{backgroundColor:'#0386D0',width:'100%',height:50,alignItems:'center',borderRadius:10,justifyContent:'center'}}>
      <Text style={{color:'white',fontFamily: 'Roboto-Medium'}}>Log Out</Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})