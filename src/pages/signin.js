import React, { useState, useContext } from 'react'
import { FireBaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'

function Signin() {
  const { firebase } = useContext(FireBaseContext)
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isInvalid = password === '' || emailAddress === ''

  const handleSignin = (event) => {
    event.preventDefault()

    //Firebase work
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {})
      .catch((error) => {
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form onSubmit={handleSignin} method='POST'>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base>
            <Form.Input
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              type='password'
              placeholder='password'
              autocomplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type='submit'>
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protecte by Google reCAPTCHA to ensure you are not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

export default Signin
