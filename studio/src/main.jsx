import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { StudioProvider, StudioLayout } from 'sanity'
import config from '../sanity.config'

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #fafafa;
  }
  body {
    margin: 0;
  }
`

const root = createRoot(document.getElementById('root'))
root.render(
  <StudioProvider config={config}>
    <GlobalStyle />
    <StudioLayout />
  </StudioProvider>
) 