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
  margin-top: 1rem;
`

const Description = styled.p`
  padding: 0;
  margin-top: 3rem;
  font-size: 1rem;
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
  color: #919191;

  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: inset 5px 5px 23px #c1c1c1, inset -5px -5px 23px #ffffff;

  /* border: 1px solid red; */
`

const About = () => (
  <OuterContainer>
    <Container>
      <Title>About Me</Title>
      <Description
        data-sal="slide-up"
        data-sal-delay="500"
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
