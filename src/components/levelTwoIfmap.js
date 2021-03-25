import React from "react"
import Chip from "@material-ui/core/Chip"
import { cardColorsList } from "./data"

export default function LevelTwoIfMap() {
  const content = cardColorsList.map((cardListItem, i) => (
    <Chip
      key={cardListItem.id}
      label={i > 1 ? cardListItem.chipLabel : "Black"}
      color="primary"
      style={
        i > 1
          ? { backgroundColor: cardListItem.chipColor }
          : { backgroundColor: "black" }
      }
    />
  ))
  return <div>{content}</div>
}
