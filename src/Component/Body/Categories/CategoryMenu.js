import React, { Component } from "react";
import { Menu} from "semantic-ui-react";
import CategoryProps from "./CategoryProps";
import axios from "axios";




export default class Category extends Component {
  state = { 
    activeItem: "closest",
    category: []
};


  componentDidMount() {
      axios.get('http://localhost:5000/api/v1/categories')
      .then(res=> {
        const categories = res.data
        this.setState({category: categories})
      })
  }
  
  render() {
    const Data = this.state.category
    return (
        <Menu
          color="grey"
          secondary
          compact
          stackable
          style={{
            overflowX: "hidden",
            paddingBottom: "0px"
          }}
        >
          {Data.map(item => (
            <CategoryProps key={item.id} name={item.name_category} link={`/${item.name_category.toString().toLowerCase()}/?id=${item.id}`}/>
          ))}
        </Menu>
    );
  }
}


