import React, { useState } from 'react'
import styled from 'styled-components'
import { color } from './index'

const StyledInput = styled.input`
  background-color: ${color.dark};
  border: 1px solid #111;
  width: 160px;
  padding: 4px 8px;
  color: ${color.baseText};
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px ${color.orange};
  }
  ${props => props.css || ''};
`

export const Input = ({ placeholder = '', value = '', onChange, css }) => {
  const [text, setText] = useState(value)

  const defaultOnChange = e => setText(e.target.value)

  return (
    <StyledInput
      placeholder={placeholder}
      value={value || text}
      onChange={onChange || defaultOnChange}
      css={css}
    />
  )
}
