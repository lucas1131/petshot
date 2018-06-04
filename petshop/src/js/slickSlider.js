import React, { Component } from 'react';
import Slider from 'react-slick';
import { Col, Card, CardTitle } from 'react-materialize';

import '../css/general.css';
import '../css/slides.css';
import shear from '../resources/tosa.jpg';

class SlickSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <Card header={<CardTitle image={shear}></CardTitle>}
          actions={[<a href='#'>Agendar</a>]}>
          <h6>Tosa</h6>
          <p class='default'>
            A partir de R$ 40,00
          </p>
        </Card>
        <Card header={<CardTitle image={shear}></CardTitle>}
          actions={[<a href='#'>Agendar</a>]}>
          <h6>Tosa</h6>
          <p class='default'>
            A partir de R$ 40,00
          </p>
        </Card>
        <Card header={<CardTitle image={shear}></CardTitle>}
          actions={[<a href='#'>Agendar</a>]}>
          <h6>Tosa</h6>
          <p class='default'>
            A partir de R$ 40,00
          </p>
        </Card>
        <Card header={<CardTitle image={shear}></CardTitle>}
          actions={[<a href='#'>Agendar</a>]}>
          <h6>Tosa</h6>
          <p class='default'>
            A partir de R$ 40,00
          </p>
        </Card>
        <Card header={<CardTitle image={shear}></CardTitle>}
          actions={[<a href='#'>Agendar</a>]}>
          <h6>Tosa</h6>
          <p class='default'>
            A partir de R$ 40,00
          </p>
        </Card>
        <Card header={<CardTitle image={shear}></CardTitle>}
          actions={[<a href='#'>Agendar</a>]}>
          <h6>Tosa</h6>
          <p class='default'>
            A partir de R$ 40,00
          </p>
        </Card>
      </Slider>
    );
  }
}

export default SlickSlider; 