import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import spaceImage from "../images/space.jpg"
import Header from "../components/header"
import "../styles/main.css"

export default function TemplateOne() {
  return (
    <div className="gridContainer">
      <Header siteTitle="Шаблон №1" />
      <Grid container alignItems="center">
        <Grid item lg>
          <Typography variant="h1" align="center">
            h1 Text
          </Typography>
          <Typography variant="h3" align="center">
            h3 Text
          </Typography>
        </Grid>
        <Grid item lg>
          <img className="centerImage" alt="view from moon" src={spaceImage} />
        </Grid>
      </Grid>
    </div>
  )
}
