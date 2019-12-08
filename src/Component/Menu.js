import React, { Component } from "react";
import { Menu, Image, Icon, Container } from "semantic-ui-react";
import ModalLogin from "./Login";
import Category from "./Category";

export default class MenuHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu stackable secondary fluid compact>
          <Menu.Item>
            <Image src="/medium-logo.svg" size="small" />
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Icon name="search" fitted size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon name="bell outline" fitted size="large" />
            </Menu.Item>
            <Menu.Item name="sign-in" active={activeItem === "sign-in"}>
              <ModalLogin />
            </Menu.Item>
            <Menu.Item>
              <img src="https://react.semantic-ui.com/logo.png" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Category/>
      </div>
    );
  }
}
