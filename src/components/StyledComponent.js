import styled, { keyframes } from 'styled-components';

export const CardBack = styled.div`
  transform: ${props => (props.$isFlipped || props.$isMatch) ?
  'rotateY(-180deg)' : 'rotateY(0deg)'};
`

export const CardFront = styled.div`
  transform: ${props => (props.$isFlipped || props.$isMatch) ?
    'rotateY(0deg)' : 'rotateY(-180deg)'};
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const Hidden = styled.div`
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => (props.$isHidden ? 1 : 0)};
  &.fadeIn {
    animation: ${props => (props.$isHidden ? fadeIn : fadeOut)} 0.5s ease-in-out;
  }
  &.fadeOut {
    animation: ${props => (props.$isHidden ? fadeOut : fadeIn)} 0.5s ease-in-out;
  }
`
