
import { Icon, Grid, Item } from "semantic-ui-react";
import {Link} from "react-router-dom";
import Article from "./Categories/Article";
import React, { Component, PropTypes } from 'react'

class HorizontalItems extends Component {

  render() {
    return(
      <Item.Group>
        <Item style={{ paddingBottom: "10px" }}>
          <Item.Image
            size="tiny"
            src="https://cdn-images-1.medium.com/focal/100/100/50/51/0*VahBqXSpvucxy1JF"
          />
          <Item.Content>
            <Item.Header as="a">Your  Patterns Are In Your DNA</Item.Header>
            <Item.Meta></Item.Meta>
            <Item.Description>
            After a lifetime of looking good for other
            </Item.Description>
            <Item.Extra>
              Sep 30 . 7 min read <Icon name="star" />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
  )
  }
}


class ItemsWrapper extends Component {
  render() {
      var Article =[];
      this.props.Article.forEach((item,i) => {
          Article.push(<HorizontalItems paragraph={item.paragraph} key={i}/>)

      });

    return (
      <div>
          {Article}
      </div>
    )
  }
}

export default class Articles extends Component {
  render() {
    return (
      <div>
      <Grid.Row>
        <Grid.Column width={6}>
          <ItemsWrapper Article={Item}/>
        </Grid.Column>

        <Grid.Column width={6}>
          <Grid.Row >
          <ItemsWrapper Article={Item}/>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={4}> 
        <ItemsWrapper Article={Item}/>
        </Grid.Column>
      </Grid.Row>
      </div>
    )
  }
}
