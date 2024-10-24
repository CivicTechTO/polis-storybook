import React from 'react'
import { ThemeProvider } from 'theme-ui'
import compdemAdminTheme from '../codebases/compdem/client-admin/src/theme'
import haiDelibTheme from '../codebases/UT-HAI/client-deliberation/src/theme'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from '../codebases/compdem/client-admin/src/store'
import { MemoryRouter } from 'react-router'

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

/**
 *
 * Provide components support for redux-store
 * optionally passing custom initial state, and using default initial state if not passed
 *
 * @example
 * export const MyComponent = () => Template.bind({})
 * MyComponent.parameters = {
 *   store: {
 *     initialState: {
 *       foo: 'bar'
 *     },
 *   }
 * };
 *
 * Source: https://github.com/yannbf/mealdrop/blob/main/.storybook/decorators.tsx#L118
 */
export const withRedux = (Story, { parameters }) => {
  // Creates a store by merging optional custom initialState
  const store = configureStore(parameters.store?.initialState)
  return (
    <ReduxProvider store={store}>
      <Story />
    </ReduxProvider>
  )
}

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
