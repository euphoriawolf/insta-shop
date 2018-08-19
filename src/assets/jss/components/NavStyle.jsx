const styles = theme => ({
  root: {
    flexGrow: 1
  },
  toolBar: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing.unit * 14,
      paddingRight: theme.spacing.unit * 14
    }
  },
  name: {
    flexGrow: 1,
    textAlign: "center"
  }
});

export default styles;
