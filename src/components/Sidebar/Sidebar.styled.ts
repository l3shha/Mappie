import { colors } from '@constants/theme';
import { flexColumn } from '@styles/BaseStyle';
import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 110px;
  height: 100vh;

  ${flexColumn};
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.white};
  flex-shrink: 0;

  @media (max-width: 500px) {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;

    width: 100%;
    height: 64px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-top: 1px solid #00000010;
  }
`;

export const TopSection = styled.div`
  ${flexColumn};
  align-items: center;
  margin-top: 30px;

  @media (max-width: 500px) {
    flex-direction: row;
    align-items: center;
    gap: 24px;

    margin: 0;
  }
`;

export const Logo = styled.img`
  width: 32px;
  height: 30px;
  margin-bottom: 40px;

  @media (max-width: 500px) {
    display: none;
  }
`;
