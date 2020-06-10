import React from 'react';
import { addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import theme from '../src/theme';
import { withA11y } from '@storybook/addon-a11y';

// Set the theme provider for all stories
addDecorator(muiTheme(theme));
addDecorator(withA11y);