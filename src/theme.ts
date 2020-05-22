import { createMuiTheme } from '@material-ui/core/styles'
import * as colors from './colours'

const theme = createMuiTheme()

export default createMuiTheme({
  palette: {
    primary: {
      light: colors.PRIMARY_SELECTED,
      main: colors.PRIMARY_MAIN,
      dark: colors.PRIMARY_PRESSED
    },
    secondary: {
      light: colors.SECONDARY_SELECTED,
      main: colors.SECONDARY_MAIN,
      dark: colors.SECONDARY_PRESSED
    },
    text: {
      primary: colors.TEXT_PRIMARY,
      secondary: colors.TEXT_SECONDARY,
      disabled: colors.TEXT_DISABLED
    }
  },
  typography: {
    fontFamily: [
      "'Montserrat'",
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      'sans-serif'
    ].join(', '),
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
})
