import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.theme.color.BLUE_500};
  color: ${props => props.theme.color.WHITE_0};
  padding: ${props => props.theme.spacing.XS_3};
  border: none;
  border-radius: ${props => props.theme.radius.XS};
  font-size: ${props => props.theme.fontSize.MD};
  cursor: pointer;

  &:hover {
    transition: linear 100ms;
    background-color: ${props => props.theme.color.BLUE_600};
  }
`
