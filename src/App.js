import './App.css';
import Dashboard from './Layouts/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navi from './Layouts/Navi';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Container>
        <Dashboard/>
        </Container>
        
      
    </div>
  );
}

export default App;
