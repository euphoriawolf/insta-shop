import React from "react";
import { Paper, Grid, Typography, Avatar, withStyles } from "@material-ui/core";
import ProfileStyle from "../assets/jss/components/ProfileStyle";

const Profile = ({ classes }) => (
  <div className={classes.root}>
    <Paper elevation={1} className={classes.paper}>
      <Grid
        container
        alignItems="center"
        justify="space-around"
        className={classes.container}
      >
        <Grid item>
          <Avatar
            alt="derrick's profile"
            src="https://instagram.flos5-1.fna.fbcdn.net/vp/a365baaf5d4b582a49286f22170b2415/5BD324DB/t51.2885-19/s150x150/20184784_277167179429968_6909898223670788096_a.jpg?_nc_eui2=AeFKYIKMpd8JEcROdKMMRnTbG-6YzLUh7i_JRrvHyuY7zMpNqhYj4DPA8qBQzr8XQZSLukMOGqLmcuIqUFAz4fMS7UD1ApheC5KvZB5uu5pWxQ"
            className={classes.avatar}
          />
        </Grid>
        <Grid item>
          <div>
            <Typography variant="subheading">@metaderrick</Typography>
            <Typography>
              this is derrick's demo store for the shopfeed products
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  </div>
);

export default withStyles(ProfileStyle)(Profile);
