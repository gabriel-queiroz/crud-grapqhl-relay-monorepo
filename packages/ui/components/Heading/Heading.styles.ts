import styled from 'styled-components'

export const Container = styled.div`
  margin: ${props => props.theme.spacing.XS_5} 0;
`

export const Title = styled.h1`
  font-weight: bold;
  color: ${props => props.theme.color.BLACK_300};
  font-size: ${props => props.theme.fontSize.XXXL};
  margin-bottom: ${props => props.theme.spacing.XS_2};
`

export const Description = styled.p`
  font-size: ${props => props.theme.fontSize.LG};
`
