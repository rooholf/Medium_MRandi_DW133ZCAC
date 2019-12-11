import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import CategoryProps from "./CategoryProps";

import { Link } from "react-router-dom";



export default class Category extends Component {
  state = { activeItem: "closest" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Menu
          color="grey"
          secondary
          compact
          style={{
            overflowX: "hidden",
            paddingBottom: "0px"
          }}
        >
          {Data.map(item => (
            <CategoryProps key={item.id} name={item.name} link={item.link} />
          ))}
        </Menu>
      </div>
    );
  }
}

const Data = [
  {
    id: "1",
    name: "HOME",
    link: "/"
  },
  {
    id: "2",
    name: "ONEZERO",
    link: "/onezero"
  },
  {
    id: "3",
    name: "ELEMENTAL",
    link: "/"
  },
  {
    id: "4",
    name: "GEN",
    link: "/"
  },
  {
    id: "5",
    name: "ZORA",
    link: "/"
  },
  {
    id: "6",
    name: "FORGE",
    link: "/"
  },
  {
    id: "7",
    name: "HUMAN PART",
    link: "/"
  },
  {
    id: "8",
    name: "MARKER",
    link: "/"
  },
  {
    id: "9",
    name: "LEVEL",
    link: "/"
  },
  {
    id: "10",
    name: "HEATED",
    link: "/"
  },
  {
    id: "11",
    name: "MODUS",
    link: "/"
  },
  {
    id: "12",
    name: "MODEL",
    link: "/"
  },
  {
    id: "13",
    name: "MOBA",
    link: "/"
  }
];
