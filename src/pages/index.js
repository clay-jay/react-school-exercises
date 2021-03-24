import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/main.css"

const IndexPage = () => (
  <Layout>
    <h1>Lazy Tasks</h1>
    <p className="textLevels">Уровень 1</p>
    <p className="textExercise">
      <Link to="/bigBackground/">Большой Фон</Link> <br />
      <Link to="/template1/">Шаблон №1</Link> <br />
      <Link to="/template2">Шаблон №2</Link> <br />
      <Link to="/combination/">Объединение</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
