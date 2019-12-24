import React, { Component } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Grid,
  GridRow,
  Responsive,
  Icon
} from "semantic-ui-react";
import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";

class NestedModal extends Component {
  state = { open: false };

  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <Modal
        dimmer="inverted"
        open={open}
        onOpen={this.open}
        onClose={this.close}
        trigger={<Button style={{ cursor: "pointer",background:'none',color:'green' }}>Sign in</Button>}
      >
        <Grid columns={3} stackable size="large" verticalAlign="top" centered>
          <GridRow>
            <Grid.Column width={5}>
              <Responsive minWidth={768}></Responsive>
            </Grid.Column>
            <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
              <Modal.Content>
                <Modal.Description>
                  <Header style={{ paddingTop: 50 }} size="large">
                    Sign in with email
                  </Header>
                  <p style={{ padding: 30 }}>
                    Enter email address associated with your account, and we'll
                    send a magic link to your inbox.
                  </p>
                </Modal.Description>
                <SignInForm />
              </Modal.Content>
              <p style={{ padding: 30, size: 18 }}>
                <Button style={{ cursor: "pointer",background:'none',color:'blue' }} onClick={this.close}>
                  <Icon name="angle left" /> All sign in option
                </Button>
              </p>
            </Grid.Column >

            <Grid.Column width={5}>
              <Responsive as={Image} minWidth={768}></Responsive>
            </Grid.Column>
          </GridRow>
        </Grid>
      </Modal>
    );
  }
}

const ModalLogin = () => (
  <Modal trigger={<Button>Sign Up</Button>} dimmer="inverted">
    <Grid columns={3} stackable size="large" verticalAlign="top" centered>
      <Grid.Row>
        <Grid.Column width={5}>
          <Responsive as={Image} minWidth={768}>
            <Image
              src="/logoLeft.png"
              fluid
              floated="left"
              verticalAlign="top"
            />
          </Responsive>
        </Grid.Column>

        <Grid.Column textAlign="center" verticalAlign="middle" width={6}>
          <Modal.Content>
            <Modal.Description>
              <Header style={{ textSize: "34px" }}>Join Medium</Header>
              <p style={{ padding: 10 }}>
                Create an account to receive great stories in your inbox,
                personalize your homepage, and follow authors and topics that
                you love.
              </p>
            </Modal.Description>
            <LoginForm />
          </Modal.Content>
          <p style={{ padding: 10 }}>
            Already have an account? <NestedModal />
          </p>
          <p style={{ paddingTop: 10 }}>
            To make Medium work, we log user data and share it with service
            providers. Click “Registration” above to accept Medium’s Terms of
            Service & Privacy Policy.
          </p>
        </Grid.Column>

        <Grid.Column floated="right" width={5}>
          <Responsive as={Image} minWidth={768}>
            <Image src="/logoRight.png" floated="right" size="medium" />
          </Responsive>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Modal>
);

export default ModalLogin;
