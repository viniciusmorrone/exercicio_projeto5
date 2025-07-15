import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NovoContato = styled(Link)`
  position: absolute;
  bottom: 20px; /* distância do rodapé */
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 15px;
  width: 80%;
  text-align: center;
  text-decoration: none;
  background-color: #ffffff;
  color: #1a1a2e;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: rgb(194, 234, 241);
    color: rgb(17, 17, 32);
    border-color: #bbb;
  }
`
