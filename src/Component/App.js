import React from "react";

import MenuHeader from "./Menu/Menu";

import { Container, Segment } from "semantic-ui-react";
import Content from "./Body/Content";
import Category from "./Menu/Categories/Category";

function App() {
  return (
    <div>
      <MenuHeader />

      <Category />

      <Content />
    </div>
  );
}

export default App;
