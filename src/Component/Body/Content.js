import React, { Component, createRef } from "react";
import {
  Grid,
  Image,
  Icon,
  Item,
  Container,
  Divider,
  Rail,
  Ref,
  Sticky,
  Responsive
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import PopularMedium from "./ContentBottom/PopularMedium";
import Category from "./Categories/CategoryMenu";
import ArticleBottom from "./ContentBottom/ListArticle";
import axios from "axios";

export default class Content extends Component {
  state = {
    article: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/v1/articles").then(res => {
      const articles = res.data;
      this.setState({ article: articles });
    });
  }
  contextRef = createRef();

  render() {
    const Data = this.state.article;
    let num=1;
    

    return (
      <Container>
        <Grid stackable columns={3} style={{ paddingTop: "40px" }}>
          <Category fluid />

          <Grid.Row stretched style={{ paddingBottom: "10vh" }}>
            <Grid.Column width={6}>
              <Item.Group>
                <Image
                  fluid
                  src="https://cdn-images-1.medium.com/fit/c/832/302/1*eHc3cNEAM9kro06WSPQG3w.jpeg"
                />
                <Item>
                  <Item.Content>
                    <Item.Header as={Link} to="/articlepage">
                      2020 Programming Trend Prediction
                    </Item.Header>
                    <Item.Meta>
                      Predicting what programming technology will emerge in 2020
                    </Item.Meta>
                    <Item.Extra>
                      Jull 22 . 6 min read <Icon name="heart" />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>

            <Grid.Column width={5}>
              <Item.Group>
                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://cdn-images-1.medium.com/focal/100/100/50/51/0*VahBqXSpvucxy1JF"
                  />
                  <Item.Content>
                    <Item.Header as="a">
                      How to digest book above your level by reading
                    </Item.Header>
                    <Item.Meta>
                      How to digest book above your level by reading
                    </Item.Meta>

                    <Item.Extra>
                      Sep 30 . 7 min read <Icon name="star" floated="left" />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
              <Item.Group>
                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://cdn-images-1.medium.com/fit/c/304/312/1*JETXASzxtuu3a8i1CCWfsw.jpeg"
                  />
                  <Item.Content>
                    <Item.Header as="a">
                      How to digest book above your level by reading
                    </Item.Header>
                    <Item.Meta>
                      How to digest book above your level by reading
                    </Item.Meta>

                    <Item.Extra>
                      Sep 30 . 7 min read <Icon name="star" floated="left" />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
              <Item.Group>
                <Item>
                  <Item.Image
                    size="tiny"
                    src="https://cdn-images-1.medium.com/fit/c/200/200/1*RhvV_r6ceVx7_mAcio_pUw.png"
                  />
                  <Item.Content>
                    <Item.Header as="a">
                      How to digest book above your level by reading
                    </Item.Header>
                    <Item.Meta>
                      How to digest book above your level by reading
                    </Item.Meta>

                    <Item.Extra>
                      Sep 30 . 7 min read <Icon name="star" floated="left" />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>

            <Grid.Column width={5}>
              <Item.Group>
                <Image
                  fluid
                  src="https://cdn-images-1.medium.com/fit/c/1008/444/1*TaewUxXq_g_YnJP_UZ6upg.png"
                />
                <Item>
                  <Item.Content>
                    <Item.Header as="a">
                      Let's Build a Fast, Slick and Costumizable Rich Text
                      Editor
                    </Item.Header>
                    <Item.Meta>What is rich text editor ?</Item.Meta>
                    <Item.Extra>
                      Jull 6, 2018. 6 min read <Icon name="star outline" />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
          </Grid.Row>

          <Divider />

            <Ref innerRef={this.contextRef}>
          <Grid.Row>
              <Responsive minWidth={768}>
                <Grid.Column width={5}>
                  <Rail position="left" internal>
                    <Sticky context={this.contextRef}>
                      <Grid.Row>
                        <h2
                          style={{ fontWeight: "bold  ", paddingBottom: "1vh" }}
                        >
                          Latest Article on Medium
                        </h2>
                        <Divider />
                      </Grid.Row>

                    {Data.reverse().slice(0,4).map((item,number) => (
                      <PopularMedium key={item.id}  
                                     number={num++}
                                     title={item.title}
                                     content={item.content}
                                     extra={item.createdAt}
                                      />
                    ))}


                    </Sticky>
                  </Rail>
                </Grid.Column>
              
              </Responsive>

              <Grid.Column
                width={10}
                floated="right"
                style={{ paddingTop: "1vh" }}
              >
                {Data.map(item => (
                  <ArticleBottom
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    image={item.image}
                    user={item.users.fullname}
                    extra={item.createdAt}
                  />
                ))}
              </Grid.Column>
          </Grid.Row>
          </Ref>
        </Grid>
      </Container>
    );
  }
}
