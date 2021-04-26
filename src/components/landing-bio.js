import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 50vh;

  /* neumorphism effect */
  border-radius: 22px;
  box-shadow: 5px 5px 9px #c5c5c5, -5px -5px 9px #fbfbfb;

  background: ${(props) => props.theme.background.primary};
  /* border: 1px solid red; */
`

const Description = styled.p`
  color: ${(props) => props.theme.color.primary};
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const AboutMe = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1rem;
`

const NameHeader = styled.h3`
  color: #454545;
  font-size: 2rem;
  margin-bottom: 4px;
`
const HeaderText = styled.h3`
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 2px;
  /* border: 1px solid red; */
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <OuterContainer>
        <Container
          data-sal="zoom-in"
          data-sal-delay="200"
          data-sal-duration="1000"
          data-sal-easing="ease-out-back"
        >
          <HeaderText>Hi,It's</HeaderText>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
