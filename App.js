import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import {Provider as PaperProvider} from 'react-native-paper';
import OnBoarding from './screens/OnBoarding';
import MyStack from './navigation/MyStack';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {/* <LoginScreen /> */}
        <MyStack/>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});
