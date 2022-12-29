import React, {FC} from 'react';
import {ViewStyle} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  label: string;
  onPress: () => void;
  buttonStyles?: ViewStyle;
}

const StyledButton = styled.Pressable``;

const StyledLabel = styled.Text`
  background-color: black;
  color: white;
  border-radius: 4px;
  padding-horizontal: 20px;
  padding-vertical: 10px;
`;

const Button: FC<Props> = props => {
  return (
    <StyledButton onPress={props.onPress} style={props.buttonStyles}>
      <StyledLabel>{props.label}</StyledLabel>
    </StyledButton>
  );
};

export default Button;
