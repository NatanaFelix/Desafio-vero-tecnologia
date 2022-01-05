import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import '../components/css/AlterarChamada.css'

const AlterarChamada = (props) => {

    const baseUrl = 'http://191.252.93.122/desafio-front-end/api/update.php'
    const [novaChamada, setNovaChamada] = useState([])   

    useEffect(() => {

        const alterarChamada = {
            id: ' ',
            chamada: ' '
        }

        axios(`${baseUrl}/${alterarChamada}`).then(response => {
            setNovaChamada(response.data)
        })
    })

    console.log(novaChamada)

    
    



    return (
        <div>
            <Card className='card mt-5 text-center' style={{ width: '38rem' }} >
                <Form className='m-3'>
                    <h3>Alterar Chamada</h3>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="1">
                            ID
                        </Form.Label>
                        <Col sm="5">
                            <Form.Control type="text" placeholder={'id.id'} disabled />
                        </Col>

                        <Col sm="5">
                            <Form.Select>
                                <option>{'estado.estado'}</option>
                                <option value="emCurso">Em curso</option>
                                <option value="chamando">Chamando</option>
                                <option value="emSelecao">Em seleçãode fluxo</option>
                            </Form.Select>
                        </Col>
                        <Row>
                            <Col className=' botao pt-3'>
                                <Button variant="secondary" className='cancelar mr-5'>Cancelar</Button>
                                <Button variant="primary" className='salvar'>Salvar</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}

export default AlterarChamada
