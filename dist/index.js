var styles = require('@material-ui/core/styles');

var PRIMARY_MAIN = '#073067';
var PRIMARY_SELECTED = '#286FCD';
var PRIMARY_PRESSED = '#051E3D';
var SECONDARY_MAIN = '#FFFFFF';
var SECONDARY_SELECTED = '#F3F8FF';
var SECONDARY_PRESSED = '#DFEDFF';
var TEXT_PRIMARY = '#000000';
var TEXT_SECONDARY = 'rgba(0, 6, 10, 0.6)';
var TEXT_DISABLED = 'rgba(0, 0, 0, 0.38)';

var _h, _h2, _h3, _h4, _h5, _h6, _button;
var theme = styles.createMuiTheme();
var theme$1 = styles.createMuiTheme({
  palette: {
    primary: {
      light: PRIMARY_SELECTED,
      main: PRIMARY_MAIN,
      dark: PRIMARY_PRESSED
    },
    secondary: {
      light: SECONDARY_SELECTED,
      main: SECONDARY_MAIN,
      dark: SECONDARY_PRESSED
    },
    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
      disabled: TEXT_DISABLED
    }
  },
  typography: {
    fontFamily: ["'Montserrat'", 'sans-serif'].join(', '),
    h1: (_h = {
      fontWeight: 500,
      fontSize: '56px',
      lineHeight: '48px',
      fontStyle: 'normal'
    }, _h[theme.breakpoints.up('sm')] = {
      fontSize: '74px',
      lineHeight: '68px'
    }, _h[theme.breakpoints.up('md')] = {
      fontSize: '86px',
      lineHeight: '80px'
    }, _h[theme.breakpoints.up('lg')] = {
      fontSize: '96px',
      lineHeight: '88px'
    }, _h),
    h2: (_h2 = {
      fontWeight: 500,
      fontSize: '38px',
      lineHeight: '42px',
      fontStyle: 'normal'
    }, _h2[theme.breakpoints.up('sm')] = {
      fontSize: '48px',
      lineHeight: '48px'
    }, _h2[theme.breakpoints.up('md')] = {
      fontSize: '52px',
      lineHeight: '54px'
    }, _h2[theme.breakpoints.up('lg')] = {
      fontSize: '62px',
      lineHeight: '64px'
    }, _h2),
    h3: (_h3 = {
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '36px',
      fontStyle: 'normal'
    }, _h3[theme.breakpoints.up('sm')] = {
      fontSize: '40px',
      lineHeight: '42px'
    }, _h3[theme.breakpoints.up('md')] = {
      fontSize: '44px',
      lineHeight: '44px'
    }, _h3[theme.breakpoints.up('lg')] = {
      fontSize: '48px',
      lineHeight: '48px'
    }, _h3),
    h4: (_h4 = {
      fontWeight: 500,
      fontSize: '26px',
      lineHeight: '32px',
      fontStyle: 'normal'
    }, _h4[theme.breakpoints.up('sm')] = {
      fontSize: '32px',
      lineHeight: '34px'
    }, _h4[theme.breakpoints.up('md')] = {
      fontSize: '32px',
      lineHeight: '40px'
    }, _h4[theme.breakpoints.up('lg')] = {
      fontSize: '34px',
      lineHeight: '38px'
    }, _h4),
    h5: (_h5 = {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '24px',
      fontStyle: 'normal'
    }, _h5[theme.breakpoints.up('sm')] = {
      fontSize: '24px',
      lineHeight: '28px'
    }, _h5[theme.breakpoints.up('md')] = {
      fontSize: '24px',
      lineHeight: '28px'
    }, _h5[theme.breakpoints.up('lg')] = {
      fontSize: '24px',
      lineHeight: '28px'
    }, _h5),
    h6: (_h6 = {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '24px',
      fontStyle: 'normal'
    }, _h6[theme.breakpoints.up('sm')] = {
      fontSize: '20px',
      lineHeight: '24px'
    }, _h6[theme.breakpoints.up('md')] = {
      fontSize: '20px',
      lineHeight: '24px'
    }, _h6[theme.breakpoints.up('lg')] = {
      fontSize: '20px',
      lineHeight: '24px'
    }, _h6),
    body1: {
      fontSize: '16px',
      lineHeight: '20px',
      fontStyle: 'normal'
    },
    body2: {
      fontSize: '14px',
      lineHeight: '18px',
      fontStyle: 'normal'
    },
    caption: {
      fontSize: '12px',
      lineHeight: '14px',
      letterSpacing: '0.2px'
    },
    overline: {
      fontWeight: 'bold',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      fontStyle: 'normal'
    },
    button: (_button = {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '0.1em',
      fontStyle: 'normal'
    }, _button[theme.breakpoints.up('md')] = {
      fontSize: '16px',
      lineHeight: '18px',
      letterSpacing: '0.1em'
    }, _button[theme.breakpoints.up('lg')] = {
      fontSize: '20px',
      lineHeight: '24px',
      letterSpacing: '0.08em'
    }, _button)
  }
});

exports.theme = theme$1;
//# sourceMappingURL=index.js.map
