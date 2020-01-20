import React from 'react'
import { ReactComponent as MoonIcon } from '../icons/moon.svg'
import { ReactComponent as SunIcon } from '../icons/sun.svg'
import styled from '../styled-components';

const Wrapper = styled.div`
  width: 3em;
  height: 3rem;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform 0.2s;

  svg {
    stroke: ${props => props.theme.colors.text};
    width: 100%;
    height: 100%;
  }

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
  padding: 0.75rem;
  outline: none;
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