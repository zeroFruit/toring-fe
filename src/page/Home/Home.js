import React, { PureComponent } from 'react';
import ReactStars from 'react-stars'
import { JumboGroupSlide } from "../../containers";
import {
    ContentWrapper,
    GridCardTemplate
} from '../../components';
import {
    HorizontalCardList,
    ContentHeaderTabs
} from "../../containers";

const slideProps = [
    {
        img: require('../../containers/JumboGroupSlide/images/image-template.png')
    },
    {
        img: require('../../containers/JumboGroupSlide/images/image-template.png')
    },
    {
        img: require('../../containers/JumboGroupSlide/images/image-template.png')
    },
    {
        img: require('../../containers/JumboGroupSlide/images/image-template.png')
    },
    {
        img: require('../../containers/JumboGroupSlide/images/image-template.png')
    },
    {
        img: require('../../containers/JumboGroupSlide/images/image-template.png')
    }
];

class Home extends PureComponent {
    render() {
        return (
            <div>
                <JumboGroupSlide
                    Slide={ null }
                    slideProps={ slideProps } />
            </div>
        );
    }
}

export default Home;
