import { container } from "../indexStyle";

const ShopPageStyle = theme => ({
  container,
  root: {
    // width: "100%",
    // paddingLeft: "3%",
    // paddingRight: "3%",
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "15%",
      paddingRight: "15%"
    }
  }
});

export default ShopPageStyle;
