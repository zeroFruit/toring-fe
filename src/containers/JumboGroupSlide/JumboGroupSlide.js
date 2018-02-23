import React from 'react';
import classNames from 'classnames/bind';
import styles from './JumboGroupSlide.scss';
import { GroupSlideTemplate, JumboTemplate } from "../../components";

const cx = classNames.bind(styles);

const JumboGroupSlide = ({ slideProps, Slide }) => (
    <JumboTemplate>
        <GroupSlideTemplate
            Slide={ Slide }
            slideProps={ slideProps }
            className={ cx('jumbo-group-slide') }/>
    </JumboTemplate>
);

export default JumboGroupSlide;