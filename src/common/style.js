import styled from 'styled-components'

const StyledDiv = styled.div`
  color: ${props => props.color || 'inherit'};
  ${props => fontSize(props.size || 2)};
  ${props => props.css || ''};
`

const StyledLabel = styled.div`
  font-family: Roboto Condensed;
  color: ${props => props.color || 'inherit'};
  font-weight: ${props => props.fontWeight || 700};
  ${props => fontSize(props.size || 2)};
  ${props => props.css || ''};
`

export const color = {
  orange: '#FEB062',
  teal: '#8CBEAA',
  maroon: '#BE7575',
  seafoam: '#C2E8CE',
  dark: '#1A1A1A',
  muted: '#222',
  base: '#333',
  baseText: '#EEE',
  highlighted: '#444',
}

export const fontSize = n => {
  switch (n) {
    case 1:
      return 'font-size: 12px; line-height: 16.8px;'
    case 2:
      return 'font-size: 16px; line-height: 22.4px;'
    case 3:
      return 'font-size: 18px; line-height: 25.2px;'
    case 4:
      return 'font-size: 26px; line-height: 36.4px;'
    case 5:
      return 'font-size: 32px; line-height: 44.8px;'
    default:
      return 'font-size: 14px; line-height: 18px;'
  }
}

export const Div = ({ color, size, css, children }) => (
  <StyledDiv color={color} size={size} css={css}>
    {children}
  </StyledDiv>
)

export const Label = ({ color, fontWeight, size, css, children }) => (
  <StyledLabel color={color} fontWeight={fontWeight} size={size} css={css}>
    {children}
  </StyledLabel>
)
