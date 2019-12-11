import React, { Component } from "react";

import {
    Grid,
    Menu,
    Image,
    Container,
    GridColumn,
    Button,
    Divider,
    Responsive,
    Segment,
    Header,
    Item,
    Icon,
    MenuItem
  } from "semantic-ui-react";

export default class ArticleProps extends Component {
  render() {
    return (
      
        <Item.Group>
          <Item>
           
            <Item.Content>
              <Item.Meta>
                Javascript <i>Suggested </i> Topic
              </Item.Meta>

              <Item.Header as="a">
                {this.props.header}
              </Item.Header>
              <Item.Meta>
               {this.props.meta}
              </Item.Meta>

              <Item.Extra>
                <Grid.Column>
                  {this.props.extra}
                  <Icon name="star" />
                  <Icon loading name="clock outline" floated="left " />
                </Grid.Column>
                <Grid.Column floated="left">
                  <Icon size="large" name="bookmark outline" floated="right" />
                  <Icon
                    size="large"
                    name="ellipsis horizontal"
                    floated="left"
                  />
                </Grid.Column>
              </Item.Extra>
            </Item.Content>
            <Item.Image 
              floated='left'
              size="small"
              src={this.props.image}
            />
          </Item>
        </Item.Group>
      
    );
  }
}
