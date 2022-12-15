import './App.css';
import Home from './Pages/Home/Home';
import Nav from './Global Components/Nav';
import 'tw-elements';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className='relative'>
     
      <Nav/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
      </Routes>

    </div>
  );
}

export default App;
