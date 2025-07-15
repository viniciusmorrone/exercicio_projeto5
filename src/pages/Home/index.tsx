import { useState } from 'react'
import { motion } from 'framer-motion'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeContatos from '../../containers/ListaDeContatos'
import { MainContent } from '../../styles'

const Home = () => {
  const [expandido, setExpandido] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <BarraLateral expandido={expandido} setExpandido={setExpandido} />
      </motion.div>

      <MainContent $expandido={expandido}>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <ListaDeContatos />
        </motion.div>
      </MainContent>
    </>
  )
}

export default Home
