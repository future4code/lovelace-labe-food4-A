import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToRecipesList } from '../Routes/coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToRecipesList(history)
    }
  },[history])
}

export default useUnprotectedPage