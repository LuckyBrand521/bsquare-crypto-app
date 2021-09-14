import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const InvestmentHomeScreen = props => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#18222E"
        translucent={true}
      />
      <Text>InvestmentHomeScreen</Text>
    </SafeAreaView>
  );
};
export default InvestmentHomeScreen;
