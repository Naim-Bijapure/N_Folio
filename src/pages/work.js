import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import React, { useState } from "react"
import Layout from "../components/layout"

const CenterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.3rem;
  color: ${(props) => props.theme.color.secondary};
`

const Content = styled.div`
  margin: 0 auto;
  padding: 1rem 1rem;
  /* text-align: center; */
`

const SwitchArea = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Toggle = styled.div`
  isolation: isolate;
  position: relative;
  height: 30px;
  width: 60px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
`

const Indicator = styled.div`
  height: 100%;
  width: 200%;
  background: #ecf0f3;
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
`

const InputCheck = styled.input`
  display: none;
  &:checked ~ ${Indicator} {
    transform: translate3d(25%, 0, 0);
  }
`

const Professional = styled(CenterDiv)`
  width: 7rem;
  height: 2rem;
  margin: 1rem;

  /* border: 1px solid red; */
  background: ${(props) => props.theme.background.primary};
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
`
const Personal = styled(CenterDiv)`
  width: 5rem;
  height: 2rem;
  margin: 1rem;
  background: ${(props) => props.theme.background.primary};
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
`

const TimeLineArea = styled.div`
  /* border: 1px solid red; */
`
const TimeLineItem = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TimeLineContainer = styled.div`
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
  flex: 0 0 100%;
  max-width: 100%;
`

const TimeLineCard = styled.div`
  position: relative;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff !important;
  border-width: 0.125rem !important;
  border: 0 !important;
  padding: 1rem !important;
  background-color: #e6e7ee !important;

  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #e6e7ee;
  background-clip: border-box;
  border: 0.0625rem solid rgba(243, 247, 250, 0.05);
  border-radius: 0.55rem;
`

const CardBody = styled.div`
  z-index: 2;
  flex: 1 1 auto;
  padding: 1.5rem;
`

const CardTitle = styled.h3`
  margin-bottom: 1rem;
`

const CardDescription = styled.p`
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-weight: 300;
  line-height: 1.6;
`

const CardDetailButton = styled.button`
  color: #31344b;
  background-color: #e6e7ee;
  font-size: 0.5rem;
  position: relative;
  transition: all 0.2s ease;
  letter-spacing: 0.025em;
  font-size: 1rem;
  border-color: #d1d9e6;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
  padding: 0.45rem 0.5rem;
  line-height: 1.5;
  border-radius: 0.55rem;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 0.0625rem solid transparent;
`

export default function Work({ data }) {
  console.log("🚀 -> Work -> data", data)
  const [check, setCheck] = useState(true)
  const [display, setDisplay] = useState(false)
  const OnChange = (event) => {
    console.log("🚀 -> OnChange -> event", event.target.checked)
    setCheck(event.target.checked)
  }

  return (
    <Layout>
      <Content>
        {/* HEADER ACTIONS */}
        <SwitchArea>
          <Professional>professional</Professional>
          <Toggle>
            <InputCheck type="checkbox" checked={check} onClick={OnChange} />
            <Indicator />
          </Toggle>
          <Personal>personal</Personal>
        </SwitchArea>

        {/* TIME LINE VIEW */}
        <TimeLineArea>
          <TimeLineItem>
            <TimeLineContainer>
              <TimeLineCard>
                <CardBody>
                  <CardTitle>main title</CardTitle>
                  <CardDescription>
                    Stay organized, reduce stress, and accomplish personal and
                    business goals with a daily schedule template. It’s a simple
                    yet effective time-management tool for any daily activity,
                    whether you’re managing a busy work schedule, academic
                    assignments or family chores.
                  </CardDescription>
                  <CardDetailButton onClick={() => setDisplay(!display)}>
                    show details
                  </CardDetailButton>
                  <div
                    style={{ display: display ? "block" : "none" }}
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="1000"
                    data-sal-easing="ease-out-back"
                  >
                    {" "}
                    content
                  </div>
                </CardBody>
              </TimeLineCard>
            </TimeLineContainer>
          </TimeLineItem>
        </TimeLineArea>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false }, type: { eq: "project" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            type
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
            path
            featuredImage {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
