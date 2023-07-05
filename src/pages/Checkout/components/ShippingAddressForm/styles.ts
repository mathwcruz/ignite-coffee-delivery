import { styled } from "styled-components";

export const ShippingAddressFormContainer = styled.form`
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
      color: ${(props) => props.theme["yellow-700"]};
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

  #shipping-address-inputs-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
    column-gap: 0.75rem;

    input:nth-child(1),
    input:nth-child(3),
    input:nth-child(5) {
      width: 12.5rem;
    }

    input:nth-child(1),
    input:nth-child(2) {
      grid-column: span 3 / span 3;
    }

    input:nth-child(3) {
      grid-column: span 1 / span 1;
    }

    input:nth-child(4),
    div:nth-child(6) {
      grid-column: span 2 / span 2;
    }

    div {
      display: flex;
      gap: 0.75rem;

      input {
        width: 100% !important;
      }

      select {
        max-width: 3.75rem;
        margin-left: auto;
      }
    }
  }
`;
