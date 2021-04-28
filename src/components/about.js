import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 50vh;
  margin-top: -1rem;
`

const Description = styled.p`
  padding: 0;
  margin-top: 2rem;
  font-size: 1.1rem;

  color: ${(props) => props.theme.color.primary};
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const Title = styled.div`
  position: relative;
  top: 1rem;
  height: 2rem;
  width: 15rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 1.2rem;

  color: ${(props) => props.theme.color.secondary};

  background: ${(props) => props.theme.background.primary};
  border-radius: 10px;
  box-shadow: -6px -6px 16px #fff, 6px 6px 16px #d1cdc7;

  /* inside shadow */
  /* box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset; */

  /* border: 1px solid red; */
`

const About = () => (
  <OuterContainer>
    <Container>
      <Title>About Me</Title>
      <Description
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-duration="2000"
        data-sal-easing="ease-out-back"
      >
        Hello !! My name is Naim Bijapure. I'm a full stack web developer who is
        passionate about various web technologies. I like to experiment with
        different web technologies. I have an experience of nearly 2 years
        working with MEAN stack, MERN stack .
      </Description>
    </Container>
  </OuterContainer>
)

export default About
