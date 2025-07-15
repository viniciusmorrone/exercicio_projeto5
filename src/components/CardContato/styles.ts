import styled from 'styled-components'

export const Card = styled.div<{ className?: string }>`
  position: relative;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 12px;
  width: 100%;
  max-width: 400px;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  &.editando {
    background-color: rgb(255, 255, 255);
    border-color: rgb(255, 0, 0);
  }

  &.editando input {
    height: 25px;
    background-color: transparent;
    border-radius: 8px;
    padding-left: 12px;
    border: 1px solid #ccc;
    outline: none;

    &:focus {
      border-color: #66aaff; // azul suave na borda
      box-shadow: 0 0 4px #66aaff80; // leve glow azul (com transparência)
    }
  }

  &.editando select {
    height: 25px;
    background-color: transparent;
    border-radius: 8px;
    padding-left: 12px;
    border: 1px solid #ccc;
    outline: none;

    &:focus {
      border-color: #66aaff; // azul suave na borda
      box-shadow: 0 0 4px #66aaff80; // leve glow azul com transparência
    }
  }
  @media (max-width: 768px) {
    max-width: 300px;
  }
`

export const HeaderContato = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

export const NomeContato = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`

export const IconFavorito = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  svg {
    color: #f1c40f;
    transition: 0.2s;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`

export const NumeroContato = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #555;
  margin: 0;
`

export const EmailContato = styled.h3`
  font-size: 0.95rem;
  font-weight: 400;
  color: #666;
  margin: 0;
`

export const Tag = styled.span`
  background-color: #e0e0e0;
  color: #333;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.75rem;
  width: fit-content;
  margin-top: 4px;
`

export const BarraAcoes = styled.div`
  display: flex;
  gap: 8px;
`

export const Botao = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #333;
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #e53935;
  }

  &:nth-child(1):hover {
    color: #1976d2;
  }
`
