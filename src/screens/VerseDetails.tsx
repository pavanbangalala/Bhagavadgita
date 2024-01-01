import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useRoute} from '@react-navigation/native';
import {VerseType, TranslationType} from '../types/VerseType';
import Colors from '../utils/Colors';
import TranslationItem from '../components/TranslationItem';

type VerseDetailsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'VerseDetails'>;
};

const VerseDetails = ({navigation}: VerseDetailsProps) => {
  console.log('verse params', useRoute().params);
  const verse = useRoute()?.params?.verse as VerseType;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{verse.slug}</Text>
        </View>
        <View style={styles.summary}>
          <Text style={styles.summaryText}>{verse.text}</Text>
          <View style={styles.transliteration} />
          <Text style={styles.summaryText}>{verse.transliteration}</Text>
        </View>
        <View style={styles.translationsContainer}>
          <Text style={styles.translationTitle}>Translations</Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={verse.translations}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            renderItem={({item}) => <TranslationItem translation={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerseDetails;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.marron_oak,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  number: {
    fontSize: 36,
    color: Colors.marron_oak,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 14,
  },
  chapter: {fontSize: 12, color: Colors.marron_oak},
  title: {
    color: 'white',
    paddingHorizontal: 2,
    fontSize: 22,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    letterSpacing: 0.5,
    paddingVertical: 8,
  },
  summary: {
    marginVertical: 16,
    borderRadius: 6,
    backgroundColor: Colors.slate_grey,
    paddingHorizontal: 4,
  },
  summaryText: {
    paddingTop: 16,
    paddingHorizontal: 4,
    lineHeight: 16,
    fontSize: 18,
    color: Colors.marron_oak,
    fontWeight: '600',

    textAlign: 'justify',
    textAlignVertical: 'center',
    letterSpacing: 0.3,
  },
  translationsContainer: {
    flex: 1,

    borderRadius: 6,
    backgroundColor: Colors.slate_grey,
    alignItems: 'center',
  },
  translationTitle: {
    fontSize: 18,
    color: Colors.marron_oak,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  transliteration: {
    borderBottomColor: Colors.marron_oak,
    borderBottomWidth: 1,
    borderStyle: Platform.OS == 'android' ? 'dashed' : 'solid',
    marginHorizontal: 6,
  },
  itemSeparator: {
    marginHorizontal: 4,
    borderBottomColor: Colors.marron_oak,
    borderBottomWidth: 1,
    borderStyle: Platform.OS == 'android' ? 'dashed' : 'solid',
  },
});
