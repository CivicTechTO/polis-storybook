import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../polis/client-admin/src/theme'

export const withThemeUi = (Story) => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
)