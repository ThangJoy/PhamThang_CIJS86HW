import { useState } from 'react'
import React from 'react';
import Header from './components/Header';
import './App.css'
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Banner />
      <ProductList/>
    </div>
  );
};

export default App
