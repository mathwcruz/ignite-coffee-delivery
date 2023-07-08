import styled from "styled-components"

export const LayoutContainer = styled.div`
  width: 100vw;
  max-width: 70rem;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  background: ${props => props.theme["gray-100"]};
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${props => props.theme.small}) {
    padding: 0 1rem;
  }
`