import styled from "styled-components"

export const LayoutContainer = styled.div`
  max-width: 70rem;
  height: 100vh;
  margin: 0 auto;
  padding: 2.5rem;
  background: ${props => props.theme["gray-100"]};
  display: flex;
  flex-direction: column;
`