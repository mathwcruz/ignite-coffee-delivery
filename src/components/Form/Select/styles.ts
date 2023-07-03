import { styled } from "styled-components";

export const SelectInputComponent = styled.select`
  width: 100%;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  border: 0;
  background-color: ${(props) => props.theme["gray-300"]};
  color: ${(props) => props.theme["gray-700"]};
  font-size: 0.875rem;
  line-height: 130%;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme["yellow-700"]};
  }
`;
