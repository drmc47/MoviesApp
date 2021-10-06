import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import {Route} from 'react-router-dom'
import Favs from './components/Favs/Favs';
import Detail from './components/Detail/Detail';



function App() {
  return (
    <div className='body--style'>
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Route path='/favourites' component={Favs}/>
      <Route path='/detail' component={Detail}/>

    </div>
  );
}

export default App;
