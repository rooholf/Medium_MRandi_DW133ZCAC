import React from 'react';
import ModalLogin from "./Login";
import MenuHeader from "./Menu";
import Category from "./Category";
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Container>
         <MenuHeader />
      </Container>
    </div>
   
  );
}

export default App;
