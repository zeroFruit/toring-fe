import React, { PureComponent } from 'react';
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

const tabProps = [
    {
        label: '추천',
    },
    {
        label: '주제별',
    },
    {
        label: '연령별',
    },
    {
        label: '작가별',
    }
];

const a = {
    title: '~~',
    subtitle: 'sub'
};

const ListTitle = (a) => (
    <div>{ a.title }</div>
);

const CardBody = ({ title, author, rate }) => (
    <div>
        <div>{ title }</div>
        <div>{ author }</div>
        <div>{ rate }</div>
    </div>
);

const listProps = [
    {
        id: 1,
        img: require('../../containers/CardGrid/images/image-template.png'),
        BodyComponent: CardBody,
        title: 'Breakfast',
        author: 'jill111',
        rate: '1'
    },
    {
        id: 2,
        img: require('../../containers/CardGrid/images/image-template.png'),
        BodyComponent: CardBody,
        title: 'Breakfast',
        author: 'jill111',
        rate: '1'
    },
    {
        id: 3,
        img: require('../../containers/CardGrid/images/image-template.png'),
        BodyComponent: CardBody,
        title: 'Breakfast',
        author: 'jill111',
        rate: '1'
    },
];

class Home extends PureComponent {
    render() {
        return (
            <div>
                <JumboGroupSlide
                    Slide={ null }
                    slideProps={ slideProps } />
                <ContentWrapper>
                    <div>
                        {/*<ContentHeaderTabs tabProps={ tabProps } />*/}
                        {/*<div>*/}
                            {/*<HorizontalCardList*/}
                                {/*Header={ () => <ListTitle title={"토링 추천 동화"} subtitle={"sub"}/> }*/}
                                {/*Card={GridCardTemplate}*/}
                                {/*cardProps={listProps}*/}
                            {/*/>*/}
                        {/*</div>*/}
                    </div>
                </ContentWrapper>
            </div>
        );
    }
}

export default Home;