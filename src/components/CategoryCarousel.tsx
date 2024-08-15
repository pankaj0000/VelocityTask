import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import React from 'react';
import {Dimension} from '../constants/Dimension';
import {Colors} from '../constants/Colors';
import Image from './Image';

type TCategoryCarousel = {
  data: Array<CarouselData>;
  activeCategory: number;
  handleChangeCategory(id: number): void;
};

type CarouselData = {
  id: number;
  name: string;
  image: string;
};

export default function CategoryCarousel(props: TCategoryCarousel) {
  const {data, activeCategory, handleChangeCategory} = props;

  const renderItem = ({item}: {item: CarouselData}) => {
    return (
      <Pressable
        onPress={() => handleChangeCategory(item?.id)}
        style={[
          styles.itemContainer,
          {borderWidth: activeCategory == item.id ? 1 : 0, borderColor: 'red'},
        ]}>
        <Image source={{uri: item?.image}} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{item?.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Dimension.Size_10,
    backgroundColor: Colors.grey,
  },
  imageStyle: {
    height: Dimension.Size_50,
    width: Dimension.Size_50,
    borderRadius: Dimension.Size_50,
  },
  textStyle: {
    fontSize: Dimension.Size_10,
    color: Colors.black,
    marginTop: Dimension.Size_10,
  },
  itemContainer: {
    paddingHorizontal: Dimension.Size_10,
    alignItems: 'center',
    paddingVertical: Dimension.Size_5,
  },
});
