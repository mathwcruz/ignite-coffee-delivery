import { styled } from "styled-components";

export const IncreaseDecreaseButtonsContainer = styled.div`
  height: 2.125rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem !important;
  background-color: ${(props) => props.theme["gray-400"]};
  padding: 0rem 0.5rem;

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["purple-400"]};
    transition: all 0.2s ease-in-out;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }

    &:focus:not(:disabled) {
      outline: 0;
      box-shadow: 0 0 0 1px ${(props) => props.theme["purple-700"]};
    }

    &:hover:not(:disabled) {
      color: ${(props) => props.theme["purple-700"]};
    }
  }

  span {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme["gray-900"]} !important;
  }
`;