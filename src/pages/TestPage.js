import { graphql } from "gatsby"
import React from "react"

export default function TestPage({ data }) {
  console.log("🚀 -> TestPage -> data", data)
  return <div>cool test</div>
}
export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
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
