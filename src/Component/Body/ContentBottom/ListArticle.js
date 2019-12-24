import React, { Component } from "react";
import { Grid, Icon, Item } from "semantic-ui-react";
import moment from "moment";

export default class ArticleBottom extends Component {
  render() {
    
    const infoDate = new Date(this.props.extra);
    const date = moment(infoDate).format("MMMM DD");

    return (
      <Item.Group>
        <Item>
          <Item.Image size="small" src={this.props.image} />
          <Item.Content>
            <Item.Meta>
              Javascript <i>Suggested </i> Topic
            </Item.Meta>

            <Item.Header as="a">{this.props.title}</Item.Header>
            <Item.Meta>{this.props.content}</Item.Meta>
            <Item.Description>{this.props.user}</Item.Description>
            <Item.Extra>
              <Grid.Column>
                {date}. 7 min read
                <Icon loading name="clock outline" floated="left" />
              </Grid.Column>
              <Grid.Column floated="right">
                <Icon size="large" name="bookmark outline" floated="right" />
                <Icon size="large" name="ellipsis horizontal" floated="right" />
              </Grid.Column>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}
