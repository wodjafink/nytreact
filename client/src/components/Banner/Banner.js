import React from 'react';
import { Parallax, Background } from 'react-parallax';
import { Container } from '../Grid'
import './Banner.css'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
const image1 = "http://www.fostermh.com/home/wp-content/uploads/2015/03/new-york-sky-scraper-bridge.jpg"

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const Banner = () => (
  <Container fluid>
    <div style={styles}>
      <Parallax
        blur={0}
        bgImage={image1}
        bgImageAlt="the city"
        strength={500}
      >
         <div style={insideStyles}>
          <div  >NYT Scraper App</div>
        </div>
      </Parallax>
    </div>
    <br/>
  </Container>
);

export default Banner;