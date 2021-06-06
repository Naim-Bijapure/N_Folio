import React from "react"
import Slider from "react-slick"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import NImage from "../images/gatsby-astronaut.png"

const ImageItem = styled.div`
  .gatsby-image-wrapper {
    margin: auto;
  }
`

export default function ProjectCarousel({ images }) {
  //   console.log("🚀 -> ProjectCarousel -> images", images)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  }
  return (
    <div>
      <Slider {...settings}>
        {images.map((obj) => {
          return (
            <ImageItem>
              <Img fluid={obj.image.childImageSharp.fluid} />{" "}
            </ImageItem>
          )
        })}
        {/* <div>
          <img src={NImage} alt="cool" />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div> */}
      </Slider>
    </div>
  )
}
