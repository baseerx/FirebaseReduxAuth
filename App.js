import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import {Provider as PaperProvider} from 'react-native-paper';
import OnBoarding from './screens/OnBoarding';
import MyStack from './navigation/MyStack';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          {/* <LoginScreen /> */}
          <MyStack />
        </SafeAreaView>
      </PaperProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});
