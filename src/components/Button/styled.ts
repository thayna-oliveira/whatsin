import styled from 'styled-components';

import { colors } from 'src/styles';
import { Heart } from 'react-feather';

export const Button = styled.button`
  display: flex;
  background: transparent;
  color: ${colors.lightGray};
  outline: none;
  transition: all 0.2s linear 0s;
  text-shadow: none;
  border: 1px solid ${colors.lightGray};
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${colors.white};
    border: 1px solid ${colors.red};
  }

  &:active {
    color: ${colors.white};
    border: 1px solid ${colors.red};
    background: ${colors.red};
  }
`;

export const Icon = styled(Heart)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;
