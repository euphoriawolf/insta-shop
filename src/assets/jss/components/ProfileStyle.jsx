const style = theme => ({
  root: {
    marginTop: theme.spacing.unit * 10
  },
  paper: {
    minHeight: "200px",
    width: "100%"
    // width: 1000
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
    flexWrap: "nowrap"
  }
});

export default style;
