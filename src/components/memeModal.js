import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import MemeImage from "../images/meme.png"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "100px",
    left: "40%",
  },
}))

export default function MemeModal() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div className={classes.paper}>
      <img src={MemeImage} alt="meme" />
    </div>
  )

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleOpen}
        style={{ marginLeft: "-100px" }}
      >
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  )
}
