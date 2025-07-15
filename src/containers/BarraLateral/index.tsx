// No arquivo index.tsx da BarraLateral
import { useDispatch, useSelector } from 'react-redux'
import FiltroContatos from '../../components/BotoesFiltro'
import {
  Container,
  ContainerBotao,
  DivInput,
  Input,
  ToggleButton,
  ConteudoBarra // Importe o novo componente
} from './styles'
import { Icon } from '../../assets/icons'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/TipoDeContato'
import BotaoAdicionar from '../../components/BotaoAdicionar'

// Adicionando as props para expandido e setExpandido
type BarraLateralProps = {
  expandido: boolean
  setExpandido: React.Dispatch<React.SetStateAction<boolean>>
}

const BarraLateral = ({ expandido, setExpandido }: BarraLateralProps) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const toggleBarra = () => {
    setExpandido(!expandido)
  }

  return (
    <ContainerBotao $expandido={expandido}>
      <ToggleButton
        onClick={toggleBarra}
        $expandido={expandido}
        aria-label={expandido ? 'Recolher menu' : 'Expandir menu'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          color="#fff"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </ToggleButton>

      {/* Envolva todo o conteúdo com o ConteudoBarra */}
      <ConteudoBarra $expandido={expandido}>
        <DivInput>
          <Icon name="lupaBusca" width={30} height={30} />
          <Input
            type="text"
            placeholder="Procurar Contato..."
            value={termo}
            onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
          />
        </DivInput>
        <Container>
          {/* Seus filtros e botões */}
          <Icon name="todos" width={35} height={35} />
          <FiltroContatos criterio="todos" tipoDeFiltro="Todos" />

          <Icon name="favorito" width={35} height={35} />
          <FiltroContatos tipoDeFiltro="Favoritos" criterio="favoritos" />

          <Icon name="familia" width={35} height={35} />
          <FiltroContatos
            valor={enums.TipoContato.FAMILIA}
            criterio="tipoTag"
            tipoDeFiltro="Familia"
          />

          <Icon name="amigos" width={35} height={35} />
          <FiltroContatos
            valor={enums.TipoContato.AMIGOS}
            criterio="tipoTag"
            tipoDeFiltro="Amigos"
          />

          <Icon name="trabalho" width={35} height={35} />
          <FiltroContatos
            valor={enums.TipoContato.TRABALHO}
            criterio="tipoTag"
            tipoDeFiltro="Trabalho"
          />

          <BotaoAdicionar />
        </Container>
      </ConteudoBarra>
    </ContainerBotao>
  )
}

export default BarraLateral
