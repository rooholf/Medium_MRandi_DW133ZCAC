import React, { Component } from "react";
import {
  Grid,
  Image,
  Icon,
  Item,
  Container,
  GridColumn,
  Divider,
  ItemExtra
} from "semantic-ui-react";

import Articles from "./HorizontalItems";
import Article from "./Article";

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Grid columns={3} style={{ paddingTop: "40px" }} divided="vertically">
          <Grid.Row>
            <Grid.Column width={6}>
              <Item.Group>
                <Image
                  fluid
                  src="https://cdn-images-1.medium.com/fit/c/832/302/1*eHc3cNEAM9kro06WSPQG3w.jpeg"
                />
                <Item>
                  <Item.Content>
                    <Item.Header as="a">
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

          <Grid.Row>
            <Grid.Column width={5} style={{ paddingTop: "10vh" }}>
              <div style={{ position: "sticky", top: "2.5em" }}>
                <Grid.Row>
                  <h2 style={{ fontWeight: "bold  ", paddingBottom: "1vh" }}>
                    Popular on Medium
                  </h2>
                  <Divider />
                </Grid.Row>
                <Grid.Row>
                  <Item.Group>
                    <Item>
                      <h1 style={{ color: "grey" }}>01</h1>
                      <Item.Content style={{paddingLeft:'2em'}}>
                        <Item.Header>
                          Scientist are Contemplating a 1,000-Year Space Mission
                          to Save Humanity
                        </Item.Header>
                        <Item.Description>
                          Corin Fave in OneZero
                        </Item.Description>
                        <ItemExtra>
                          Dec 5 . 13 min Read <Icon loading name='clock'/>
                        </ItemExtra>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                  <Item.Group>
                    <Item>
                      <h1 style={{ color: "grey" }}>02</h1>
                      <Item.Content style={{paddingLeft:'2em'}}>
                        <Item.Header>
                          Scientist are Contemplating a 1,000-Year Space Mission
                          to Save Humanity
                        </Item.Header>
                        <Item.Description>
                          Corin Fave in OneZero
                        </Item.Description>
                        <ItemExtra>
                          Dec 5 . 13 min Read <Icon loading name='clock'/>
                        </ItemExtra>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                  <Item.Group>
                    <Item>
                      <h1 style={{ color: "grey" }}>03</h1>
                      <Item.Content style={{paddingLeft:'2em'}}>
                        <Item.Header>
                          Scientist are Contemplating a 1,000-Year Space Mission
                          to Save Humanity
                        </Item.Header>
                        <Item.Description>
                          Corin Fave in OneZero
                        </Item.Description>
                        <ItemExtra>
                          Dec 5 . 13 min Read <Icon loading name='clock'/>
                        </ItemExtra>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                  <Item.Group>
                    <Item>
                      <h1 style={{ color: "grey" }}>04</h1>
                      <Item.Content style={{paddingLeft:'2em'}}>
                        <Item.Header>
                          Scientist are Contemplating a 1,000-Year Space Mission
                          to Save Humanity
                        </Item.Header>
                        <Item.Description>
                          Corin Fave in OneZero
                        </Item.Description>
                        <ItemExtra>
                          Dec 5 . 13 min Read <Icon loading name='clock'/>
                        </ItemExtra>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                  <Item.Group>
                    <Item>
                      <h1 style={{ color: "grey" }}>05</h1>
                      <Item.Content style={{paddingLeft:'2em'}}>
                        <Item.Header>
                          Scientist are Contemplating a 1,000-Year Space Mission
                          to Save Humanity
                        </Item.Header>
                        <Item.Description>
                          Corin Fave in OneZero
                        </Item.Description>
                        <ItemExtra>
                          Dec 5 . 13 min Read <Icon loading name='clock'/>
                        </ItemExtra>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Grid.Row>
              </div>
            </Grid.Column>

            <Grid.Column
              width={10}
              floated="right"
              style={{ paddingTop: "1vh" }}
            >
              <Item.Group>
                <Item>
                  <Item.Image
                    size="small"
                    src="https://cdn-images-1.medium.com/fit/c/304/312/1*AX-ojZx301J9_BU4lan5WQ.gif"
                  />
                  <Item.Content>
                    <Item.Meta>
                      Javascript <i>Suggested </i> Topic
                    </Item.Meta>

                    <Item.Header as="a">
                      11 JavaScript Animation Libraries for 2019
                    </Item.Header>
                    <Item.Meta>
                      Some of the finest JS and CSS animaton Libraries around.
                    </Item.Meta>

                    <Item.Extra>
                      <Grid.Column>
                        jun 28 . 7 min read{" "}
                        <Icon loading name="clock outline" floated="left" />
                      </Grid.Column>
                      <Grid.Column floated="right">
                        <Icon
                          size="large"
                          name="bookmark outline"
                          floated="right"
                        />
                        <Icon
                          size="large"
                          name="ellipsis horizontal"
                          floated="right"
                        />
                      </Grid.Column>
                    </Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image
                    size="small"
                    src="https://cdn-images-1.medium.com/fit/c/304/312/1*AX-ojZx301J9_BU4lan5WQ.gif"
                  />
                  <Item.Content>
                    <Item.Meta>
                      Javascript <i>Suggested </i> Topic
                    </Item.Meta>

                    <Item.Header as="a">
                      11 JavaScript Animation Libraries for 2019
                    </Item.Header>
                    <Item.Meta>
                      Some of the finest JS and CSS animaton Libraries around.
                    </Item.Meta>

                    <Item.Extra>
                      <Grid.Column>
                        jun 28 . 7 min read{" "}
                        <Icon loading name="clock outline" floated="left" />
                      </Grid.Column>
                      <Grid.Column floated="right">
                        <Icon
                          size="large"
                          name="bookmark outline"
                          floated="right"
                        />
                        <Icon
                          size="large"
                          name="ellipsis horizontal"
                          floated="right"
                        />
                      </Grid.Column>
                    </Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image
                    size="small"
                    src="https://cdn-images-1.medium.com/fit/c/304/312/1*AX-ojZx301J9_BU4lan5WQ.gif"
                  />
                  <Item.Content>
                    <Item.Meta>
                      Javascript <i>Suggested </i> Topic
                    </Item.Meta>

                    <Item.Header as="a">
                      11 JavaScript Animation Libraries for 2019
                    </Item.Header>
                    <Item.Meta>
                      Some of the finest JS and CSS animaton Libraries around.
                    </Item.Meta>

                    <Item.Extra>
                      <Grid.Column>
                        jun 28 . 7 min read{" "}
                        <Icon loading name="clock outline" floated="left" />
                      </Grid.Column>
                      <Grid.Column floated="right">
                        <Icon
                          size="large"
                          name="bookmark outline"
                          floated="right"
                        />
                        <Icon
                          size="large"
                          name="ellipsis horizontal"
                          floated="right"
                        />
                      </Grid.Column>
                    </Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image
                    size="small"
                    src="https://cdn-images-1.medium.com/fit/c/304/312/1*AX-ojZx301J9_BU4lan5WQ.gif"
                  />
                  <Item.Content>
                    <Item.Meta>
                      Javascript <i>Suggested </i> Topic
                    </Item.Meta>

                    <Item.Header as="a">
                      11 JavaScript Animation Libraries for 2019
                    </Item.Header>
                    <Item.Meta>
                      Some of the finest JS and CSS animaton Libraries around.
                    </Item.Meta>

                    <Item.Extra>
                      <Grid.Column>
                        jun 28 . 7 min read{" "}
                        <Icon loading name="clock outline" floated="left" />
                      </Grid.Column>
                      <Grid.Column floated="right">
                        <Icon
                          size="large"
                          name="bookmark outline"
                          floated="right"
                        />
                        <Icon
                          size="large"
                          name="ellipsis horizontal"
                          floated="right"
                        />
                      </Grid.Column>
                    </Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image
                    size="small"
                    src="https://cdn-images-1.medium.com/fit/c/304/312/1*AX-ojZx301J9_BU4lan5WQ.gif"
                  />
                  <Item.Content>
                    <Item.Meta>
                      Javascript <i>Suggested </i> Topic
                    </Item.Meta>

                    <Item.Header as="a">
                      11 JavaScript Animation Libraries for 2019
                    </Item.Header>
                    <Item.Meta>
                      Some of the finest JS and CSS animaton Libraries around.
                    </Item.Meta>

                    <Item.Extra>
                      <Grid.Column>
                        jun 28 . 7 min read{" "}
                        <Icon loading name="clock outline" floated="left" />
                      </Grid.Column>
                      <Grid.Column floated="right">
                        <Icon
                          size="large"
                          name="bookmark outline"
                          floated="right"
                        />
                        <Icon
                          size="large"
                          name="ellipsis horizontal"
                          floated="right"
                        />
                      </Grid.Column>
                    </Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Image
                    size="small"
                    src="https://cdn-images-1.medium.com/fit/c/304/312/1*AX-ojZx301J9_BU4lan5WQ.gif"
                  />
                  <Item.Content>
                    <Item.Meta>
                      Javascript <i>Suggested </i> Topic
                    </Item.Meta>

                    <Item.Header as="a">
                      11 JavaScript Animation Libraries for 2019
                    </Item.Header>
                    <Item.Meta>
                      Some of the finest JS and CSS animaton Libraries around.
                    </Item.Meta>

                    <Item.Extra>
                      <Grid.Column>
                        jun 28 . 7 min read{" "}
                        <Icon loading name="clock outline" floated="left" />
                      </Grid.Column>
                      <Grid.Column floated="right">
                        <Icon
                          size="large"
                          name="bookmark outline"
                          floated="right"
                        />
                        <Icon
                          size="large"
                          name="ellipsis horizontal"
                          floated="right"
                        />
                      </Grid.Column>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
