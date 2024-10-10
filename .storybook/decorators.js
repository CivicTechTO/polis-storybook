import React from 'react'
import { ThemeProvider } from 'theme-ui'
import compdemAdminTheme from '../codebases/compdem/client-admin/src/theme'
import haiDelibTheme from '../codebases/UT-HAI/client-deliberation/src/theme'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from '../codebases/compdem/client-admin/src/store'

const store = configureStore()

export const withThemeUi = (Story) => (
  <ThemeProvider theme={compdemAdminTheme}>
    <Story />
  </ThemeProvider>
)

export const withDelibThemeUi = (Story) => (
  <ThemeProvider theme={haiDelibTheme}>
    <Story />
  </ThemeProvider>
)

export const withRedux = (Story) => (
  <ReduxProvider store={store}>
    <Story />
  </ReduxProvider>
)

export const svgDecorator = (Story) => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="100">
    <Story />
  </svg>
)
