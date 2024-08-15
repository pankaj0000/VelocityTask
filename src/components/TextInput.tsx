import {
  View,
  Text,
  StyleSheet,
  TextInput as RNTextInput,
  KeyboardType,
  ViewStyle,
  Platform,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {Dimension} from '../constants/Dimension';
import {Ionicons} from '../constants/Icons';

type TTextInput = {
  value?: string;
  onChangeText?: (value: string) => void;
  keyboardType?: KeyboardType;
  placeHolder?: string;
  containerStyle?: ViewStyle;
};

export default function TextInput(props: TTextInput) {
  const {value, onChangeText, keyboardType, placeHolder, containerStyle} =
    props;
  return (
    <View
      style={[
        styles.container,
        styles.rowDirection,
        {justifyContent: 'space-between'},
        containerStyle,
      ]}>
      <View style={[styles.rowDirection]}>
        <Ionicons
          name="search"
          size={Dimension.Size_15}
          color={Colors.black}
          style={{marginHorizontal: Dimension.Size_5}}
        />
        <RNTextInput
          placeholder={placeHolder}
          value={value}
          onChangeText={text => onChangeText && onChangeText(text)}
          keyboardType={keyboardType}
          style={styles.textInputContainer}
        />
      </View>
      <Ionicons
        name="mic-outline"
        color={Colors.black}
        size={Dimension.Size_15}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grey,
    marginVertical: Dimension.Size_10,
    paddingVertical: Platform.OS == "ios" ?  Dimension.Size_10 :0, 
    borderRadius: Dimension.Size_5,
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputContainer: {
    maxWidth: '90%',
  },
});
