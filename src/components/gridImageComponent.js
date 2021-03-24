import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import spaceImage from "../images/space.jpg"
import "../styles/main.css"

export default function GridImageComponent(props) {
  return (
    <div className="gridContainer">
      <Grid container alignItems='center' >
        <Grid item xs>
            <Typography variant="h1" align='center'>
                h1 Text
            </Typography>
            <Typography variant="h3" align='center'>
                h3 Text
            </Typography>
        </Grid>
        <Grid item xs>
            <img className="centerImage" alt="view from moon" src={spaceImage}/>
            <Typography variant="h3" align='center'>
                {props.text}
            </Typography>

        </Grid>
      </Grid>
    </div>
  )
}
