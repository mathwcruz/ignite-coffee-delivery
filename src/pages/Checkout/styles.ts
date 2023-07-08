import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  h4 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.125rem;
    line-height: 130%;
    font-weight: bold;
    color: ${(props) => props.theme["gray-800"]};
  }

  @media screen and (max-width: ${(props) => props.theme.large}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const DeliveryDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;

  @media screen and (max-width: ${(props) => props.theme.small}) {
    max-width: 21.375rem;
    align-self: center;
  }

  @media screen and (min-width: ${(props) => props.theme.small}) and (max-width: ${(props) => props.theme.large}) {
    max-width: 28rem;
    align-self: center;
  }
`;

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 28rem;
`;
