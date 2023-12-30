import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Verses from './src/screens/Verses';
import VerseDetails from './src/screens/VerseDetails';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {api} from './src/redux/GitaApi';
import {Provider} from 'react-redux';
import store from './src/redux/Store';
import {VerseType} from './src/types/VerseType';

export type RootStackParamList = {
  HomeScreen: undefined;
  VerseListScreen: {index: number};
  VerseDetails: {verse: VerseType};
};

const MainStack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
          <MainStack.Screen name="HomeScreen" component={HomeScreen} />
          <MainStack.Screen name="VerseListScreen" component={Verses} />
          <MainStack.Screen name="VerseDetails" component={VerseDetails} />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
