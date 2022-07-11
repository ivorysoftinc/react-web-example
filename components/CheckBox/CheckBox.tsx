import React from 'react';
import { BlogImages } from '../../utils/constants';
import { CheckBoxInput, CheckBoxWrapper, CheckBox, Icon } from './styles';

interface CheckBoxCustomProps {
  id: string;
  checked: boolean;
  iconName?: string;
  bgColor: string;
  OnChange: (e: React.ChangeEvent<any>) => void;
}

export const CheckBoxCustom = ({ id, checked, bgColor, OnChange }: CheckBoxCustomProps) => {
  return (
    <CheckBoxWrapper bgColor={bgColor}>
      <CheckBoxInput id={id} onChange={OnChange} checked={checked} />
      <CheckBox>{checked && <Icon src={BlogImages.CHECKED_CHECKBOX} alt="check" />}</CheckBox>
    </CheckBoxWrapper>
  );
};
