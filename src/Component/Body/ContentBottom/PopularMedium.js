import React, { Component} from "react";
import moment from 'moment'
import {
  Icon,
  Item,
  ItemExtra,
  Grid
} from "semantic-ui-react";

export default class PopularMedium extends Component {
 
  render() {
    const infoDate = new Date(this.props.extra);
    const date = moment(infoDate).format("MMMM DD");

    return (
     
              <Grid.Row style={{paddingTop:'3vh'}}>
                <Item.Group>
                  <Item>
                    <h1 style={{ color: "grey" }}>{this.props.number}</h1>
                    <Item.Content style={{ paddingLeft: "2em" }}>
                      <Item.Header>
                        {this.props.title}
                      </Item.Header>
                      <Item.Description>
                        {this.props.content}
                      </Item.Description>
                      <ItemExtra>
                        {date} . 13 min Read <Icon loading name="clock" />
                      </ItemExtra>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Grid.Row>

          
    );
  }
}
