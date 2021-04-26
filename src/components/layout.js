/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const MainLayout = styled.div`
  background-color: ${(props) => props.theme.background.primary};
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Love = styled.span`
  color: red;
`
const theme = {
  background: {
    // primary: "#e0e0e0",
    primary: "#efeeee",
  },
  color: {
    primary: "#666666",
    secondary: "#919191",
  },
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Content>
            <main>{children}</main>
          </Content>

          <Footer>
            <div>
              © {new Date().getFullYear()}, made with {<Love>&#10084;</Love>}{" "}
              Built with
            </div>
            <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
          </Footer>
        </MainLayout>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
