import { createMuiTheme } from '@material-ui/core/styles';

const PRIMARY_MAIN = '#073067';
const PRIMARY_SELECTED = '#286FCD';
const PRIMARY_PRESSED = '#051E3D';
const SECONDARY_MAIN = '#FFFFFF';
const SECONDARY_SELECTED = '#F3F8FF';
const SECONDARY_PRESSED = '#DFEDFF';
const TEXT_PRIMARY = '#000000';
const TEXT_SECONDARY = 'rgba(0, 6, 10, 0.6)';
const TEXT_DISABLED = 'rgba(0, 0, 0, 0.38)';

const theme = createMuiTheme();
var theme$1 = createMuiTheme({
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
    h1: {
      fontWeight: 500,
      fontSize: '56px',
      lineHeight: '48px',
      fontStyle: 'normal',
      [theme.breakpoints.up('sm')]: {
        fontSize: '74px',
        lineHeight: '68px'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '86px',
        lineHeight: '80px'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '96px',
        lineHeight: '88px'
      }
    },
    h2: {
      fontWeight: 500,
      fontSize: '38px',
      lineHeight: '42px',
      fontStyle: 'normal',
      [theme.breakpoints.up('sm')]: {
        fontSize: '48px',
        lineHeight: '48px'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '52px',
        lineHeight: '54px'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '62px',
        lineHeight: '64px'
      }
    },
    h3: {
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '36px',
      fontStyle: 'normal',
      [theme.breakpoints.up('sm')]: {
        fontSize: '40px',
        lineHeight: '42px'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '44px',
        lineHeight: '44px'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '48px',
        lineHeight: '48px'
      }
    },
    h4: {
      fontWeight: 500,
      fontSize: '26px',
      lineHeight: '32px',
      fontStyle: 'normal',
      [theme.breakpoints.up('sm')]: {
        fontSize: '32px',
        lineHeight: '34px'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '32px',
        lineHeight: '40px'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '34px',
        lineHeight: '38px'
      }
    },
    h5: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '24px',
      fontStyle: 'normal',
      [theme.breakpoints.up('sm')]: {
        fontSize: '24px',
        lineHeight: '28px'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
        lineHeight: '28px'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '24px',
        lineHeight: '28px'
      }
    },
    h6: {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '24px',
      fontStyle: 'normal',
      [theme.breakpoints.up('sm')]: {
        fontSize: '20px',
        lineHeight: '24px'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '20px',
        lineHeight: '24px'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '20px',
        lineHeight: '24px'
      }
    },
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
    button: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '0.1em',
      fontStyle: 'normal',
      [theme.breakpoints.up('md')]: {
        fontSize: '16px',
        lineHeight: '18px',
        letterSpacing: '0.1em'
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '20px',
        lineHeight: '24px',
        letterSpacing: '0.08em'
      }
    }
  }
});

export { theme$1 as theme };
//# sourceMappingURL=index.modern.js.map
