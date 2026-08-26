import { borderRadius, colors, shadows } from '@constants/theme';
import { BaseButton } from '@styles/BaseStyle';
import styled from 'styled-components';

export const StyledCenterButton = styled(BaseButton)`
  position: absolute;
  bottom: 100px;
  right: 15px;
  z-index: 1000;
  width: 32px;
  height: 32px;
  padding: 0;
  background-color: ${colors.white};
  border: none;
  border-radius: ${borderRadius.medium};
  box-shadow: ${shadows.default};

  &:hover {
    background-color: ${colors.lightGreyBorder};
  }

  &:active {
    transform: scale(0.94);
  }

  img {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 420px) {
    bottom: 85px;
    right: 10px;
    width: 28px;
    height: 28px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;
