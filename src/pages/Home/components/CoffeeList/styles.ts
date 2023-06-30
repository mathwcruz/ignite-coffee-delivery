import { styled } from "styled-components";

export const CoffeeListContainer = styled.div`
  margin-top: 7.75rem;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h3 {
    font-family: "Baloo 2", sans-serif;
    line-height: 130%;
    font-size: 2rem;
    color: ${(props) => props.theme["gray-800"]};
    font-weight: 800;
    text-align: left;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    row-gap: 2.5rem;
    column-gap: 2rem;
  }
`;

export const CoffeeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 15rem;
  height: 18.125rem;
  padding: 0rem 1.5rem 1.25rem 1.5rem;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  background-color: ${(props) => props.theme["gray-200"]};

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }

  ul {
    list-style-type: none;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    flex-wrap: wrap;

    li {
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      background-color: ${(props) => props.theme["yellow-100"]};
      border-radius: 6.25rem;
      color: ${(props) => props.theme["yellow-700"]};
      font-size: 0.625rem;
      line-height: 130%;
      font-weight: 700;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    strong {
      font-family: "Baloo 2", sans-serif;
      line-height: 130%;
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme["gray-800"]};
    }

    span {
      line-height: 130%;
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-600"]};
    }
  }

  footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
    width: 100%;

    span {
      display: block;
      line-height: 130%;
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme["gray-700"]};

      strong {
        margin-left: 0.25rem;
        font-family: "Baloo 2", sans-serif;
        line-height: 130%;
        font-size: 1.5rem;
        font-weight: 700;
        color: ${(props) => props.theme["gray-700"]};
      }
    }

    section {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 0.5rem;
      margin-bottom: 0;
    }
  }
`;

export const IncreaseDecreaseButtons = styled.div`
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

export const AddToCartButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  background-color: ${(props) => props.theme["purple-700"]};
  color: ${(props) => props.theme["gray-100"]};
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple-400"]};
  }

  &:hover {
    opacity: 0.9;
  }
`;
