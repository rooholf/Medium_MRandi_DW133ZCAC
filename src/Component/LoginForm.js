
import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const LoginForm = () => (
  <Form size='large'>
    <Form.Field>
      <input placeholder='Your Username' />
    </Form.Field>
    <Form.Field>
      <input placeholder='Your Password' />
    </Form.Field>
    <Form.Field>
        <input placeholder='Your Email' />
    </Form.Field>
    <Button secondary type='Registration' >Sign Up</Button>
  </Form>
)

export default LoginForm
