import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SpinnerProps {
  color: string;
}

export const Spinner = styled.div<SpinnerProps>`
  border-width: 0.2rem;
  border-style: solid;
  border-color: ${props => props.theme[props.color]};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background: ${props => props.theme[props.color]};
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
