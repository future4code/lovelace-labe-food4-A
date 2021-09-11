import React from 'react'
import { ScreenContainer } from './style'
import CadastroEnderecoForm from './CadastroEnderecoForm'

const CadastroPage = ({ setRightButtonText }) => {
  
  return (
    <ScreenContainer>
        <CadastroEnderecoForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  )
}

export default CadastroPage;