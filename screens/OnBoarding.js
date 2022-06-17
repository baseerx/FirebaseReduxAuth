import {StyleSheet, Text,Image, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import React from 'react';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.boaringContainer}>
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/images/onboarding/onboarding1.png')} />,
            title: 'Onboarding',
            subtitle: 'Something big is unwrapping ahead..',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/images/onboarding/onboarding2.png')} />,
            title: 'Onboarding',
            subtitle: 'We Welcome You!!',
          }
        ]}
        onDone={()=>navigation.navigate('Authenticate')}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  boaringContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
