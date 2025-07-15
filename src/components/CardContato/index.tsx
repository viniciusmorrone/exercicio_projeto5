import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Icon } from '../../assets/icons'

import { remover, editar, alternarFavorito } from '../../store/reducers/contato'
import ContatoClass from '../../models/Contato'
import * as enums from '../../utils/enums/TipoDeContato'

type Props = ContatoClass

const Contato = ({ email, nome, numero, tag, id, favorito }: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)

  const [novoNome, setNovoNome] = useState(nome)
  const [novaTag, setNovaTag] = useState(tag)
  const [novoNumero, setNovoNumero] = useState(numero)
  const [novoEmail, setNovoEmail] = useState(email)

  useEffect(() => {
    setNovoNome(nome)
    setNovaTag(tag)
    setNovoNumero(numero)
    setNovoEmail(email)
  }, [nome, tag, numero, email])

  const handleToggleFavorito = () => {
    dispatch(alternarFavorito(id))
  }

  const salvarEdicao = () => {
    dispatch(
      editar({
        id,
        nome: novoNome,
        tag: novaTag,
        numero: novoNumero,
        email: novoEmail,
        favorito: favorito
      })
    )
    setEstaEditando(false)
  }

  const CardEstilo = estaEditando ? 'editando' : ''

  return (
    <S.Card className={CardEstilo}>
      <S.HeaderContato>
        {estaEditando ? (
          <input
            type="text"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
          />
        ) : (
          <S.NomeContato>{nome}</S.NomeContato>
        )}
        {!estaEditando && (
          <S.IconFavorito onClick={handleToggleFavorito}>
            <Icon
              name={favorito ? 'favoritoSolido' : 'favorito'}
              width={35}
              height={35}
            />
          </S.IconFavorito>
        )}
      </S.HeaderContato>

      {estaEditando ? (
        <select
          value={novaTag}
          onChange={(e) => setNovaTag(e.target.value as enums.TipoContato)}
        >
          <option value={enums.TipoContato.FAMILIA}>Família</option>
          <option value={enums.TipoContato.TRABALHO}>Trabalho</option>
          <option value={enums.TipoContato.AMIGOS}>Amigos</option>
        </select>
      ) : (
        <S.Tag>{tag}</S.Tag>
      )}

      {estaEditando ? (
        <input
          type="text"
          value={novoNumero}
          onChange={(e) => setNovoNumero(e.target.value)}
        />
      ) : (
        <S.NumeroContato>{numero}</S.NumeroContato>
      )}

      {estaEditando ? (
        <input
          type="email"
          value={novoEmail}
          onChange={(e) => setNovoEmail(e.target.value)}
        />
      ) : (
        <S.EmailContato>{email}</S.EmailContato>
      )}

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao onClick={salvarEdicao}>
              <Icon name="salvar" width={35} height={35} />
            </S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>
              <Icon name="cancelar" width={31} height={31} />
            </S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>
              <Icon name="editar" width={35} height={35} />
            </S.Botao>
            <S.Botao onClick={() => dispatch(remover(id))}>
              <Icon name="remover" width={35} height={35} />
            </S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
