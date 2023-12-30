import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useRoute} from '@react-navigation/native';
import {useGetVersesQuery} from '../redux/GitaApi';
import VerseItem from '../components/VerseItem';
import Strings from '../utils/Strings';

type VersesProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'VerseListScreen'>;
  index: number;
};

const Verses = ({navigation}: VersesProps) => {
  const index = useRoute().params?.index;
  const {data, isLoading, isSuccess} = useGetVersesQuery(index);
  console.log('route =>', index);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.backgroundColor}
      />
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {`Chapter ${index}`}
        </Text>
      </View>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={Colors.marron_oak} />
        </View>
      ) : isSuccess ? (
        <View style={{marginVertical: 12}}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <VerseItem
                verse={item}
                onNavigation={(index: number) =>
                  navigation.navigate('VerseDetails', {verse: item})
                }
              />
            )}
          />
        </View>
      ) : (
        <Text style={styles.error}>{Strings.APP_ERROR}</Text>
      )}
    </SafeAreaView>
  );
};

export default Verses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.marron_oak,

    borderRadius: 6,
  },
  title: {
    color: 'white',
    paddingHorizontal: 2,
    fontSize: 22,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    letterSpacing: 0.25,
    paddingVertical: 8,
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
