import React, {FC} from 'react';
import styled from 'styled-components/native';

interface Props {
  title: string;
  children: React.ReactNode;
}

const StyledHeader = styled.View`
  max-height: 70px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  padding-left: 20px;
  border-bottom-width: 0px;
  elevation: 2;
  margin-top: -2px;
  margin-left: -2px;
  margin-right: -2px;
`;

export const StyledTitle = styled.Text`
  font-size: 20px;
  color: '#000000';
`;

export const StyledHeaderRightSection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Header: FC<Props> = props => {
  return (
    <StyledHeader>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledHeaderRightSection>{props.children}</StyledHeaderRightSection>
    </StyledHeader>
  );
};

export default Header;
