import {View, StyleSheet, Modal} from 'react-native';
import React, {Dispatch, SetStateAction, useMemo} from 'react';
import {Dimension} from '../constants/Dimension';
import {Entypo} from '../constants/Icons';
import {Colors} from '../constants/Colors';
import IconButton from './IconButton';
import Dropdown from './Dropdown';
import category from '../resources/Categories.json';
import { BundleStrings } from '../constants/Strings';

type TCategoryModal = {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  currentCategory: number;
  changeCategory: (val: number) => void;
};

export default function CategoryModal(props: TCategoryModal) {
  const {modalVisible, setModalVisible, currentCategory, changeCategory} =
    props;

  const dropdownData = useMemo(() => {
    return category.map(e => ({
      label: e.name,
      value: e.id,
    }));
  }, []);

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => setModalVisible(!modalVisible)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <IconButton
            containerStyle={{
              backgroundColor: 'transparent',
              alignSelf: 'flex-end',
            }}
            onPress={() => setModalVisible(!modalVisible)}>
            <Entypo
              name="cross"
              color={Colors.black}
              size={Dimension.Size_15}
            />
          </IconButton>
          <View style={{width: '80%'}}>
            <Dropdown
              data={dropdownData}
              currentValue={currentCategory}
              selectedValue={changeCategory}
              placeholder={BundleStrings.search}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: Dimension.Size_10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
