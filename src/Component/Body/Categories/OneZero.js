import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArticleProps from "./ArticleProps";
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

export default class OneZero extends Component {
  render() {
    return (
      <div style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <Divider />
        <Container textAlign="center" fluid>
          <Menu secondary style={{ paddingTop: "8vh" }} fluid stackable>
            <Grid columns="equal">
              <Grid.Column width={5} textAlign="left">
                <Image
                  fluid
                  size="medium"
                  src="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png"
                />
              </Grid.Column>
              <GridColumn width={8} textAlign="left">
                <Responsive minWidth={768}>
                  <Menu.Item>
                    <p
                      style={{
                        fontSize: "1.3em",
                        fontFamily: "onezero-yellix-alt"
                      }}
                    >
                      <span style={{ color: "#6A0BFF" }}>
                        The front line of future{" "}
                      </span>
                      .A Medium Publication about tech and science.
                    </p>
                  </Menu.Item>
                </Responsive>
              </GridColumn>
            </Grid>
            <Menu.Item position="right">
              <Button basic color="purple" content="Follow" />
            </Menu.Item>
          </Menu>

          <Segment.Group basic horizontal style={{ marginTop: "10vh" }}>
            <Grid>
              <Grid.Column>
                <Image src="/Influencer-shootout.png" />
              </Grid.Column>
            </Grid>

            <Segment inverted textAlign="center" basic color="purple">
              <Header style={{ paddingTop: "10vh", fontSize: "2em" }}>
                The Influencer and The Hit Man
              </Header>
              <p style={{ fontSize: "1.3em" }}>
                How a years-long domain name feud ended in a bloody shootout{" "}
              </p>
              <Item.Content verticalAlign="bottom">
                <Item.Meta>
                  <p style={{ color: "#DAF832" }}> Ian Frisch</p>
                </Item.Meta>
                <Item.Extra>
                  Dec 10 . 10 min read <Icon name="clock outline" loading />
                </Item.Extra>
              </Item.Content>
            </Segment>
          </Segment.Group>

          <Segment.Group basic horizontal style={{ marginTop: "10vh" }}>
            <Segment textAlign="center" basic>
              <Header style={{ paddingTop: "10vh", fontSize: "2em" }}>
                Mood-Altering Wearables Are Silicon Valley’s Newest Delusion
              </Header>
              <p style={{ fontSize: "1.3em" }}>
                How a years-long domain name feud ended in a bloody shootout{" "}
              </p>
              <Item.Content>
                <Item.Meta>
                  <p style={{ color: "#6A0BFF" }}> Aimee Pearcy</p>
                </Item.Meta>
                <Item.Extra>
                  Dec 10 . 10 min read <Icon name="clock outline" loading />
                </Item.Extra>
              </Item.Content>
            </Segment>

            <Grid>
              <Grid.Column>
                <Image size="huge" src="/head.png" />
              </Grid.Column>
            </Grid>
          </Segment.Group>

          <Segment.Group basic horizontal style={{ marginTop: "10vh" }}>
            <Grid>
              <Grid.Column>
                <Image
                  size="small"
                  src="https://miro.medium.com/max/1512/1*yYP8rlvTuCML1_N9AlQOTg.jpeg"
                />
              </Grid.Column>
            </Grid>

            <Segment inverted textAlign="center" basic color="purple">
              <Header style={{ paddingTop: "10vh", fontSize: "2em" }}>
                The Influencer and The Hit Man
              </Header>
              <p style={{ fontSize: "1.3em" }}>
                How a years-long domain name feud ended in a bloody shootout{" "}
              </p>
            </Segment>
          </Segment.Group>

          <Segment.Group basic horizontal style={{ marginTop: "10vh" }}>
            <Segment textAlign="center" basic>
              <Header style={{ paddingTop: "10vh", fontSize: "2em" }}>
                Mood-Altering Wearables Are Silicon Valley’s Newest Delusion
              </Header>
              <p style={{ fontSize: "1.3em" }}>
                How a years-long domain name feud ended in a bloody shootout{" "}
              </p>
              <Item.Content>
                <Item.Meta>
                  <p style={{ color: "#6A0BFF" }}> Aimee Pearcy</p>
                </Item.Meta>
                <Item.Extra>
                  Dec 10 . 10 min read <Icon name="clock outline" loading />
                </Item.Extra>
              </Item.Content>
            </Segment>

            <Grid stackable>
              <Grid.Column>
                <Image size="huge" src="/head.png" />
              </Grid.Column>
            </Grid>
          </Segment.Group>

          <Grid centered padded relaxed>
            <Grid.Row color="olive">
              <Grid.Column></Grid.Column>
              <Grid.Column width={7}>
                <Container>
                  <Header style={{ paddingTop: "10vh", fontSize: "2em" }}>
                    "We have something to share."
                  </Header>
                  <p>-Damon Beres</p>
                  <p style={{ fontSize: "1.3em", color: "black" }}>
                    How a years-long domain name feud ended in a bloody shootout{" "}
                  </p>
                </Container>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column></Grid.Column>
              <Grid.Column width={10}>
                <Divider />
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>

            {Article.map(item => (
              <Grid.Row>
                <Grid.Column width={10}>
                <ArticleProps
                  key={item.id}
                  header={item.header}
                  meta={item.meta}
                  image={item.image}
                  extra={item.extra}
                />
                  </Grid.Column>
              </Grid.Row>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

const Article = [
  {
    id: "1",
    header: " Your Family’s Behavioral Patterns Are In Your DNA",
    meta: "After a lifetime of looking good for other",
    paragraph:
      "If you’re concerned about message retention, solutions are just a few clicks away",
    extra: 'Sep 30 . 7 min read ',
    image:
      "https://cdn-images-1.medium.com/fit/c/304/312/1*AX-ojZx301J9_BU4lan5WQ.gif"
  },
  {
    id: "2",
    header: " Your ",
    meta: "After a lifetime of looking good for other",
    paragraph:
      "If you’re concerned about message retention, solutions are just a few clicks away",
    extra: 'Sep 30 . 7 min read ',
    image:
      "https://cdn-images-1.medium.com/fit/c/304/312/1*AX-ojZx301J9_BU4lan5WQ.gif"
  },
  {
    id: "3",
    header: " Your  Patterns Are In Your DNA",
    meta: "After a lifetime of looking good for other",
    paragraph:
      "If you’re concerned about message retention, solutions are just a few clicks away",
    extra: 'Sep 30 . 7 min read ',
    image:
      "https://cdn-images-1.medium.com/fit/c/304/312/1*AX-ojZx301J9_BU4lan5WQ.gif"
  },
  {
    id: 3,
    header: "11 JavaScript Animation Libraries for 2019",
    meta: " Some of the finest JS and CSS animaton Libraries around.",
    extra: "jun 28 . 7 min read",
    image:
      "https://cdn-images-1.medium.com/fit/c/304/312/1*AX-ojZx301J9_BU4lan5WQ.gif"
  }
];
