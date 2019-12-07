import React, { Component } from 'react'

export class Signin extends Component {
    render() {
        return (
            <Modal trigger={<Button>Login</Button>} centered={false}>
            <Grid
              columns={3}
              stackable
              style={{ height: "100vh" }}
              verticalAlign="top"
            >
              <GridRow>
                <Grid.Column>
                <Image src="/logoLeft.png" />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle" >
                  <Segment>
                    <Modal.Content >
                      <Modal.Description>
                        <Header>Join Medium</Header>
                        <p >
                          Create an account to receive great stories in your inbox,
                          personalize your homepage, and follow authors and topics that
                          you love.
                        </p>
                      </Modal.Description>
                      <LoginForm />
                    </Modal.Content>
                  </Segment>
                  <p>Already have an account?  <a href='/Signin'>Sign In</a></p>
                  <p>
                    To make Medium work, we log user data and share it with service
                    providers. Click “Registration” above to accept Medium’s Terms of Service
                    & Privacy Policy.
                  </p>
                </Grid.Column>
                <Grid.Column >
                <Image src="/logoRight.png" style={{position: 'absolute', right: "1vw"}}/>
              </Grid.Column>
              </GridRow>
            </Grid>
          </Modal>
        )
    }
}

export default Signin
