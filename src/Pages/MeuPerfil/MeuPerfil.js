import React, { useEffect, useState } from 'react'
import { Geral } from './Styled'
import BarraDeBotoes from '../../components/BarraDeBotoesInferior/BarraDeBotoes'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import CardPerfil from './CardPerfil'

const MeuPerfil = () => {
  const [endereco, setEndereco] = useState('')
  const [usuario, setUsuario] = useState({})
  const [history,setHisory]= useState([])

  const getFullAddress = () => {
    const token = localStorage.getItem("token")
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: token
        }
      })
      .then(res => {
        setEndereco(res.data.user)
      })
      .catch(err => {
        console.log('errroooou', err)
      })
  }

  const getFullProfile = () => {
    const token = localStorage.getItem("token")
    return axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: token,
          ContentType: 'application/json'
        }
      })
      .then(res => {
        setUsuario(res.data.user)
      })
      .catch(err => {
        console.log('errroooou', err)
      })
  }

  const getOrdersHistory = () => {
    const token = localStorage.getItem("token")
    return axios
      .get(`${BASE_URL}/orders/history`, {
        headers: {
          auth: token,
          ContentType: 'application/json'
        }
      })
      .then(res => {
        console.log(res.data.orders)
        setHisory(res.data.orders)
      })
      .catch(err => {
        console.log('errroooou', err)
      })
  }

  useEffect(() => {
    getFullAddress()
    getFullProfile()
    getOrdersHistory()
  }, [])
  return (
    <Geral>
      <CardPerfil endereco={endereco} usuario={usuario} history={history} />
      <BarraDeBotoes />
    </Geral>
  )
}

export default MeuPerfil
