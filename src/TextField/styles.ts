import { Theme } from '@material-ui/core/styles';
import { GREY_1, GREY_2, GREY_3, PRIMARY_FOCUS, UI_ERROR } from '../colours';

export function labelStyles(_theme: Theme) {
  return {
    root: {
      height: '18px',
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '18px',
      color: '#212223'
    },
    shrink: {
      transform: 'translate(0, 0) scale(1)'
    }
  };
}

export function helperStyles(theme: Theme) {
  return {
    root: {
      height: '18px',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '18px',
      color: theme.palette.text.secondary,
      marginTop: '24px'
    }
  };
}

export function inputStyles(theme: Theme) {
  return {
    root: {
      '& .MuiOutlinedInput-input': {
        padding: 0
      },
      '& .MuiOutlinedInput-root': {
        padding: '10px 12px'
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${GREY_2}`,
        borderRadius: 2,
        '&:hover': {
          borderWidth: '2px',
          borderColor: GREY_3,
          borderRadius: '2px'
        },
        '&:focus': {
          borderWidth: '2px',
          borderColor: PRIMARY_FOCUS,
          borderRadius: '4px'
        },
        '&:error': {
          border: `2px solid ${UI_ERROR}`,
          borderRadius: '2px',
          color: UI_ERROR
        },
        '&:disabled': {
          background: GREY_1,
          border: `1px solid ${GREY_1}`,
          borderRadius: '2px'
        }
      },
      '& .MuiInputBase-input': {
        backgroundColor: theme.palette.secondary.main
      },
      fontSize: 16,
      minWidth: '200px',
      backgroundColor: theme.palette.secondary.main
    }
  };
}
