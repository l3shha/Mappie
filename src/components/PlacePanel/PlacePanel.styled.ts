import type { IFavoriteButtonProps } from '@appTypes/interfaces';
import { border, borderRadius, colors, fontWeights } from '@constants/theme';
import { BaseButton, BasePanel, PanelContentWrapper } from '@styles/BaseStyle';
import styled from 'styled-components';

export const Panel = styled(BasePanel)`
  width: 490px;
  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 860px) {
    min-width: 300px;
  }
`;

export const PlaceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${borderRadius.large};
  object-fit: cover;
`;

export const PlaceTitle = styled.h2`
  font-size: 24px;
  color: ${colors.darkGrey};
  font-weight: ${fontWeights.extraBold};
  margin: 20px 0 10px;
`;

export const PlaceDescription = styled.p`
  font-size: 14px;
  color: ${colors.darkGrey};
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  svg {
    width: 15px;
    height: 20px;
  }

  @media (max-width: 980px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const FavoriteButton = styled(BaseButton).withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<IFavoriteButtonProps>`
  background-color: ${({ active }) =>
    active ? colors.accentRed : colors.lightGreyBorder};
  color: ${colors.white};
  border-radius: ${borderRadius.large};

  &:hover {
    background-color: ${({ active }) =>
      active ? colors.monoRed : colors.mediumGrey};
  }
`;

export const RouteButton = styled(BaseButton)`
  background-color: ${colors.primaryBlue};
  color: ${colors.white};
  border-radius: ${borderRadius.large};

  &:hover {
    background-color: ${colors.primaryBlueAlpha};
  }
`;

export const PlaceWrapper = styled(PanelContentWrapper)`
  width: 88%;
  border: ${border.default};
  margin: 0px 25px 5px 25px;
  padding: 20px;
  border-radius: ${borderRadius.large};

  @media (max-width: 500px) {
    width: 93%;
    margin: 5px 10px;
  }
`;

export const Placeholder = styled.div`
  width: 100%;
  min-height: 250px;
  background-color: #f0f0f0;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: ${borderRadius.large};
`;
