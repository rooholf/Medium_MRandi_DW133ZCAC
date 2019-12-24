import React, { Component } from "react";
import moment from 'moment'
import { Grid, Item,Icon } from "semantic-ui-react";

export default class ArticleProps extends Component {

  render() {
    const infoDate = new Date(this.props.extra  );
    const date = moment(infoDate).format("MMMM DD");

    return (
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Meta>
              Javascript <i>Suggested </i> Topic
            </Item.Meta>

            <Item.Header as="a">{this.props.header}</Item.Header>
            <Item.Meta>{this.props.meta}</Item.Meta>

            <Item.Extra>
              <Grid.Column>
                {date}
                <Icon name="star" />
                <Icon loading name="clock outline" floated="left " />
              </Grid.Column>
              <Grid.Column floated="left">
                <Icon size="large" name="bookmark outline" floated="right" />
                <Icon size="large" name="ellipsis horizontal" floated="left" />
              </Grid.Column>
            </Item.Extra>
          </Item.Content>
          <Item.Image floated="left" size="small" src={this.props.image} />
        </Item>
      </Item.Group>
    );
  }
}
