import React from "react"
import { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import WinnyThePoohImage from "../images/winnyThePooh.jpg"
import HooksCounter from "./hooksCounter"
import MemeModal from "./memeModal"

export default function MixedAccordion() {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      paddingLeft: "350px",
      paddingRight: "350px",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "40%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    accordionDetailCenter: {
      justifyContent: "center",
    },
  }))

  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Picture</Typography>
          <Typography className={classes.secondaryHeading}>
            My favorite cartoon
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetailCenter}>
          <img src={WinnyThePoohImage} alt="Winny The Pooh and his friends" />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Poem</Typography>
          <Typography className={classes.secondaryHeading}>
            Some random poem
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetailCenter}>
          <Typography style={{ display: "inline-block" }}>
            В жестокий двадцать первый век, <br />
            во время зависти и мести, <br />
            запомни: ты же человек. <br />
            Ты не теряй ни капли чести. <br />
            Когда услышишь грубый смех, <br />
            жестокость, низость - не сломайся; <br />
            ты помни: ты ведь человек... <br />
            Так человеком оставайся. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Youtube</Typography>
          <Typography className={classes.secondaryHeading}>
            Some random youtube video
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetailCenter}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ?start=178' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
            }}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Modal</Typography>
          <Typography className={classes.secondaryHeading}>
            Modal window
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetailCenter}>
          <MemeModal />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Hook Counter</Typography>
          <Typography className={classes.secondaryHeading}>
            Click it as long as you wish
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetailCenter}>
          <HooksCounter />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
