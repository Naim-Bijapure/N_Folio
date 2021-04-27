import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import GithubIcon from "../icons/github.svg"
import FacebookIcon from "../icons/facebook.svg"
import TwitterIcon from "../icons/twitter.svg"
import InstagramIcon from "../icons/instagram.svg"

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
  font-size: 1.3rem;
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

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`

const IconLink = styled.a`
  font-size: 1rem;
  margin: 0.5rem;
  /* padding: 1rem; */
  height: 2.5rem;
  width: 2.5rem;

  /* border: 1px solid red; */

  /* background: #efeeee; */

  background: ${(props) => props.theme.background.primary};
  border-radius: 10px;
  box-shadow: -6px -6px 16px #fff, 6px 6px 16px #d1cdc7;
  &:active {
    box-shadow: inset -6px -6px 16px #fff, inset 6px 6px 16px #d1cdc7;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`
const Icon = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
  /* border: 1px solid red; */
  margin-bottom: 0;
`

const Email = styled.a`
  color: ${(props) => props.theme.color.primary};
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
          data-sal-once
        >
          <HeaderText>Hi,It's</HeaderText>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          <SocialIcons>
            <IconLink href="#">
              <Icon>
                <GithubIcon />
              </Icon>
            </IconLink>

            <IconLink>
              <Icon>
                <FacebookIcon />
              </Icon>
            </IconLink>

            <IconLink>
              <Icon>
                <TwitterIcon />
              </Icon>
            </IconLink>

            <IconLink>
              <Icon>
                <InstagramIcon />
              </Icon>
            </IconLink>
          </SocialIcons>
          <Email href={"mailto:naimbijapure@gmail.com"}>
            naimbijapure@gmail.com
          </Email>
          {/* <div>Download CV</div> */}
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
