import React from "react"
import Chip from "@material-ui/core/Chip"
import { cardColorsList } from "./data"

function LevelTwoMap() {
  const content = cardColorsList.map(cardListItem => (
    <Chip
      key={cardListItem.id}
      label={cardListItem.chipLabel}
      color="primary"
      style={{ backgroundColor: cardListItem.chipColor }}
    />
  ))
  return <div>{content}</div>
}

export default LevelTwoMap
