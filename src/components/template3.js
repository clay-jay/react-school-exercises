import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import HomeIcon from "@material-ui/icons/Home"
import Button from "@material-ui/core/Button"

export default function TemplateThree() {
  return (
    <React.Fragment>
      <Grid container justify="center" spacing={8}>
        <Grid item>
          <Typography variant="h5">Button and Icon leads Home</Typography>
        </Grid>
        <Grid item>
          <HomeIcon />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" href="/">
            Home
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
