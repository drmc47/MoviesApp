import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar/>
      <Route exact path='/' component={Home}/>
    </div>
  );
}

export default App;
