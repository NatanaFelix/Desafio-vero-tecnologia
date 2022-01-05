import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardGroup, Table } from 'react-bootstrap'

const StatusChamada = (props) => {

  const baseUrl = 'http://191.252.93.122/desafio-front-end/api/index.php'
  const [chamadas, setChamadas] = useState([])

  //Realiza um GET na api e retorna os dados a cada 60 segundos setando nos parâmetros chamadas e setChamadas
  useEffect(() => {
    setInterval(() => {
      axios(baseUrl).then(response => {
        setChamadas(response.data)
      })
    }, 60000);
  }, [props])

  //Filtra os estados da api separando os em "chamando", "em seleção" e "em curso" 
  let chamando = chamadas.filter(chamada => chamada.estado === "chamando")

  let emSelecao = chamadas.filter(chamada => chamada.estado === "em selecao de fluxo")

  let emCurso = chamadas.filter(chamada => chamada.estado === "em curso")

  return (
    <>      
      <div className='pt-2 p-5'>
        <h1>Resumo Estados</h1>
        <CardGroup>
          <Card className='text-center border-success'>
            <Card.Header>CHAMANDO</Card.Header>
            <Card.Text>
              {chamando.length}
            </Card.Text>
          </Card>
          <Card className='text-center border-warning'>
            <Card.Header>EM SELEÇÃO DE FLUXO</Card.Header>
            <Card.Text>
              {emSelecao.length}
            </Card.Text>
          </Card>
          <Card className='text-center border-primary'>
            <Card.Header>EM CURSO</Card.Header>
            <Card.Text>
              {emCurso.length}
            </Card.Text>
          </Card>
        </CardGroup>
      </div>
      <div className="pt-2 p-5 tabela">
        <h3>Chamadas</h3>
        <Table striped hover responsive="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Origem</th>
              <th>Destino</th>
              <th>Estado</th>
            </tr>
          </thead>
          {chamadas.map(chamada => (
            <tbody key={chamada.id}>
              <tr>
                <td>{chamada.id}</td>
                <td>{chamada.origem}</td>
                <td>{chamada.destino}</td>
                <td>{chamada.estado}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  )
}

export default StatusChamada
