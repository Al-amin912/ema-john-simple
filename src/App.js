import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Shops from './components/Shops/Shops';

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import Review from './components/Review/Review';
import Manage from "./components/Manage/Manage";
import Error from "./components/Error/Error";
import ProductDetail from "./components/ProductDetail/ProductDetail";


function App() {
  return (
    <div>
      <Router>
       
         <Header></Header>
        <Routes>
        <Route path="/shop" element={<Shops/>}/>
        <Route path="/review" element={ <Review/> }/>
        <Route path="/manage" element={ <Manage></Manage> }/>
        <Route exact path="/" element={<Shops/>}/>
        <Route  path="/product/:productKey" element={<ProductDetail/>}/>
        <Route path="*" element={<Error/>}/>
        </Routes>
      
      </Router>
      </div>
         
         
    
  );
}

export default App;
