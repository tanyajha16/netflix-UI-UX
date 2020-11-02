import React, { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
  Container,
  Background,
  ButtonLink,
  Feature,
  Logo,
  FeatureCallOut,
  Text,
  Link,
  Group,
  Picture,
  Profile,
  Dropdown,
  SearchIcon,
  Search,
  SearchInput,
  PlayButton,
} from './styles/header'

function Header({ bg = true, children, ...restProps }) {
  return bg === true ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    children
  )
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm }) {
  const [searchActive, setSearchActive] = useState(false)
  return (
    <Search>
      <SearchIcon onClick={() => setSearchActive((prevState) => !prevState)}>
        <img src='/images/icons/search.png' alt='Search' />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder='Search films and series'
        active={searchActive}
      />
    </Search>
  )
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({ ...restProps }) {
  return <Picture {...restProps} />
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}

export default Header
