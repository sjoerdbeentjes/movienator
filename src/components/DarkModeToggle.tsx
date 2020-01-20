import React from 'react'
import { ReactComponent as MoonIcon } from '../icons/moon.svg'
import { ReactComponent as SunIcon } from '../icons/sun.svg'
import styled from '../styled-components';

const Wrapper = styled.div`
  width: 4em;
  height: 4rem;
  position: absolute;
  right: 0.5em;
  top: 0.5rem;
  transition: transform 0.2s;
  
  &:hover {
    transform: rotate(-20deg);
  }
`

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: 1rem;
  outline: none;
  
  svg {
    stroke: ${props => props.theme.colors.text};
    width: 100%;
    height: 100%;
  }
`

const DarkModeToggle = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: Function }) => (
  <Wrapper>
    { darkMode ? (
        <IconButton onClick={() => setDarkMode(false)}><SunIcon /></IconButton>
      ) : (
        <IconButton onClick={() => setDarkMode(true)}><MoonIcon /></IconButton>
    )}
  </Wrapper>
)

export default DarkModeToggle