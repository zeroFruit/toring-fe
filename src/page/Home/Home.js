import React, { PureComponent } from 'react';
import { JumboGroupSlide } from "../../containers";


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
            <JumboGroupSlide
                Slide={ null }
                slideProps={ slideProps } />
        );
    }
}

export default Home;