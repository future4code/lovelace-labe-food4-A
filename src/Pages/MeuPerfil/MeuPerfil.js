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
    axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijd3Z3V6T1NiRHBoZVplWlZlSFJlIiwibmFtZSI6IkRvZ2xhcyIsImVtYWlsIjoiRG9nbGFzQGRvZy5jb20iLCJjcGYiOiI5MjkuOTI5LjkyOS0yOSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBwb21wZXUgY2FyZG9zbywgNzAsIDAwIC0gVmlsYSBhdWd1c3RhIiwiaWF0IjoxNjMxMDMzOTQwfQ.O7mL4LUVP95G6XphaPnoKAzjPw62DFxU5cmRTxxAdT0'
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
    return axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijd3Z3V6T1NiRHBoZVplWlZlSFJlIiwibmFtZSI6IkRvZ2xhcyIsImVtYWlsIjoiRG9nbGFzQGRvZy5jb20iLCJjcGYiOiI5MjkuOTI5LjkyOS0yOSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBwb21wZXUgY2FyZG9zbywgNzAsIDAwIC0gVmlsYSBhdWd1c3RhIiwiaWF0IjoxNjMxMDMzOTQwfQ.O7mL4LUVP95G6XphaPnoKAzjPw62DFxU5cmRTxxAdT0',
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
    return axios
      .get(`${BASE_URL}/orders/history`, {
        headers: {
          auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IktzczdtVGpweHNVZUFFNTMza1F4IiwibmFtZSI6ImFzdHJvIiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6IGRvaXMsIDE1LCA3MSAtIFZpbGEgTi4gY29uY2Vpw6fDo28iLCJpYXQiOjE2MzEwMzQzNDR9.qkey6KCpitj6IyvsEmChIeDiodTt0GQkckxwkUWnw9Q',
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
