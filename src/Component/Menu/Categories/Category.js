import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import CategoryProps from "./CategoryProps";
import Data from "./categoryData";

export default class Category extends Component {
  state = { activeItem: "closest" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const categoryComponent = Data.map(item => (
      <CategoryProps key={item.id} Data={item} />
    ));
    return (
        <Container>
          <Menu
            secondary
        
            defaultActiveIndex="HOME"
            fluid
            style={{ overflowX: "scroll" }}
            
          > 
            {categoryComponent.map((currElement, Index) => {
              return (
                <Menu.Item
                  active={activeItem === { currElement }}
                  onClick={this.handleItemClick}
                  key={Index}
                >
                  {currElement}
                </Menu.Item>
              );
            })}
          </Menu>
        </Container>
      
    );
  }
}
