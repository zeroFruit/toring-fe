import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import styles from './SwiperViewer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PrevArrow = ({ onClick }) => (
  <div
  className={ cx('prev-btn') }
  onClick={ onClick }>
  { '<' }

  </div>
);
const NextArrow = ({ onClick }) => (
  <div
  className={ cx('next-btn') }
  onClick={ onClick }>
  { '>' }
  </div>
);

const Slide = ({ img }) => (
  <img src={ img } />
);

const slideProps = [
  {
    img: require('./imgs/viewer.PNG')
  },
  {
    img: require('./imgs/viewer.PNG')
  },
  {
    img: require('./imgs/viewer.PNG')
  },
  {
    img: require('./imgs/viewer.PNG')
  }
];

class SwiperViewer extends PureComponent {
  state = {
    active: 0
  };

  render() {
    const settings = {
      dots: false,
      slidesToShow: 1,
      infinite: true,
      centerMode: true,
      centerPadding: '10px',
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };

    return (
      <div className={ cx('swiper-viewer') }>
      <Slider { ...settings }>
      {
        this._renderSlide(Slide, slideProps)
      }
      </Slider>
      </div>
    );
  }

  _renderSlide = (Slide, slideProps) => (
    slideProps.map((prop, idx) => (
      <div key={idx} className={ cx('swiper-viewer-slide') }>
      <Slide { ...prop } />
      </div>
    ))
  )
}

export default SwiperViewer;
