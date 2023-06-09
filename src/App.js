import './App.css';
import Login from './Pages/Login/Login';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/home/Home'
import SignUp from './Pages/SignUp/SignUp'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
  
      
    </div>
  );
}

export default App;
