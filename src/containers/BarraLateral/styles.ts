import styled from 'styled-components'

type ContainerProps = {
  $expandido?: boolean
}

type ToggleButtonProps = {
  $expandido?: boolean
}

export const ContainerBotao = styled.aside<ContainerProps>`
  background-color: #1e1e2f;
  padding: 1rem;
  height: 100vh;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  overflow: hidden; // Adicionado para esconder o conteúdo que ultrapassa

  @media (max-width: 768px) {
    width: 220px;
    transform: ${({ $expandido }) =>
      $expandido ? 'translateX(0)' : 'translateX(-180px)'};
  }
`

export const ToggleButton = styled.button<ToggleButtonProps>`
  position: absolute;
  right: -15px;
  top: 20px;
  background-color: #1e1e2f;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 101;
  padding: 0;

  svg {
    transition: transform 0.3s ease;
    margin-left: -10px;
    transform: ${({ $expandido }) =>
      $expandido ? 'rotate(180deg)' : 'rotate(0)'};
  }

  @media (min-width: 769px) {
    display: none;
  }
`

export const DivInput = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Input = styled.input`
  height: 30px;
  width: 80%;
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  text-align: left;
  outline: none;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  align-items: center;
`

export const MainContent = styled.div<ContainerProps>`
  margin-left: 220px;
  transition: margin-left 0.3s ease-in-out;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-left: ${({ $expandido }) => ($expandido ? '220px' : '40px')};
  }
`

export const ConteudoBarra = styled.div<ContainerProps>`
  opacity: ${({ $expandido }) => ($expandido ? '1' : '0')};
  visibility: ${({ $expandido }) => ($expandido ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  width: 100%;

  @media (min-width: 769px) {
    opacity: 1;
    visibility: visible;
  }
`
