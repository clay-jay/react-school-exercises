import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import svgSpaceImage from "../images/spaceSketched.svg"

export default function TemplateTwo() {
  return (
    <div>
      <Grid container alignItems='center'>
        <Grid item xs>
          <img src={svgSpaceImage} alt="sketched space" />
        </Grid>
        <Grid item xs>
          <Typography variant="h1" align="center">
            h1 Text
          </Typography>
          <Typography variant="h3" align="center">
            h3 Text
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}
