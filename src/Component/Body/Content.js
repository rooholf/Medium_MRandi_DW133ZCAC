import React, { Component } from "react";
import { Grid,Image, Container } from "semantic-ui-react";
import Article from "./Article";

export default class Content extends Component {
  render() {
    return (
 
    <Grid columns={3} style={{ paddingTop: "20px" }} divided="vertically">
      
      <Grid.Row>
        <Grid.Column width={6}>
          <Article />
        </Grid.Column>

        <Grid.Column width={6}>
          <Grid.Row style={{ paddingTop: "0px" }}>
            <Article />
          </Grid.Row>
          <Grid.Row style={{ padding: "0px" }}>
            <Article />
          </Grid.Row>
          <Grid.Row style={{ padding: "0px" }}>
            <Article />
          </Grid.Row>
        </Grid.Column>

        <Grid.Column width={4}>
          <Article />
        </Grid.Column>
      </Grid.Row>
    

      
      <Grid.Row>
        <Grid.Column width={6}>
            <Grid.Row>
               <text style={{fontWeight: 'bold  '}}>Popular on Medium</text>
            </Grid.Row>
           <Grid.Row >
             <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" fluid/>
           </Grid.Row>
        </Grid.Column>
        <Grid.Column width={10} floated="right">
          <Grid.Row>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" fluid />
          </Grid.Row>
          <Grid.Row>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" fluid/>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
 
    </Grid>
        
   
    );
  }
}
