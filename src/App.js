import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home/Home';
import Create from './create/Create';
import Product from './product/Product';
import NotFound from './notfound/Notfound';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
