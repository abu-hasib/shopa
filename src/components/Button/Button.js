import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default withStyles((theme) => ({
  root: {
    borderRadius: 4,
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(0.5, 3.5),
    margin: "8px 8px 8px 0",
    fontSize: theme.typography.pxToRem(14),
    textTransform: "capitalize",
    boxShadow: 'none',
    '&:active, &:focus': {
      boxShadow: 'none',
    },
  },
  contained: {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
      '&:hover': {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.getContrastText(theme.palette.primary.light)
      }
  },
  outlined: {
      backgroundColor: theme.palette.success.dark,
      color: "white",
      '&:hover': {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.getContrastText(theme.palette.success.light)
      }
  },
  sizeSmall: {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  },
}))(Button);
