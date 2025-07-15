import * as enums from '../utils/enums/TipoDeContato'

class Contato {
  nome: string
  tag: enums.TipoContato
  numero: string
  email: string
  id: number
  favorito?: boolean

  constructor(
    nome: string,
    tag: enums.TipoContato,
    numero: string,
    email: string,
    favorito?: boolean
  ) {
    this.nome = nome
    this.tag = tag
    this.numero = numero
    this.email = email
    this.id = new Date().getTime()
    this.favorito = favorito
  }
}

export default Contato
