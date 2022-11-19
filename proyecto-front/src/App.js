// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AppRoutes from "./components/router/router";
import Menu from "./components/navbar/navbar";
import Carousel from "./components/carousel/carousel";

function App() {
  return (
    <div className="App">
      <Menu />
      <Container>
        <AppRoutes />
      </Container>

      {/* <Carousel /> */}
    </div>
  );
}

export default App;
