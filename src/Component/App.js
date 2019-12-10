import React from 'react';

import MenuHeader from "./Menu/Menu";

import { Container } from 'semantic-ui-react';
import Content from './Body/Content';


function App() {
  
  return (
    <div className="App">
      <Container>
         <MenuHeader />
          <Content/>
      </Container>
    
    </div>
   
  );
}

export default App;


