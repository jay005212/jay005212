import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import Registration from './registration';
import Dashboard from './dashboard';
import Home from './Home';


function App() {



  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='registration' element={<Registration/>}/>
  <Route path='dashboard' element={<Dashboard/>}/>
  <Route path="/home" element={<Home />} />
</Routes>
</BrowserRouter>     
     
    </div>
  );
}

export default App;