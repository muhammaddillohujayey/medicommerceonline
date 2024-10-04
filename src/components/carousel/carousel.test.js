import React from 'react';
import { render } from '@testing-library/react';
import Carousel from './carousel.js';
import Slider from 'react-slick';

jest.mock('react-slick', () => {
  return jest.fn((props) => <div>{props.children}</div>);
});

describe('Carousel Component', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe tener configuraciones del carrusel correctas', () => {
    render(<Carousel />);

    expect(Slider).toHaveBeenCalledWith(
      expect.objectContaining({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
      }),
      {}
    );
  });
});
