import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
// import Home from './components/Home';
import Ecommerce from './components/Ecommerce';
import About from './components/About';
import Customercare from './components/Customercare';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>               
           <Routes>        
              <Route path ='/' element ={<Ecommerce/>} />        
              <Route path ='/about' element ={<About/>} />      
              <Route path ='/customercare' element ={<Customercare/>} />    
              <Route path ='/user' element ={<User/>} /> 
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;