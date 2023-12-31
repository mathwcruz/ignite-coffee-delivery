import { styled } from "styled-components";

export const OrderConfirmedContainer = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  align-items: flex-start;
  gap: 6.375rem;

  & > section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2.5rem;

    & > div {
      display: flex;
      flex-direction: column;

      h5 {
        font-family: "Baloo 2", sans-serif;
        font-size: 2rem;
        font-weight: 800;
        line-height: 130%;
        color: ${(props) => props.theme["yellow-700"]};
      }

      span {
        display: block;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme["gray-800"]};
        margin-top: 0.25rem;
      }
    }

    & > section {
      border: 1px solid transparent;
      background: linear-gradient(
            ${(props) => props.theme.white},
            ${(props) => props.theme.white}
          )
          padding-box,
        linear-gradient(
            to right,
            ${(props) => props.theme["yellow-400"]},
            ${(props) => props.theme["purple-400"]}
          )
          border-box;
      border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
      padding: 2.5rem 8.25rem 2.5rem 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }
  }

  img {
    align-self: flex-end;
  }

  @media screen and (max-width: ${(props) => props.theme.medium}) {
    flex-direction: column;
    gap: 2rem;

    & > section {
      align-self: center;

      & > div {
        flex-wrap: wrap;

        h5 {
          font-size: 1.5rem;
        }

        span {
          font-size: 0.875rem;
        }
      }

      & > section {
        padding: 1.25rem 4.125rem 1.25rem 1.25rem;
      }
    }

    img {
      align-self: center;
      width: 25rem;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.small}) {
    img {
      width: 20rem;
    }
  }
`;

export const InstructionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > section {
    width: 15rem;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    span {
      display: block;
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme["gray-700"]};
    }

    strong {
      font-weight: 700;
      text-transform: capitalize;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.medium}) {
    & > section {
      width: 12.5rem;
    }
  }
`;

const INSTRUCTION_ITEM_COLORS = {
  purple: "purple-400",
  yellow: "yellow-400",
  yellowDark: "yellow-700",
} as const;

interface InstructionItemIconProps {
  color: keyof typeof INSTRUCTION_ITEM_COLORS;
}

export const InstructionItemIcon = styled.div<InstructionItemIconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.theme[INSTRUCTION_ITEM_COLORS[props.color]]};

  svg {
    color: ${(props) => props.theme["gray-100"]};
  }
`;
