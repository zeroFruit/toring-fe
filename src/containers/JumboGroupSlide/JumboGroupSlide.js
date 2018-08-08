import React from 'react';
import classNames from 'classnames/bind';
import styles from './JumboGroupSlide.scss';
import { GroupSlideTemplate, JumboTemplate, SwiperViewer, SwiperTemplate } from "../../components";

const cx = classNames.bind(styles);

const JumboGroupSlide = ({ slideProps, Slide }) => (
    <SwiperTemplate>
        <SwiperViewer
            className={ cx('jumbo-group-slide') }/>
    </SwiperTemplate>
);

export default JumboGroupSlide;
