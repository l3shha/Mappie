import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 500px) {
    padding-bottom: 64px;
  }
`;

export const MapWrapper = styled.div`
  flex: 1;
  min-width: 0;
  position: relative;
  overflow: hidden;
`;
