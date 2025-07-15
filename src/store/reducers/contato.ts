import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/TipoDeContato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Bianca',
      tag: enums.TipoContato.FAMILIA,
      numero: '(19) 9 9999-9999',
      email: 'teste1@teste.com',
      id: 4
    },
    {
      nome: 'Mae',
      tag: enums.TipoContato.FAMILIA,
      numero: '(19) 9 9999-8888',
      email: 'teste2@teste.com',
      id: 5
    },
    {
      nome: 'Rafael',
      tag: enums.TipoContato.TRABALHO,
      numero: '(19) 9 9999-7777',
      email: 'teste3@teste.com',
      id: 6
    },
    {
      nome: 'Sergio',
      tag: enums.TipoContato.TRABALHO,
      numero: '(19) 9 9999-6666',
      email: 'teste4@teste.com',
      id: 7
    },
    {
      nome: 'Gui',
      tag: enums.TipoContato.AMIGOS,
      numero: '(19) 9 9999-5555',
      email: 'teste5@teste.com',
      id: 8
    },
    {
      nome: 'Chris',
      tag: enums.TipoContato.AMIGOS,
      numero: '(19) 9 9999-4444',
      email: 'teste6@teste.com',
      id: 9
    },
    {
      nome: 'Pastor',
      tag: enums.TipoContato.AMIGOS,
      numero: '(19) 9 9999-3333',
      email: 'teste7@teste.com',
      id: 1
    },
    {
      nome: 'Primo',
      tag: enums.TipoContato.FAMILIA,
      numero: '(19) 9 9999-2222',
      email: 'teste8@teste.com',
      id: 2
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload.id)
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      // Garantir que o ID seja único
      const novoContato = action.payload
      // Verificar se o ID já existe (improvável com timestamp, mas por segurança)
      const idExistente = state.itens.some(
        (contato) => contato.id === novoContato.id
      )
      if (idExistente) {
        // Se por algum motivo o ID já existir, gerar um novo
        novoContato.id = new Date().getTime() + Math.floor(Math.random() * 1000)
      }
      state.itens.push(novoContato)
    },
    alternarFavorito: (state, action: PayloadAction<number>) => {
      // Converter para número para garantir comparação correta
      const idParaAlterar = Number(action.payload)

      // Encontrar o contato específico pelo ID
      const index = state.itens.findIndex(
        (contato) => Number(contato.id) === idParaAlterar
      )

      // Se encontrou o contato, alternar o favorito apenas para ele
      if (index >= 0) {
        // Criar uma cópia do estado atual para evitar mutações indesejadas
        const contatoAtualizado = { ...state.itens[index] }
        // Alternar o valor de favorito
        contatoAtualizado.favorito = !contatoAtualizado.favorito
        // Atualizar o contato no array
        state.itens[index] = contatoAtualizado
      }
    }
  }
})

export const { remover, editar, cadastrar, alternarFavorito } =
  contatosSlice.actions
export default contatosSlice.reducer
