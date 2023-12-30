import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useGetChaptersQuery} from '../redux/GitaApi';
import Colors from '../utils/Colors';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Strings from '../utils/Strings';
import Chapter from '../components/Chapter';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {geetaApi} from '../redux/GitaApi';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const {data, isLoading, isSuccess} = useGetChaptersQuery();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.backgroundColor}
      />
      {isLoading ? (
        <ActivityIndicator size={'large'} color={Colors.marron_oak} />
      ) : isSuccess ? (
        <SwiperFlatList
          data={data}
          renderItem={({item}) => (
            <Chapter
              chapter={item}
              onNavigation={(index: number) =>
                navigation.navigate('VerseListScreen', {index: index})
              }
            />
          )}
        />
      ) : (
        <Text style={styles.error}>{Strings.APP_ERROR}</Text>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  error: {
    color: Colors.marron_oak,
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    width: '75%',
    height: '100%',
  },
});
