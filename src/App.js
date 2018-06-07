import React, { Component } from "react";

import styled, { injectGlobal } from "styled-components";
import map from "lodash/map";
import "./App.css";
import Slider from "react-slick";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: "Cinzel Decorative", cursive;
`;

const Frames = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
`;

const FrameContainer = styled.div`
  ${"" /* top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: ${p => {
    if (p.prev) {
      return "-100vw";
    }
    if (p.next) {
      return "100vw";
    }
  }};
  transition: left 0.5s; */};
`;

const Frame = styled.div`
  border: solid 5vmin #eee;
  background: #444;
  border-bottom-color: #fff;
  border-left-color: #eee;
  border-radius: 2px;
  border-right-color: #eee;
  border-top-color: #ddd;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  margin: auto;
  margin-top: 100px;
  padding: 4vmin;
  display: block;
  text-align: center;
  width: 600px;
  height: 600px;
  position: relative;
  &:before {
    border-radius: 2px;
    bottom: -2vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25) inset;
    content: "";
    left: -2vmin;
    position: absolute;
    right: -2vmin;
    top: -2vmin;
  }
  &:after {
    border-radius: 2px;
    bottom: -2.5vmin;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.25);
    content: "";
    left: -2.5vmin;
    position: absolute;
    right: -2.5vmin;
    top: -2.5vmin;
  }
  img {
    border: solid 2px;
    border-bottom-color: #ffe;
    border-left-color: #eed;
    border-right-color: #eed;
    border-top-color: #ccb;
    width: 100%;
  }
`;
const PortraitTitle = styled.div`
  margin-top: 100px;
  font-size: 48px;
  color: #fff;
  font-weight: 500;
`;
class App extends Component {
  render() {
    return (
      <AppContainer>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700,900"
          rel="stylesheet"
        />

        <Slider {...settings}>
          <FrameContainer>
            <Frame>
              <img src="/works/1.jpg" />
              <PortraitTitle>Helen Begsby Age: 28</PortraitTitle>
            </Frame>
          </FrameContainer>
          <FrameContainer>
            <Frame>
              <img src="/works/2.jpg" />
              <PortraitTitle>Helen, 28</PortraitTitle>
            </Frame>
          </FrameContainer>
          <FrameContainer>
            <Frame>
              <img src="/works/3.jpg" />
              <PortraitTitle>Helen, 28</PortraitTitle>
            </Frame>
          </FrameContainer>
        </Slider>
      </AppContainer>
    );
  }
}

export default App;
