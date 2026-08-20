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

  @media (max-width: 860px) {
    width: 80px;
  }

  @media (max-width: 420px) {
    width: 70px;
  }
`;

export const TopSection = styled.div`
  ${flexColumn};
  align-items: center;
  margin-top: 30px;
`;

export const Logo = styled.img`
  width: 32px;
  height: 30px;
  margin-bottom: 40px;

  @media (max-width: 420px) {
    width: 20px;
    height: 20px;
  }
`;
