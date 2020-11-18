import styled, { keyframes } from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1
    transform: translateY(0);
  }
`;

export const MostPopularContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1140px;
  padding: 11rem 0 ${theme.spacings.small} 0;

  animation: ${appearFromBottom} 1.5s;
`;