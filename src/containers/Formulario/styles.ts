import styled from 'styled-components'

export const FormularioContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1d1c2f;

  h1 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 10px;
  }
`

export const FormularioCadastro = styled.form`
  display: flex;
  width: 350px;
  flex-direction: column;
  gap: 15px;
  background-color: #f7f7f7;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  input[type='text'],
  input[type='email'],
  input[type='tel'],
  .input-telefone {
    width: 100%;
    padding: 10px;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #6c63ff;
      box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
    }
  }

  button {
    margin: 10px auto 0;
    width: 60%;
    border-radius: 20px;
    background-color: #6c63ff;
    border: none;
    color: #fff;
    height: 40px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #574fe6;
    }
  }
`

export const BotaoVoltar = styled.button`
  margin: 10px auto 0;
  width: 60%;
  border-radius: 20px;
  background-color: #8c8c8c;
  border: none;
  color: #fff;
  height: 40px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6e6e6e;
  }
`

export const BotoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-top: 10px;
`

export const GrupoRadio = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;

  label {
    margin-left: 5px;
    margin-right: 5px;
    color: #333;
    font-size: 1rem;
    cursor: pointer;
  }

  input[type='radio'] {
    accent-color: #6c63ff;
    cursor: pointer;
  }
`

export const PopupContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4caf50;
  color: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 1.5rem;
  }
`
