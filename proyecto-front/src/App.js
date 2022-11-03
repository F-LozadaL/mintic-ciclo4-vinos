// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Login from './components/login/login';
import Menu from './components/navbar/navbar';
// import Carousel from './components/carousel/carousel';
// import Test from './components/test/test'
function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        {/* <Carousel /> */}
        <Login />
        {/* <Test /> */}
      </Container>
    </div>
  );
}

export default App;
