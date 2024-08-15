import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

type TDropdown = {
  data: Array<{
    label: string;
    value: string;
  }>;
  currentValue?: number;
  placeholder?: string;
  selectedValue?: (value: number) => void;
};

export default function Dropdown(props: TDropdown) {
  const {data, currentValue, placeholder, selectedValue} = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(currentValue ?? null);
  const [items, setItems] = useState(data);

  return (
    <DropDownPicker
      placeholder={placeholder}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={val => {
        setValue(val);
        selectedValue && selectedValue(val());
      }}
      setItems={setItems}
    />
  );
}
