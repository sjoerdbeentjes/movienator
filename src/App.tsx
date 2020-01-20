import React, { useState, Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from './styled-components';
import { theme } from './theme'
import DarkModeToggle from './components/DarkModeToggle';

const Home =  lazy(() => import('./views/Home'))
const Movie = lazy(() => import('./views/Movie'))

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

  @font-face {
    font-family: 'staatlichesregular';
    src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2');
    font-weight: normal;
    font-style: normal;
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
  const [darkMode, setDarkmode] = useState(false)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme, colors: darkMode ? theme.darkColors : theme.colors }}>
        <AppWrapper>
          <DarkModeToggle darkMode={darkMode} setDarkMode={() => setDarkmode(!darkMode)} />
          <Suspense fallback=''>
            <BrowserRouter>
              <Switch>
                <Route path="/movie/:id" render={() => <Movie />} />
                <Route path="/" render={() => <Home />} />
              </Switch>
            </BrowserRouter>
          </Suspense>
        </AppWrapper>
      </ThemeProvider>
    </>
  )
};

export default App;
