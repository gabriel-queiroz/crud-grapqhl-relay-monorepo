import React, { FC } from 'react'
import { Container, Title, Description } from './Heading.styles'
type HeadingType = {
  title: string
  description: string
}

export const Heading: FC<HeadingType> = ({ title, description }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
)
