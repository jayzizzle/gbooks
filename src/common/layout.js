import styled from 'styled-components'

export const Rows = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  ${props => props.css || ''};
`

export const Row = styled.div`
  position: relative;
  ${props => (props.height ? `height: ${props.height}px;` : '')}
  ${props => props.css || ''};
`

export const Cols = styled.div`
  position: relative;
  display: flex;
  ${props => props.css || ''};
`

export const Col = styled.div`
  position: relative;
  ${props => (props.width ? `height: ${props.width}px;` : '')}
  ${props => props.css || ''};
`
