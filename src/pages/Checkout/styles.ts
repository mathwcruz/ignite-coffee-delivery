import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
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
`;

export const DeliveryDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 40rem;
`;

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 28rem;
`;
