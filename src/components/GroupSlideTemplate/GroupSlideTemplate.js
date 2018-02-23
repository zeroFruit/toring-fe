import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './GroupSlideTemplate.scss';

const cx = classNames.bind(styles);

const PrevArrow = ({ onClick }) => (
    <button
        className={ cx('prev-btn') }
        onClick={ onClick }>
        { '<' }
    </button>
);
const NextArrow = ({ onClick }) => (
    <button
        className={ cx('next-btn') }
        onClick={ onClick }>
        { '>' }
    </button>
);

const Slide = ({ img }) => (
    <img src={ img } />
);

class GroupSlideTemplate extends PureComponent {
    state = {
        active: 0
    };

    render() {
        const settings = {
            dots: false,
            slidesToShow: 3,
            infinite: true,
            centerMode: true,
            centerPadding: '10px',
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        const { className, slideProps } = this.props;
        console.log('active', this.state.active);

        return (
            <div className={ cx('group-slide', className) }>
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
            <div key={idx} className={ cx('slide-page') }>
                <Slide { ...prop } />
            </div>
        ))
    )
}

export default GroupSlideTemplate;