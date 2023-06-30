import { styled } from "styled-components";

import { BENEFIT_ITEM_COLORS } from "../../utils/data/coffee-delivery-benefits";

export const HomeContainer = styled.div`
  margin-top: 3.375rem;

  & div:first-child {
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
`;

export const Benefits = styled.ul`
  margin-top: 4.125rem;
  list-style: none;
  display: grid;
  align-self: flex-start;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
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
`;
