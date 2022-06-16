import React from 'react'
import styled from 'styled-components'

const bgColor = {
  dark: '#1a1a1a',
  muted: '#222',
  base: '#333',
  highlighted: '#444',
}

const max = `
  position: absolute;
  min-height: 100%;
  min-width: 100%;
`

const autoSize = `
  height: 100%;
  width: 100%;
`

const StyledPanels = styled.div`
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  ${props => (props.flex ? 'flex: 1 1 0%;' : '')}
  position: absolute;
  ${props => (props.autoSize ? autoSize : '')}
  ${props => props.css || ''};
`

const StyledPanel = styled.div`
  position: relative;
  padding: 8px;
  ${props => (props.dark ? `background: ${bgColor.dark}` : '')}
  ${props => (props.muted ? `background: ${bgColor.muted}` : '')}
  ${props => (props.highlighted ? `background: ${bgColor.highlighted}` : '')}
  ${props => (props.flex ? 'flex: 1 1 0%;' : '')}
  ${props => props.css || ''};
`

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

export const Panels = ({ autoSize, flex, vertical, css, children }) => (
  <StyledPanels
    autoSize={autoSize ? 1 : 0}
    flex={flex ? 1 : 0}
    vertical={vertical ? 1 : 0}
    css={css}
  >
    {children}
  </StyledPanels>
)

export const Panel = ({ flex, dark, muted, highlighted, css, children }) => (
  <StyledPanel
    flex={flex}
    dark={dark}
    muted={muted}
    highlighted={highlighted}
    css={css}
  >
    {children}
  </StyledPanel>
)

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
