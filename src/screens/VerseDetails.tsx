import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {useRoute} from '@react-navigation/native';

type VerseDetailsProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'VerseDetails'>;
};

const VerseDetails = ({navigation}: VerseDetailsProps) => {
  const {verse} = useRoute().params;
  return (
    <View>
      <Text>VerseDetails</Text>
    </View>
  );
};

export default VerseDetails;

const styles = StyleSheet.create({});
