import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";

export default class Category extends Component {
  state = { activeItem: "closest" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu text fluid>
          <Menu.Item header position='left'></Menu.Item>
          <Menu.Item
            name="closest"
            active={activeItem === "closest"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="mostComments"
            active={activeItem === "mostComments"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            position='right'
          />
        </Menu>
      </Container>
    );
  }
}
