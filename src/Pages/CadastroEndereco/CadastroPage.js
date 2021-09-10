import React from 'react'
import { ScreenContainer } from './style'
import CadastroEnderecoForm from './CadastroEnderecoForm'
import { LogoImage } from './style'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const CadastroPage = ({ setRightButtonText }) => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
        <CadastroEnderecoForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  )
}

export default CadastroPage;