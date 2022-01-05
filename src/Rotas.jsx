import React from 'react'
import AlterarChamada from './components/AlterarChamada'
import StatusChamada from './components/StatusChamada'
import { Routes, Route } from 'react-router-dom'

const Rotas = () => {
    return (
        <Routes>
            <Route exact path="/" element={<StatusChamada />} />
            <Route exact path="/:id/:estado" element={<AlterarChamada />} />
        </Routes>        
        
    )
}

export default Rotas
