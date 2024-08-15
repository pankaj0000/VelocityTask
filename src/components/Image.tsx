import {View, Text} from 'react-native';
import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

type TImage = {
  source: FastImageProps['source'];
  resizeMode?: FastImageProps['resizeMode'];
  style?: FastImageProps['style'];
};

export default function Image(props: TImage) {
  const {source, resizeMode, style} = props;
  
  return (
    <FastImage
      source={source}
      resizeMode={resizeMode}
      style={style}
      defaultSource={require('../assets/images/default.png.jpg')}
    />
  );
}
