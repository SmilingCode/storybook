import { addDecorator } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import theme from '../src/theme'

// Set the theme provider for all stories
addDecorator(muiTheme(theme))
