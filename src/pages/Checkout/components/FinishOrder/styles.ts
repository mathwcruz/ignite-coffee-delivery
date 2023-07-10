import { styled } from "styled-components";

export const FinishOrderContainer = styled.div`
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
  padding: 2.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: ${(props) => props.theme.small}) {
    padding: 1rem;
  }
`;

export const NoCoffeesAddedMessage = styled.p`
  display: block;
  margin: 0 auto;
  text-align: center;
  max-width: 17.5rem;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme["gray-700"]};
`;

export const CoffeesListContainer = styled.ul`
  list-style: none;
  max-width: 23rem;
  max-height: 21.25rem;
  padding-right: 0.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: ${(props) => props.theme.large}) {
    overflow-y: hidden;
    max-height: initial;
  }
`;

export const CoffeeItem = styled.li`
  padding: 0.5rem 0.25rem 1.5rem 0.25rem;
  border-bottom: 1px solid ${(props) => props.theme["gray-400"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.125rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    & > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      span {
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme["gray-800"]};
      }

      section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        & > div {
          width: 4.5rem;
          height: 2.125rem;
        }
      }
    }
  }

  strong {
    align-self: flex-start;
    font-size: 1rem;
    line-height: 130%;
    font-weight: 700;
    color: ${(props) => props.theme["gray-700"]};
  }

  @media screen and (max-width: ${(props) => props.theme.small}) {
    padding: 0.25rem 0.125rem 0.75rem 0.125rem;
    gap: 1rem;

    & > div {
      & > div {
        span {
          font-size: 0.875rem;
        }

        section {
          & > div {
            height: 1.75rem;
          }
        }
      }
    }

    strong {
      font-size: 0.875rem;
    }
  }
`;

export const RemoveCoffeeFromOrderButton = styled.button`
  width: 5.625rem;
  height: 2.125rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  cursor: pointer;
  border: 0;
  background-color: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["gray-700"]};
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 160%;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple-400"]};
  }

  &:hover {
    opacity: 0.9;
  }

  svg {
    color: ${(props) => props.theme["purple-400"]};
  }

  @media screen and (max-width: ${(props) => props.theme.small}) {
    height: 1.75rem;
    font-size: 0.625rem;
  }
`;

export const TotalOrderAmountContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    line-height: 130%;
    color: ${(props) => props.theme["gray-700"]};

    span:nth-child(1) {
      font-size: 0.875rem;
    }

    span:nth-child(2) {
      font-size: 1rem;
    }

    strong {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme["gray-800"]};
    }
  }

  @media screen and (max-width: ${(props) => props.theme.small}) {
    & > section {
      span:nth-child(1) {
        font-size: 0.75rem;
      }

      span:nth-child(2) {
        font-size: 0.875rem;
      }

      strong {
        font-size: 1rem;
      }
    }
  }
`;

export const FinishOrderButton = styled.button`
  width: 100%;
  max-width: 23rem;
  padding: 0.75rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  background-color: ${(props) => props.theme["yellow-400"]};
  color: ${(props) => props.theme.white};
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 160%;
  font-weight: 700;

  &:focus:not(:disabled) {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["gray-200"]};
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  @media screen and (max-width: ${(props) => props.theme.small}) {
    max-width: 19rem;
    font-size: 0.75rem;
  }
`;
