import styled from 'styled-components'

type Props = {
  $ativo: boolean
}

export const BotaoFiltro = styled.button<Props>`
  background-color: ${(props) => (props.$ativo ? '#2b2b40' : 'transparent')};
  border: none;
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-align: left;
  font-size: 1rem;
  display: flex;
  align-items: center;
  margin: 5px;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2b2b40;
  }
`

export const Contador = styled.span`
  background-color: #3b3b5c;
  color: #ffffff;
  padding: 0.2rem 0.6rem;
  border-radius: 8px;
  font-size: 0.875rem;
  margin-left: 5px;
`
