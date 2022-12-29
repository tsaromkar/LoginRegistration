import React, {FC} from 'react';
import {Text, Pressable} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  text: string;
  link: string;
  navigateTo: () => void;
}

export const StyledView = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const StyledLink = styled.Text`
  color: blueviolet;
`;

const Link: FC<Props> = props => {
  const {text, link, navigateTo} = props;

  return (
    <StyledView>
      <Text>{text} </Text>
      <Pressable onPress={navigateTo}>
        <StyledLink>{link}</StyledLink>
      </Pressable>
    </StyledView>
  );
};

export default Link;
