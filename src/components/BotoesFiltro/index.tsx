import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/TipoDeContato'
import { RootReducer } from '../../store'

export type Props = {
  tipoDeFiltro: string
  criterio: 'tipoTag' | 'todos' | 'favoritos'
  valor?: enums.TipoContato
}

const FiltroContatos = ({ tipoDeFiltro, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  const filtro = useSelector((state: RootReducer) => state.filtro)
  const contatos = useSelector((state: RootReducer) => state.contatos)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio

    if (criterio === 'todos' || criterio === 'favoritos') {
      return mesmoCriterio
    }

    const mesmoValor = filtro.valor === valor
    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'tipoTag') {
      return contatos.itens.filter((item) => item.tag === valor).length
    }

    if (criterio === 'favoritos') {
      return contatos.itens.filter((item) => item.favorito === true).length
    }
    return 0
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor: criterio === 'tipoTag' ? valor : undefined
      })
    )
  }

  const contador = contarContatos()
  const estaAtivo = verificaEstaAtivo()

  return (
    <S.BotaoFiltro $ativo={estaAtivo} onClick={filtrar}>
      {tipoDeFiltro}
      <S.Contador>{contador}</S.Contador>
    </S.BotaoFiltro>
  )
}
export default FiltroContatos
