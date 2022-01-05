import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Rotas from './Rotas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Container>
          <Rotas />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
