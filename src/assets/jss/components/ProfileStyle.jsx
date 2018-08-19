const style = theme => ({
  root: {
    marginTop: theme.spacing.unit * 5
  },
  paper: {
    minHeight: "260px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      minHeight: "200px"
    }
  },
  avatar: {
    width: 100,
    height: 100,
    [theme.breakpoints.up("md")]: {
      width: 150,
      height: 150
    }
  },
  container: {
    paddingTop: theme.spacing.unit * 8
  }
});

export default style;
