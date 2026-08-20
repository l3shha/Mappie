import { border, borderRadius, fontWeights } from '@constants/theme';
import { BaseInput, BasePanel, flexColumn, flexGap } from '@styles/BaseStyle';
import styled from 'styled-components';

export const Panel = styled(BasePanel)`
  width: 400px;
  height: 100vh;

  @media (max-width: 1200px) {
    width: 35%;
  }

  @media (max-width: 860px) {
    width: 300px;
  }
`;

export const TopSection = styled.div`
  ${flexColumn};
  flex: 1;
  overflow-y: auto;
`;

export const FilterBlock = styled.div`
  width: 88%;
  max-height: 49%;
  border-radius: ${borderRadius.large};
  border: ${border.default};
  padding: 20px 60px 20px 20px;
  overflow-y: auto;
  margin-left: 25px;
  margin-bottom: 45px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #00000080;
    border-radius: 4px;
  }

  scrollbar-width: thin;
  scrollbar-color: #00000080 transparent;

  @media (max-width: 860px) {
    padding: 10px 40px 10px 10px;
    margin-left: 15px;
    margin-bottom: 25px;
  }

  @media (max-width: 420px) {
    width: 85%;
    padding: 8px 25px 8px 8px;
    margin-left: 10px;
    margin-bottom: 20px;
  }
`;

export const DistanceBlock = styled.div`
  ${flexGap('20px')};
  align-items: center;
  padding: 15px 25px;

  @media (max-width: 860px) {
    gap: 12px;
    padding: 8px 15px;
  }

  @media (max-width: 420px) {
    gap: 8px;
    padding: 5px 10px;
  }
`;

export const RadiusInput = styled(BaseInput)`
  width: 100px;
  height: 50px;
  border-radius: ${borderRadius.large};
  border: ${border.default};
  padding-left: 30px;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }

  @media (max-width: 860px) {
    width: 80px;
    height: 45px;
    padding-left: 15px;
  }

  @media (max-width: 420px) {
    width: 65px;
    height: 40px;
    padding-left: 10px;
  }
`;

export const RadiusInputText = styled.div`
  font-weight: ${fontWeights.extraBold};
  font-size: 16px;

  @media (max-width: 420px) {
    font-size: 14px;
  }
`;
