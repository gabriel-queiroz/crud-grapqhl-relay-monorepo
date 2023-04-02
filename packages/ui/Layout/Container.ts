import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.breakPoint.LG};
  @media (max-width: ${props => props.theme.breakPoint.LG}) {
    margin: 0 ${props => props.theme.spacing.XS_4};
  }
`
