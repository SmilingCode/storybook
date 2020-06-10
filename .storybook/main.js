const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    'storybook-addon-material-ui/register',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y'
  ],
  typescript: {
    reactDocgen: 'react-docgen'
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]]
      }
    });
    /**
     * Fix the bug that props are not showing in doc
     */
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader')
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
};
