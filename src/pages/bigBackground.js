import React from "react"
import backgroundImage from "../images/backgroundImage.jpg"
import "../styles/main.css"

export default function BigBackGround() {
  return (
    <div
      className="bgImage"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      Большой Фон с текстом
    </div>
  )
}
