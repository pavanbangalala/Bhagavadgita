import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TranslationType} from '../types/VerseType';
import Colors from '../utils/Colors';

type TranslationItemProps = {
  translation: TranslationType;
};

const TranslationItem = ({translation}: TranslationItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{translation.description}</Text>
      <Text style={styles.author}>{translation.author_name}</Text>
    </View>
  );
};

export default TranslationItem;

const styles = StyleSheet.create({
  container: {paddingVertical: 8, paddingHorizontal: 8},
  description: {color: Colors.marron_oak, letterSpacing: 0.25},
  author: {
    color: Colors.marron_oak,
    alignSelf: 'flex-end',
    letterSpacing: 0.25,
  },
});
