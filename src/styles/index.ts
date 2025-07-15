import styled, { createGlobalStyle } from 'styled-components'

type ContainerProps = {
  $expandido?: boolean
}

export const Container = styled.div`
  display: flex;
`

export const MainContent = styled.div<ContainerProps>`
  flex: 1;
  margin-left: ${({ $expandido }) => ($expandido ? '220px' : '40px')};
  transition: margin-left 0.3s ease-in-out;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: ${({ $expandido }) => ($expandido ? '220px' : '40px')};
  }
`

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`

export default EstiloGlobal
