import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      background-color: ${(props) => props.theme["purple-100"]};
      color: ${(props) => props.theme["purple-400"]};
      padding: 0.5rem;
      border-radius: 6px;

      span {
        color: ${(props) => props.theme["purple-700"]};
        line-height: 130%;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      background-color: ${(props) => props.theme["yellow-100"]};
      color: ${(props) => props.theme["yellow-700"]};
      padding: 0.5rem;
      border-radius: 6px;
      cursor: pointer;
      border: 0;
      transition: all 0.2s ease-in-out;

      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme["yellow-400"]};
      }

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
