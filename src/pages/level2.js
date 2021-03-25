import React from "react"
import Header from "../components/header"
import HooksCounter from "../components/hooksCounter"
import LevelTwoIfMap from "../components/levelTwoIfmap"
import LevelTwoMap from "../components/levelTwoMap"

export default function LevelTwo() {
  return (
    <div>
      <Header siteTitle="Map and If Map"/>
      <div style={{marginLeft: '500px'}}>
        <LevelTwoMap />
        <br/>
        <LevelTwoIfMap />
        <br/>
        <HooksCounter />
      </div>
    </div>
  )
}
