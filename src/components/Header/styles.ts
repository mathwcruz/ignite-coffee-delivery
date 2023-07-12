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
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme["purple-700"]};
      }
    }

    a {
      position: relative;
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
        box-shadow: 0 0 0 2px ${(props) => props.theme["yellow-400"]};
      }

      &:hover {
        opacity: 0.9;
      }
    }
  }

  @media screen and (max-width: ${props => props.theme.small}) {
    & > a {
      img {
        width: 4rem;
      }
    }

    div {
      div {
        padding: 0.3rem;
        gap: 0.5rem;

        span {
          font-size: 0.75rem;
          line-height: 100%;
        }
      }

      a {
        padding: 0.375rem;
      }
    }
  }
`;

export const TotalCoffeesInTheCartBadge = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50% !important;
  padding: 0.25rem;
  background-color: ${props => props.theme["yellow-700"]} !important;

  strong {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => props.theme.white};
  }
`;