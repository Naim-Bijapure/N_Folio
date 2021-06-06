import { graphql } from "gatsby"
import React from "react"
// import NImage from "../project_images/project-1.png"

export default function TestPage({ data }) {
  // console.log(
  //   "🚀 -> TestPage -> data",
  //   data["allFile"]["edges"][0]["node"]["dir"]
  // )
  let imgPath = `${data["allFile"]["edges"][0]["node"]["dir"]}/project-1.png`
  console.log("🚀 -> TestPage -> imgPath", imgPath)
  // let N = require(`${imgPath}`)
  // console.log("🚀 -> TestPage ->  N", N)
  return (
    <div>
      <div>cool</div>
      {/* <img src={N} alt="cool" /> */}
    </div>
  )
}
export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "project_images" } }) {
      edges {
        node {
          extension
          dir
          modifiedTime
        }
      }
    }
  }
`
