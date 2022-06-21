import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/cart';
import Header from './component/Header.js';
import Home from './component/home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/cart' element={<Cart/>}>
        </Route>
</Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
