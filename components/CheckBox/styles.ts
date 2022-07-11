import styled from 'styled-components';
import colors from '../../utils/colors';

interface CheckBoxWrapperProps {
  bgColor: string;
}

export const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
`;

export const CheckBox = styled.div`
  display: grid;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  font-size: 15px;
  text-align: center;
  align-items: center;
  background-color: transparent;
  transition: 0.4s;
  border: 1px solid ${colors.inputGrey};
  border-radius: 4px;

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    transition: 0.4s;
  }
`;

export const CheckBoxWrapper = styled.label<CheckBoxWrapperProps>`
  position: relative;
  display: inline-block;
  margin-bottom: 3px;
  vertical-align: middle;
  ${CheckBoxInput}:checked + ${CheckBox} {
    border: 1px solid ${colors.inputGrey};
  }
  z-index: 9;
`;

export const Icon = styled.img`
  width: 20pxp;
  height: 20px;
`;
