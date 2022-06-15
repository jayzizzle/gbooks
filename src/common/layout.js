import React from 'react'
import styled from 'styled-components'

const StyledRows = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${props => (props.max ? max : '')}
  ${props => props.css || ''};
`

const StyledRow = styled.div`
  position: relative;
  ${props => (props.height ? `height: ${props.height}px;` : '')}
  ${props => props.css || ''};
`

const StyledCols = styled.div`
  display: flex;
  position: relative;
  ${props => props.css || ''};
`

const StyledCol = styled.div`
  position: relative;
  ${props => (props.width ? `width: ${props.width}px;` : '')}
  ${props => props.css || ''};
`

const max = `
  position: absolute;
  min-height: 100%;
  min-width: 100%;
`

export const Rows = ({ max, css, children }) => (
  <StyledRows max={max ? 1 : 0} css={css}>
    {children}
  </StyledRows>
)

export const Row = ({ height, css, children }) => (
  <StyledRow height={height} css={css}>
    {children}
  </StyledRow>
)

export const Cols = ({ max, css, children }) => (
  <StyledCols max={max ? 1 : 0} css={css}>
    {children}
  </StyledCols>
)

export const Col = ({ width, css, children }) => (
  <StyledCol width={width} css={css}>
    {children}
  </StyledCol>
)
