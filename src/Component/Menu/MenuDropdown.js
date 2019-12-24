import React, { Component } from "react";
import { Menu, Image, Dropdown} from "semantic-ui-react";

export default class MenuDropdown extends Component {
  render() {
    const trigger = (
      <span>
        <Image avatar src="M-logo.png" />
      </span>
    );
    return (
      <Menu.Item>
        <Dropdown
          trigger={trigger}
          pointing="top right"
          defaultValue="Muhammad Randi"
        >
          <Dropdown.Menu>
            <br></br>
            <Dropdown.Item
              image={{ avatar: true, src: "/M-logo.png" }}
              text="Muhammad Randi"
            />

            <p style={{ color: "grey", paddingLeft:'3.5em'}}>@muhammadRandi</p>

            <Dropdown.Item as="a">
              <p
                style={{ fontSize: "1.2em",  color: "blue" }}
              >
                Become a Member
              </p>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <p style={{ fontSize: "1.2em", color: "grey" }}>New Story</p>
            </Dropdown.Item>
            <Dropdown.Item>
              <p style={{ fontSize: "1.2em", color: "grey" }}>Story</p>
            </Dropdown.Item>
            <Dropdown.Item>
              <p style={{ fontSize: "1.2em", color: "grey" }}>Stats</p>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <p style={{ fontSize: "1.2em", color: "grey" }}>Bookmarks</p>
            </Dropdown.Item>
            <Dropdown.Item>
              <p style={{ fontSize: "1.2em", color: "grey" }}>Profile</p>
            </Dropdown.Item>
            <Dropdown.Item>
              <p style={{ fontSize: "1.2em", color: "grey" }}>Setting</p>
            </Dropdown.Item>
            <Dropdown.Item>
              <p style={{ fontSize: "1.2em", color: "grey" }}>Help</p>
            </Dropdown.Item>
            <Dropdown.Item>
              <p style={{ fontSize: "1.2em", color: "grey" }}>Sign Out</p>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    );
  }
}
