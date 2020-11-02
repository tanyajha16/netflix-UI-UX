import React, { useContext, useEffect, useState } from 'react'
import { FireBaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
import { Header, Loading } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

function BrowseContainer({ slides }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const { firebase } = useContext(FireBaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    console.log(profile)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src='joker1' dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            ></Header.Search>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                //
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                //
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
                //
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in the crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, asd the guise
            he projects ina futile sttempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}

export default BrowseContainer