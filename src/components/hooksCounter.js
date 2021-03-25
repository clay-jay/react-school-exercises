import React from "react"
import Button from "@material-ui/core/Button"
import { useState } from "react"
import Typography from "@material-ui/core/Typography"

export default function HooksCounter() {
  const [clickCount, setCount] = useState(0)

  return (
    <div>
      <Typography variant="h4">You clicked: {clickCount} times</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(clickCount + 1)}
      >
        Click me
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setCount(0)}
        style={{ marginLeft: "100px" }}
      >
        Reset
      </Button>
    </div>
  )
}
