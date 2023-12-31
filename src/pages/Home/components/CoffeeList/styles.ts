import { styled } from "styled-components";

export const CoffeeListContainer = styled.div`
  margin-top: 7.75rem;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  section {
    max-width: initial !important;
    flex-direction: row !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    h3 {
      font-family: "Baloo 2", sans-serif;
      line-height: 130%;
      font-size: 2rem;
      color: ${(props) => props.theme["gray-800"]};
      font-weight: 800;
      text-align: left;
    }

    div {
      display: flex;
      flex-direction: row !important;
      gap: 1rem !important;

      select {
        width: 10rem;
        height: 2.125rem;

        option {
          padding: 0 0.5rem;
          border: 0;
          background-color: ${(props) => props.theme["gray-300"]};
          color: ${(props) => props.theme["gray-700"]};
          font-size: 0.875rem;
          line-height: 130%;
        }
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    row-gap: 2.5rem;
    column-gap: 2rem;
  }

  @media screen and (max-width: ${props => props.theme.small}) {
    margin-top: 1.75rem;
    gap: 3.5rem !important;
    align-items: center;

    & > section {
      flex-direction: column !important;

      h3 {
        font-size: 1.25rem;
      }

      & > div {
        flex-direction: column !important;
        gap: 1rem !important;
      }
    }

    & > ul {
      row-gap: 3.5rem;
      align-items: center;
      justify-content: center;
    }
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

  & > section {
    display: flex;
    flex-direction: column !important;
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

  @media screen and (max-width: ${props => props.theme.small}) {
    height: 16.5rem;
    padding: 0rem 1.25rem 1rem 1.25rem;

    & > section {
      strong {
        font-size: 1rem;
      }

      span {
        font-size: 0.75rem;
      }
    }

    footer {
      & > span {
        font-size: 0.75rem;

        strong {
          font-size: 1.25rem;
        }
      }

      section {
        flex-direction: row !important;
      }
    }
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
