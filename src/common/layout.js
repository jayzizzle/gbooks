import React from 'react'
import styled from 'styled-components'

const StyledRows = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${props => (props.max ? maxRow : '')}
  ${props => props.css || ''};
`

const maxRow = `
  position: absolute;
  min-height: 100%;
  min-width: 100%;
`

export const Rows = ({ max, css, children }) => (
  <StyledRows max={max ? 1 : 0} css={css}>
    {children}
  </StyledRows>
)

export const Row = styled.div`
  ${props => (props.height ? `height: ${props.height}px;` : '')}
  ${props => props.css || ''};
`

export const Cols = styled.div`
  display: flex;
  ${props => props.css || ''};
`

export const Col = styled.div`
  ${props => (props.width ? `height: ${props.width}px;` : '')}
  ${props => props.css || ''};
`
