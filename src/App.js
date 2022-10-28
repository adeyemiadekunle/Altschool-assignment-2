import React from 'react';
import './style.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Users from './Pages/Users';
import Products from './Pages/Products';
import ErrorPage from './Pages/Error';
import FeaturedProducts from './Pages/FeaturedProducts';
import NewProducts from './Pages/NewProducts';
import HomeItem from './Pages/HomeItem'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeItem />} />
        </Route>
        <Route path="/product" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
          <Route index element={<FeaturedProducts />} />
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<ErrorPage />} />
 
      </Routes>
    </>
  );
}
export default App;
