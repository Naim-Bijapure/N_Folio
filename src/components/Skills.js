import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const colorList = [
  "#FF355E",
  "#FC74FD",
  "#FF6D3A",
  "#FFFF38",
  "#A6E7FF",
  "#FFD3F8",
  "#87FF2A",
  "#0066FF",
  "#9400d3",
  "#00ff00",
]

const Container = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 60vh;
  margin-top: -2rem;
`

const Description = styled.p`
  padding: 0;
  margin-top: 2rem;
  font-size: 1rem;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

  /* border-radius: 10px;
  background: #e0e0e0;
  box-shadow: inset 5px 5px 23px #c1c1c1, inset -5px -5px 23px #ffffff; */

  background: ${(props) => props.theme.background.primary};
  border-radius: 10px;
  box-shadow: -6px -6px 16px #fff, 6px 6px 16px #d1cdc7;

  /* border: 1px solid red; */
`

const Button = styled.div`
  /* color: ${(props) => props.theme.color.primary}; */
  color: black;
  padding: 0.5rem;
  margin: 0.2rem;
  border: 3px solid gray;

  border-radius: 15px;
  background: ${(props) => colorList[props.number]};
  box-shadow: inset -2px -2px 0px #c6c6c6, inset 3px 3px 0px #f6f6f6;
`

const SkillList = [
  "Javascript",
  "Typescript",
  "Python",
  "Dart",
  "PHP",
  "Nodejs",
  "Reactjs",
  "Angular",
  "Vuejs",
  "Ionic",
  "Html",
  "Css",
  "AWS",
  "Docker",
  "MongoDB",
  "Mysql",
  "Graphql",
]

// let randmoColor = colorList[Math.floor(Math.random() * 6 + 1)]

const Skills = () => (
  <OuterContainer>
    <Container>
      <Title>Skills</Title>
      <Description>
        {SkillList.map((skill, i) => {
          return (
            <Button
              number={Math.floor(Math.random() * colorList.length)}
              data-sal="flip-up"
              data-sal-delay={100 * i}
              data-sal-duration={100 * i}
              data-sal-easing="ease-out-back"
              data-sal-repeat
            >
              {skill}
            </Button>
          )
        })}
      </Description>
    </Container>
  </OuterContainer>
)

export default Skills
