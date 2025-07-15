import { useSelector } from 'react-redux'

import Contato from '../../components/CardContato'
import { ContainerDeCards } from './styles'
import { RootReducer } from '../../store'
import ContatoClass from '../../models/Contato'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = [...itens]

    if (termo && termo.trim() !== '') {
      contatosFiltrados = contatosFiltrados.filter((item) =>
        item.nome.toLowerCase().includes(termo.toLowerCase())
      )
    }

    if (criterio === 'tipoTag') {
      contatosFiltrados = contatosFiltrados.filter((item) => item.tag === valor)
    } else if (criterio === 'favoritos') {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.favorito === true
      )
    }

    return contatosFiltrados
  }

  const contatosParaRenderizar = filtraContatos()

  return (
    <ContainerDeCards>
      {contatosParaRenderizar.map((t: ContatoClass) => (
        <Contato
          key={t.id}
          id={t.id}
          nome={t.nome}
          email={t.email}
          numero={t.numero}
          tag={t.tag}
          favorito={t.favorito}
        />
      ))}
    </ContainerDeCards>
  )
}

export default ListaDeContatos
