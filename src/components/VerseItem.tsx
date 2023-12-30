import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import {VerseType} from '../types/VerseType';

type VerseItemProps = {
  verse: VerseType;
};

const VerseItem = ({verse}: VerseItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text} numberOfLines={3} ellipsizeMode="tail">
        {verse.text}
      </Text>
    </TouchableOpacity>
  );
};

export default VerseItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 6,
    borderColor: Colors.dark_grey,
    backgroundColor: Colors.slate_grey,
    marginVertical: 2,
    padding: 4,
  },
  text: {
    fontSize: 14,
    textAlign: 'auto',

    paddingVertical: 8,
    paddingHorizontal: 2,
  },
});
