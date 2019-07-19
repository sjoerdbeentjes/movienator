import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from './styled-components';
import { theme } from './theme'
import Home from './views/Home';
import About from './views/About';
import Movie from './views/Movie';
import DarkModeToggle from './components/DarkModeToggle';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }
`;

const AppWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.backgrounColor};
  transition: color 0.5s ease, background-color 0.5s ease;
`

const App = () => {
  const [darkMode, setDarkmode] = useState(true)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme, colors: darkMode ? theme.darkColors : theme.colors }}>
        <AppWrapper>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkmode}/>
          <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/movie/:id" component={Movie} />
          </Switch>
          </BrowserRouter>
        </AppWrapper>
      </ThemeProvider>
    </>
  )
};

export default App;
