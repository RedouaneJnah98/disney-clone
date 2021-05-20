import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { sliders } from '../data'

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Carousel {...settings}>
      {sliders.map((item) => {
        return (
          <Wrapper key={item.id}>
            <a href="##">
              <img src={item.image} alt="" />
            </a>
          </Wrapper>
        )
      })}
    </Carousel>
  )
}

const Carousel = styled(Slider)`
  margin-top: 0px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`

const Wrapper = styled.div`
  position: relative;
  border-radius: 4px;
  cursor: pointer;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    padding: 4px;
    display: block;
    position: realitive;
  }

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    padding: 0;
    border: 4px solid rgba(249, 249, 249, 0.8);
    transition-duration: 300ms;
  }
`

export default ImgSlider