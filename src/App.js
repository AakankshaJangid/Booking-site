import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import List from './Pages/list/List';
import Hotel from './Pages/hotel/Hotel';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<List/>}/>
      <Route path='/hotels/:id' element={<Hotel/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
