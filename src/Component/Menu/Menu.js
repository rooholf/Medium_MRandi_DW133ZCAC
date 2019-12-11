import React, { Component } from "react";
import {
  Menu,
  Image,
  Icon,
  Grid,
  Dropdown,
  Container
} from "semantic-ui-react";
import ModalLogin from "./SignIn/Login";

export default class MenuHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const trigger = (
      <span>
        <Image avatar src="M-logo.png" />
      </span>
    );
    return (
      <Container>
        <Menu stackable secondary size="mini">
          <Menu.Item>
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
            <Menu.Item>
              <Dropdown trigger={trigger} icon={null}>
                <Dropdown.Menu>
                  <Grid>
                    <Grid.Row>
                      <Dropdown.Item>
                        <Image src="/M-logo.png" size="mini" />
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Image src="/M-logo.png" size="mini" />
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Image src="/M-logo.png" size="mini" />
                      </Dropdown.Item>
                    </Grid.Row>
                  </Grid>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}
