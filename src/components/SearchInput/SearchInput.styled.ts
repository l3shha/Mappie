import { IconSearch } from '@assets/icons';
import { border, colors, fontWeights } from '@constants/theme';
import { BaseIconStyle, BaseInput } from '@styles/BaseStyle';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  padding: 25px;

  @media (max-width: 860px) {
    padding: 15px;
  }

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const Input = styled(BaseInput)`
  width: 100%;
  padding: 19px 72px;
  font-size: 16px;
  font-weight: ${fontWeights.medium};
  color: ${colors.darkGrey};
  border: ${border.default};
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 5px ${colors.primaryBlueAlpha};
  }

  @media (max-width: 860px) {
    padding: 15px 55px;
  }

  @media (max-width: 400px) {
    padding: 10px 40px;
    font-size: 14px;
  }
`;

export const SearchIcon = styled(IconSearch)`
  ${BaseIconStyle};
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  left: 55px;
  transform: translateY(-50%);
  color: ${colors.darkGrey};
  pointer-events: none;

  @media (max-width: 860px) {
    left: 40px;
  }

  @media (max-width: 400px) {
    left: 25px;
    width: 18px;
    height: 18px;
  }
`;
