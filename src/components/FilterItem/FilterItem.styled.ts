import { colors, fontWeights } from '@constants/theme';
import { BaseIconStyle, flexGap } from '@styles/BaseStyle';
import styled from 'styled-components';

export const Wrapper = styled.div<{ selected: boolean }>`
  ${flexGap('15px')};
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  color: ${({ selected }) => (selected ? colors.darkGrey : colors.black)};
  font-weight: ${fontWeights.medium};
  font-size: 16px;

  svg {
    ${BaseIconStyle};
  }

  @media (max-width: 400px) {
    gap: 10px;
    margin-bottom: 15px;
    font-size: 14px;
  }
`;
