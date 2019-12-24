import React, { Component } from "react";
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
  Icon
} from "semantic-ui-react";
import Axios from "axios";








export default class OneZero extends Component {
  
  
  state = {
    article: []
  };

  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  componentDidMount() {
    const id = this.url
    Axios.get(`http://localhost:5000/api/v1/category/${id}/article`).then(res => {
      const articles = res.data;
      this.setState({ article: articles });
 
    });
  }

  render() {
    const Data = this.state.article;

    return (
      <div style={{ paddingLeft: "5vw", paddingRight: "5vw" }}>
        <Divider />
        <Container textAlign="center">
          <Menu secondary style={{ paddingTop: "8vh" }} fluid stackable>
            <Grid columns="equal">
              <Grid.Column width={5} textAlign="left">
                <Image
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

          <Segment.Group horizontal style={{ marginTop: "10vh" }}>
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

            {Data.map((item) => (
              <Grid.Row>
                <Grid.Column width={10}>
                  <ArticleProps
                    key={item.id}
                    header={item.title}
                    meta={item.content}
                    image={item.image}
                    extra={item.createdAt}
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

