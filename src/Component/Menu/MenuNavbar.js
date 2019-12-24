import React, { Component } from "react";
import {
  Menu,
  Image,
  Icon,
  Container,
  
} from "semantic-ui-react";
import ModalLogin from "./SignIn/Login";
import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

export default class MenuNavbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    

   
    return (
      <Container>
        <Menu secondary size="mini">
          <Menu.Item as={Link} to="/home">
            <Image src="/medium-logo.svg" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon name="search" fitted size="large" />
            </Menu.Item>
            <Menu.Item>
              <Icon name="bell outline" fitted size="large" />
            </Menu.Item>
            <Menu.Item name="sign-in">
              <ModalLogin />
            </Menu.Item>
            <MenuDropdown/>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}
