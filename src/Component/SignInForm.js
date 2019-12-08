
import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const SignInForm = () => (
  <Form size='huge'>
    <Form.Field>
      <input placeholder='Your Email' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Your Password' />
    </Form.Field>
    <Button secondary type='Registration'>Continue</Button>
  </Form>
)

export default SignInForm
