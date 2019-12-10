import React from 'react';

import MenuHeader from "./Menu/Menu";

import { Container } from 'semantic-ui-react';
import Content from './Body/Content';
import Category from './Menu/Categories/Category';


function App() {
  
  return (
    <div className="App">
      <Container>
         <Category/>
      </Container>
    
    </div>
   
  );
}

export default App;


