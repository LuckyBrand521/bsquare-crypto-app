import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-bottom-tabs';

//app screens
import SplashScreen from '../Screens/SplashScreen';
//home screens
import HomeScreen from '../Screens/HomeScreen';
import {styles} from './style'
//investment screens
import InvestmentHomeScreen from '../Screens/investment/InvestmentHomeScreen';

const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={SplashScreen}>
        {/* <Stack.Navigator headerMode="none" initialRouteName={MyTabs}> */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="TabScreen" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={styles.navigationConfig}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Balance',
          unmountOnBlur: true,
          tabBarIcon: ({focused, tintColor, color}) => {
            if (focused) {
              return (
                <View
                  style={{
                    backgroundColor: '#525962',
                    height: 75,
                    width: 80,
                    borderRadius: 10,
                    borderBottomStartRadius: 0,
                    borderBottomEndRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/icon/coin.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
              );
            } else {
              return (
                <Image
                  source={require('../assets/images/icon/coin.png')}
                  style={{width: 34, height: 34}}
                />
              );
            }
          },
        }}
        name="HomeStack"
        component={HomeStack}
        listeners={({navigation}) => ({
          blur: () => navigation.setParams({screen: undefined}),
        })}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Historial',
          unmountOnBlur: true,
          tabBarIcon: ({focused, tintColor, color}) => {
            if (focused) {
              return (
                <View
                  style={{
                    backgroundColor: '#525962',
                    height: 75,
                    width: 80,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/icon/coin.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
              );
            } else {
              return (
                <Image
                  source={require('../assets/images/icon/coin.png')}
                  style={{width: 34, height: 34}}
                />
              );
            }
          },
        }}
        name="InvestmentStack"
        component={InvestmentStack}
        listeners={({navigation}) => ({
          blur: () => navigation.setParams({screen: undefined}),
        })}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Historial',
          unmountOnBlur: true,
          tabBarIcon: ({focused, tintColor, color}) => {
            if (focused) {
              return (
                <View
                  style={{
                    backgroundColor: '#525962',
                    height: 75,
                    width: 80,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/icon/coin.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
              );
            } else {
              return (
                <Image
                  source={require('../assets/images/icon/coin.png')}
                  style={{width: 34, height: 34}}
                />
              );
            }
          },
        }}
        name="SpendingStack"
        component={SpendingStack}
        listeners={({navigation}) => ({
          blur: () => navigation.setParams({screen: undefined}),
        })}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack1.Navigator headerMode="none" initialRouteName={HomeScreen}>
      <Stack1.Screen name="HomeScreen" component={HomeScreen} />
    </Stack1.Navigator>
  );
};

const InvestmentStack = () => {
  return (
    <Stack2.Navigator headerMode="none" initialRouteName={InvestmentHomeScreen}>
      <Stack2.Screen
        name="InvestmentHomeScreen"
        component={InvestmentHomeScreen}
      />
    </Stack2.Navigator>
  );
};

const SpendingStack = () => {
  return (
    <Stack3.Navigator headerMode="none" initialRouteName={InvestmentHomeScreen}>
      <Stack3.Screen
        name="InvestmentHomeScreen"
        component={InvestmentHomeScreen}
      />
    </Stack3.Navigator>
  );
};
