import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../components/css/Nav.css'

const Nav = () => {
    return (
        <>
            <Link to={`/`} className='link'>
                <Navbar bg="dark" variant='dark'>
                    <Container>
                        <Navbar.Brand>Vero Tecnologia</Navbar.Brand>
                    </Container>
                </Navbar>
            </Link>
        </>
    )
}

export default Nav
