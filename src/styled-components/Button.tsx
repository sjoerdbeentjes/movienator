import styled, { css } from '../styled-components'
const isDarkColor = require('is-dark-color')

const buttonStyles = css`
  display: inline-block;
  padding: 0.5rem;
  border-radius: ${props => props.theme.borderRadius.small};
  background-color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.normal};
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.primary};
  color: ${props => isDarkColor(props.theme.colors.primary) ? '#fff' : '#000' };
`

export const Button = styled.button`
  ${buttonStyles}
`

export const LinkButton = styled.a`
  ${buttonStyles}
  text-decoration: none;
`