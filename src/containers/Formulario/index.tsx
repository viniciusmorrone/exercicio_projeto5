import { useDispatch } from 'react-redux'
import { FormEvent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import InputMask from 'react-input-mask'
import {
  FormularioCadastro,
  FormularioContainer,
  GrupoRadio,
  BotaoVoltar,
  BotoesContainer,
  PopupContainer
} from './styles'
import * as enums from '../../utils/enums/TipoDeContato'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nomeContato, setNomeContato] = useState('')
  const [emailContato, setEmailContato] = useState('')
  const [numeroContato, setNumeroContato] = useState('')
  const [tipoTag, setTipoTag] = useState(enums.TipoContato.AMIGOS)
  const [mostrarPopup, setMostrarPopup] = useState(false)

  // Efeito para esconder o popup após 2 segundos
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (mostrarPopup) {
      timer = setTimeout(() => {
        setMostrarPopup(false)
        navigate('/')
      }, 2000)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [mostrarPopup, navigate])

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(
      nomeContato,
      tipoTag,
      numeroContato,
      emailContato,
      false
    )
    dispatch(cadastrar(contatoParaAdicionar))
    setMostrarPopup(true)
    // A navegação agora acontece após o popup ser exibido por alguns segundos
  }

  const voltarParaHome = () => {
    navigate('/')
  }

  return (
    <FormularioContainer>
      {mostrarPopup && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PopupContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Contato adicionado com sucesso!
          </PopupContainer>
        </motion.div>
      )}

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Novo contato
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <FormularioCadastro onSubmit={cadastrarContato}>
          <input
            value={nomeContato}
            onChange={({ target }) => setNomeContato(target.value)}
            type="text"
            placeholder="Nome do Contato"
          />
          <input
            value={emailContato}
            onChange={({ target }) => setEmailContato(target.value)}
            type="email"
            placeholder="Email do Contato"
          />
          {/* Substituindo o input normal por InputMask */}
          <InputMask
            mask="(99) 9 9999-9999"
            value={numeroContato}
            onChange={({ target }) => setNumeroContato(target.value)}
            placeholder="Telefone do Contato"
            className="input-telefone" // Para aplicar os mesmos estilos dos outros inputs
          />

          <GrupoRadio>
            {Object.values(enums.TipoContato).map((tipoTag) => (
              <div key={tipoTag}>
                <input
                  value={tipoTag}
                  name="tipoTag"
                  type="radio"
                  onChange={({ target }) =>
                    setTipoTag(target.value as enums.TipoContato)
                  }
                  id={tipoTag}
                  defaultChecked={tipoTag === enums.TipoContato.AMIGOS}
                />
                <label htmlFor={tipoTag}>{tipoTag}</label>
              </div>
            ))}
          </GrupoRadio>

          <BotoesContainer>
            <button type="submit">Cadastrar</button>
            <BotaoVoltar type="button" onClick={voltarParaHome}>
              Voltar
            </BotaoVoltar>
          </BotoesContainer>
        </FormularioCadastro>
      </motion.div>
    </FormularioContainer>
  )
}

export default Formulario
