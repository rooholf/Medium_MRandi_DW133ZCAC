import React, { Component } from "react";
import {
  Divider,
  Container,
  Menu,
  Image,
  Responsive
} from "semantic-ui-react";
import ArticleContent from "./ArticleContent";
import Follow from "./FollowingSection";

export default class ArticlePage extends Component {
  state = {};
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Divider style={{ margin: "0px" }} />
        <Container textAlign="center">
          <Menu text stackable>
            <Menu.Item>
              <Responsive minWidth={768}>
                <Image
                  src="https://miro.medium.com/max/216/1*IPEsgX_bZKP_7OubdnI7-Q.png"
                  style={{ paddingRight: "3vw" }}
                />
              </Responsive>
            </Menu.Item>

            <Menu.Item
              name="MISSION ORIGINALS"
              active={activeItem === "MISSION ORIGINALS"}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name="SUBSCRIBE"
              active={activeItem === "SUBSCRIBE"}
              onClick={this.handleItemClick}
            />
          </Menu>
          <ArticleContent/>
          <Follow/>
        </Container>
      </div>
    );
  }
}
