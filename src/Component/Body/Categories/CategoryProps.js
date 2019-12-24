import React, { Component } from "react";
import { Menu} from "semantic-ui-react";


import { Link } from "react-router-dom";


export default class CategoryProps extends Component {
  state = { activeItem: "closest" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
          <Menu.Item
            as={Link} to={this.props.link}
            active={activeItem === this.props.name}
            onClick={this.handleItemClick}
          >
            {this.props.name}
          </Menu.Item>
      </div>
    );
  }
}
