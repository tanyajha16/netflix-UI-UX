import React from 'react'
import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
  Video,
} from './styles/jumbotron'

function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />
}

Jumbotron.Video = function JumbotronVideo({ src, ...restProps }) {
  return (
    <Video>
      <video muted style={{ height: '100%' }} {...restProps}>
        <source src={src} type='video/mp4' />
      </video>
    </Video>
  )
}
export default Jumbotron
