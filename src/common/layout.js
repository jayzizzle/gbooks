import styled from 'styled-components'

export const fontSize = n => {
  switch (n) {
    case 1:
      return 'font-size: 12px; line-height: 16px;'
    case 2:
      return 'font-size: 14px; line-height: 18px;'
    case 3:
      return 'font-size: 18px; line-height: 22px;'
    case 4:
      return 'font-size: 24px; line-height: 32px;'
    case 5:
      return 'font-size: 32px; line-height: 40px;'
    default:
      return 'font-size: 14px; line-height: 18px;'
  }
}

export const Div = styled.div`
  color: ${props => props.color || 'inherit'};
  ${props => fontSize(props.size || 2)};
  ${props => props.css || ''};
`

export const Header = styled.div`
  font-family: Roboto Condensed;
  font-weight: ${props => props.fontWeight || 700};
  ${props => fontSize(props.size || 4)};
  ${props => props.css || ''};
`
