import React from 'react'
import { ThemeProvider } from 'theme-ui'
import compdemAdminTheme from '../codebases/compdem/client-admin/src/theme'
import haiDelibTheme from '../codebases/UT-HAI/client-deliberation/src/theme'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from '../codebases/compdem/client-admin/src/store'
import { MemoryRouter } from 'react-router'
import { getAcceptedComments, getRejectedComments, getUnmoderatedComments } from './utils'

const store = configureStore({
  mod_comments_unmoderated: getUnmoderatedComments(),
  mod_comments_accepted: getAcceptedComments(),
  mod_comments_rejected: getRejectedComments()
})

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

// If we need more, there's an old addon for React Router v5.
// See: https://github.com/gvaldambrini/storybook-router
//
// If we ever migrate to React Router v6, we can use the new addon.
// See: https://github.com/JesusTheHun/storybook-addon-remix-react-router
export const withRouter = (Story) => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
)
