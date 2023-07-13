import { styled } from "styled-components";

import { BENEFIT_ITEM_COLORS } from "../../interfaces/coffee-benefits";

export const HomeContainer = styled.div`
  margin-top: 5.875rem;
  margin-bottom: 2rem;

  & > div {
    display: flex;
    gap: 3.5rem;

    section {
      max-width: 36.75rem;
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h1 {
          font-family: "Baloo 2", sans-serif;
          font-size: 3rem;
          line-height: 130%;
          color: ${(props) => props.theme["gray-900"]};
          font-weight: 800;
        }

        p {
          font-size: 1.25rem;
          line-height: 130%;
          color: ${(props) => props.theme["gray-800"]};
        }
      }
    }
  }

  @media screen and (max-width: ${(props) => props.theme.small}) {
    margin-top: 0;

    & > div {
      gap: 1.75rem;

      section {
        div {
          h1 {
            font-size: 1.375rem;
          }

          p {
            font-size: 0.875rem;
          }
        }
      }

      img {
        max-width: 15rem;
        align-self: center;
      }
    }
  }

  @media screen and (min-width: ${props => props.theme.small}) and (max-width: ${props => props.theme.large}) {
    & > div {
      img {
        max-width: 25rem;
      }
    }
  }

  @media screen and (max-width: ${props => props.theme.large}) {
    & > div {
      flex-direction: column;
    }
  }
`;

export const Benefits = styled.ul`
  margin-top: 4.125rem;
  list-style: none;
  display: grid;
  align-self: flex-start;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;

  @media screen and (max-width: ${(props) => props.theme.small}) {
    margin-top: 1.75rem;
    row-gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface BenefitItemProps {
  color: keyof typeof BENEFIT_ITEM_COLORS;
}

export const BenefitItem = styled.li<BenefitItemProps>`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  color: ${(props) => props.theme["gray-700"]};
  font-size: 0.95rem;
  line-height: 130%;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["gray-100"]};
    background-color: ${(props) =>
      props.theme[BENEFIT_ITEM_COLORS[props.color]]};
    padding: 0.5rem;
    border-radius: 50%;
  }

  @media screen and (max-width: ${(props) => props.theme.small}) {
    gap: 0.5rem;
    font-size: 0.75rem;

    span {
      padding: 0.375rem;

      svg {
        width: 0.875rem;
        height: 0.875rem;
      }
    }
  }
`;
