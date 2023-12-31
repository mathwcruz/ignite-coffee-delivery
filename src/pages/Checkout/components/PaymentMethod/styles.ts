import { styled } from "styled-components";

export const PaymentMethodContainer = styled.section`
  background-color: ${(props) => props.theme["gray-200"]};
  padding: 2.5rem;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme["purple-400"]};
    }

    div {
      h6 {
        font-size: 1rem;
        line-height: 130%;
        font-weight: 400;
        color: ${(props) => props.theme["gray-800"]};
        margin-bottom: 0.25rem;
      }

      span {
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme["gray-700"]};
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    gap: 0.75rem;
  }

  @media screen and (max-width: ${(props) => props.theme.large}) {
    padding: 1rem;

    ul {
      gap: 0.25rem;
    }
  }
`;

export const PaymentMethodItem = styled.li`
  width: 8.5rem;
  height: 3.125rem;
  background-color: ${(props) => props.theme["gray-400"]};
  border-radius: 0.375rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease-linear;

  &:hover:not(.selected) {
    background-color: ${(props) => props.theme["gray-500"]};
  }

  &.selected {
    border: 1px solid ${(props) => props.theme["purple-400"]};
    background-color: ${(props) => props.theme["purple-100"]};
  }

  svg {
    color: ${(props) => props.theme["purple-400"]};
  }

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 160%;
    color: ${(props) => props.theme["gray-700"]};
  }

  @media screen and (max-width: ${(props) => props.theme.small}) {
    width: 8rem;
    height: 2.75rem;
    padding: 0.5rem;
    gap: 0.375rem;
    justify-content: center;

    span {
      font-size: 0.563rem;
    }
  }
`;
