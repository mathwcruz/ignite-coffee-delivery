import { styled } from "styled-components";

export const FinishOrderContainer = styled.div`
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const CoffeesListContainer = styled.ul`
  list-style: none;
  max-width: 23rem;
`;

export const CoffeeItem = styled.li``;

export const TotalOrderAmountContainer = styled.div``;

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

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["gray-200"]};
  }

  &:hover {
    opacity: 0.9;
  }
`;
