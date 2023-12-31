import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors';
import ChapterType from '../types/ChapterType';

type ChapterProps = {
  chapter: ChapterType;
  onNavigation: () => void;
};

const Chapter = ({chapter, onNavigation}: ChapterProps) => {
  const [isEnglish, setEnglish] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {isEnglish ? chapter.name_translated : chapter.name}
          </Text>
        </View>
        <View style={styles.chapterContainer}>
          <View style={styles.chapterNumberContainer}>
            <Text style={styles.number}>{chapter.chapter_number}</Text>
            <Text style={styles.chapter}>Chapter</Text>
          </View>
          <View style={styles.verseContainer}>
            <Text
              style={styles.translated_title}
              numberOfLines={1}
              ellipsizeMode="tail">
              {isEnglish ? chapter.name : chapter.name_translated}
            </Text>
            <Text
              style={
                styles.verses_title
              }>{`Verses  ${chapter.verses_count}`}</Text>
          </View>
        </View>

        <View style={{marginVertical: 20, flex: 1}}>
          <Text
            style={{color: Colors.marron_oak, fontSize: 20, fontWeight: '700'}}>
            chapter_summary :
          </Text>
          <View style={styles.languageContainer}>
            <Text
              onPress={() => setEnglish(true)}
              style={[
                styles.english,
                isEnglish ? {...styles.selected_lang} : null,
              ]}>
              English
            </Text>
            <Text
              onPress={() => setEnglish(false)}
              style={[
                styles.hindi,
                isEnglish ? null : {...styles.selected_lang},
              ]}>
              Hindi
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.summaryTitle} ellipsizeMode="tail">
              {isEnglish
                ? chapter.chapter_summary
                : chapter.chapter_summary_hindi}
            </Text>
          </ScrollView>
        </View>
        <Text
          style={styles.verseList}
          onPress={() => {
            onNavigation(chapter.chapter_number);
          }}>
          Verse List{' '}
        </Text>
      </View>
    </View>
  );
};

export default Chapter;
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: '100%',
  },
  innerContainer: {
    margin: 16,
    paddingRight: 16,

    height: '98%',
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
    letterSpacing: 0.25,
    paddingVertical: 8,
  },
  chapterContainer: {flexDirection: 'row', marginVertical: 16},
  verseContainer: {
    flex: 1,
    paddingLeft: 24,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  translated_title: {
    color: Colors.marron_oak,
    paddingVertical: 2,
    textAlign: 'left',
    textAlignVertical: 'center',
    fontSize: 17,
    width: '100%',
    flex: 1,
  },
  verses_title: {
    color: Colors.marron_oak,

    textAlign: 'center',
    fontSize: 20,
  },
  selected_lang: {backgroundColor: Colors.marron_oak, color: 'white'},
  verseList: {
    fontSize: 22,
    color: Colors.marron_oak,
    paddingVertical: 10,
    backgroundColor: Colors.slate_grey,
    width: '65%',
    alignSelf: 'center',
    marginVertical: 12,
    borderRadius: 6,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  chapterNumnberContainer: {
    backgroundColor: Colors.slate_grey,
    borderRadius: 4,
    elevation: 6,
    marginLeft: 4,
    borderColor: Colors.dark_grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hindi: {
    borderColor: Colors.marron_oak,
    borderWidth: 1,
    paddingHorizontal: 21,
    paddingVertical: 4,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  summaryTitle: {
    fontSize: 18,
    textAlign: 'justify',
    marginVertical: 12,
    color: Colors.marron_oak,
    letterSpacing: 0.2,
  },
  languageContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    marginTop: 12,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  english: {
    borderColor: Colors.marron_oak,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderRightWidth: 0,
  },
});
