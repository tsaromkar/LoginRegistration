import React, {FC} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

interface StyledProps {
  width: number;
}

const {width} = Dimensions.get('screen');

const StyledTextInput = styled.TextInput<StyledProps>`
  border-bottom-width: 0.5px;
  width: 100%;
  margin-vertical: 10px;
`;

const Input: FC<Props> = props => {
  return (
    <StyledTextInput
      width={width}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default Input;
