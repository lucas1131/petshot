import React, { Component } from 'react';
import Slider from 'react-slick';
import { Col, Card, CardTitle } from 'react-materialize';

import '../css/general.css';
import shear from '../resources/tosa.jpg';

class SlickSlider extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div style = {{margin: '5px !important'}}>
            <Card header={<CardTitle image={shear}></CardTitle>}
              actions={[<a href='#'>Agendar</a>]}>
              <h6>Tosa</h6>
              <p class='default'>
                A partir de R$ 40,00
              </p>
            </Card>
        </div>
        <div style = {{margin: '5px !important'}}>
            <Card header={<CardTitle image={shear}></CardTitle>}
              actions={[<a href='#'>Agendar</a>]}>
              <h6>Tosa</h6>
              <p class='default'>
                A partir de R$ 40,00
              </p>
            </Card>
        </div>
        <div style = {{margin: '5px !important'}}>
            <Card header={<CardTitle image={shear}></CardTitle>}
              actions={[<a href='#'>Agendar</a>]}>
              <h6>Tosa</h6>
              <p class='default'>
                A partir de R$ 40,00
              </p>
            </Card>
        </div>
        <div style = {{margin: '5px !important'}}>
            <Card header={<CardTitle image={shear}></CardTitle>}
              actions={[<a href='#'>Agendar</a>]}>
              <h6>Tosa</h6>
              <p class='default'>
                A partir de R$ 40,00
              </p>
            </Card>
        </div>
        <div style = {{margin: '5px !important'}}>
            <Card header={<CardTitle image={shear}></CardTitle>}
              actions={[<a href='#'>Agendar</a>]}>
              <h6>Tosa</h6>
              <p class='default'>
                A partir de R$ 40,00
              </p>
            </Card>
        </div>
        <div style = {{margin: '5px !important'}}>
            <Card header={<CardTitle image={shear}></CardTitle>}
              actions={[<a href='#'>Agendar</a>]}>
              <h6>Tosa</h6>
              <p class='default'>
                A partir de R$ 40,00
              </p>
            </Card>
        </div>
      </Slider>
    );
  }
}

export default SlickSlider; 