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
    marginLeft: theme.spacing.unit,
    [theme.breakpoints.up("md")]: {
      width: 150,
      height: 150
    }
  },
  container: {
    paddingTop: theme.spacing.unit * 5,
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing.unit * 8
    }
  },
  about: {
    display: "flex",
    marginLeft: theme.spacing.unit,
    flexDirection: "column",
    justifyContent: "space-around",
    height: 100
  }
});

export default style;
