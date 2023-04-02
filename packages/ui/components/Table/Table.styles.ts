import styled from 'styled-components'

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: ${props => props.theme.color.BLACK_400};
  font-size: ${props => props.theme.fontSize.LG};
  line-height: 1.5;
  background-color: ${props => props.theme.color.WHITE_0};
  border: 1px solid ${props => props.theme.color.WHITE_300};
`

export const Th = styled.th`
  text-align: inherit;
  border-bottom: 2px solid ${props => props.theme.color.WHITE_300};
  padding: ${props => props.theme.spacing.XS_2};
  vertical-align: bottom;
`

export const Td = styled.td`
  text-align: inherit;
  padding: ${props => props.theme.spacing.XS_2};
  border-top: 1px solid ${props => props.theme.color.WHITE_300};
`

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${props => props.theme.color.WHITE_100};
  }
`
