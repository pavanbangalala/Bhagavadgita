import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../utils/Colors';
import Strings from '../utils/Strings';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
const logo = require('../../assets/images/geeta.png');

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>;
};

const SplashScreen = ({navigation}: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.slate_grey}
      />
      <Image
        source={logo}
        style={{width: 172, height: 172, alignSelf: 'center', marginLeft: -24}}
        resizeMode="cover"
      />
      <Text style={styles.title}>{Strings.APP_TITLE}</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.slate_grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.marron_oak,
    fontSize: 40,
    marginVertical: 24,
  },
});
