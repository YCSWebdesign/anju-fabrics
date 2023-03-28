import React from 'react';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {Abt}         from  './component/abt';
 import {Product}    from  './component/product';
import {Testimonials}  from './component/testimonials';
import {Contact}       from  './component/contact';
 import { Banner }        from './component/banner';
import { Menubar } from './component/menubar';

function App() {
  return ( 
    <>
    <BrowserRouter>
      <Routes>
        
          <Route path='/' element={[ <Banner/>,<Abt/>,<Product/>,<Testimonials/>,<Contact/>]}/> 
          <Route path='/abt' element={[<Menubar/>,<Abt/>]}/>
          <Route path='/product' element={[<Menubar/>,<Product/>]}/>
          <Route path='/testimonials' element={[<Menubar/>,<Testimonials/>]}/> 
          <Route path='/contact' element={[<Menubar/>,<Contact/>]}/>   
      </Routes>
    </BrowserRouter>

    </>
  
  ); 
}

export default App;
