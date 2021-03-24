import React from "react"
import GridImageComponent from "../components/gridImageComponent"
import GridSvgComponent from "../components/gridSvgComponent"
import Header from "../components/header"
import TemplateThree from "../components/template3"

export default function Combination() {
  return (
    <div>
      <Header siteTitle="Combination" />
      <GridImageComponent text="sometext" />
      <GridSvgComponent />
      <TemplateThree />
    </div>
  )
}
