import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../utils/Colors';
import {VerseType} from '../types/VerseType';

type VerseTileProps = {
  index: number;
  onPress: () => void;
};

const VerseTitle = ({index, onPress}: VerseTileProps) => {
  const fontSize = index.toString().length <= 2 ? 18 : 16;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.text, {fontSize: fontSize}]}>{index}</Text>
    </TouchableOpacity>
  );
};

export default VerseTitle;

const styles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    backgroundColor: Colors.slate_grey,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: Colors.marron_oak,
    fontWeight: '600',
  },
});
