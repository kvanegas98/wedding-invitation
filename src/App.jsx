
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Container from 'react-bootstrap/Container'
import GridLayout from './pages/Home/Grid';
import Header from './Layout/Header';


function App() {
  return (
    <div>
      {/* <Container fluid>
        <GridLayout />
      </Container> */}
       <GridLayout />
    </div>
  );
}

export default App;
