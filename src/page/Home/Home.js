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

<<<<<<< HEAD
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

const ListTitle = ({ title }) => (
    <div>{ title }</div>
);

const CardBody = ({ title, author, rate }) => (
    <div>
        <div>{ title }</div>
        <div>{ author }</div>
        <div>{ rate }</div>
    </div>
);

const Stars = () => (
  <ReactStars
    count={5}
    size={12}
    color2={'#ffd700'} />
);

const listProps = [
    {
        id: 1,
        img: require('../../containers/CardGrid/images/image-template.png'),
        BodyComponent: CardBody,
        title: 'Breakfast',
        author: 'jill111',
        rate: Stars
    },
    {
        id: 2,
        img: require('../../containers/CardGrid/images/image-template.png'),
        BodyComponent: CardBody,
        title: 'Breakfast',
        author: 'jill111',
        rate: Stars
    },
    {
        id: 3,
        img: require('../../containers/CardGrid/images/image-template.png'),
        BodyComponent: CardBody,
        title: 'Breakfast',
        author: 'jill111',
        rate: Stars
    },
    {
        id: 4,
        img: require('../../containers/CardGrid/images/image-template.png'),
        BodyComponent: CardBody,
        title: 'Breakfast',
        author: 'jill111',
        rate: '1'
    },
];

=======
>>>>>>> e827d341c4faa80fada903b29bb13b62f1b0bd2e
class Home extends PureComponent {
    render() {
        return (
            <div>
                <JumboGroupSlide
                    Slide={ null }
                    slideProps={ slideProps } />
<<<<<<< HEAD
                <ContentWrapper>
                    <div>
                        <ContentHeaderTabs tabProps={ tabProps } />
                        <div>
                            <HorizontalCardList
                                Header={ () => <ListTitle title={"토링 추천 동화"} subtitle={"sub"}/> }
                                Card={GridCardTemplate}
                                cardProps={listProps}
                            />
                            <HorizontalCardList
<<<<<<< HEAD
                                Header={ () => <ListTitle title={"새로 나온 동화"} subtitle={"sub"}/> }
=======
                                Header={ () => <ListTitle title={"새로 나온 동화"} subtitle={"sub"} /> }
>>>>>>> 8ec60d74a9cb376172cbda80caef4b50f7e7689b
                                Card={GridCardTemplate}
                                cardProps={listProps}
                            />
                            <HorizontalCardList
<<<<<<< HEAD
                                Header={ () => <ListTitle title={"인기 동화"} subtitle={"sub"}/> }
                                Card={GridCardTemplate}
                                cardProps={listProps}
                            />
=======
                                Header={ () => <ListTitle title={"인기 동화"} subtitle={"sub"} /> }
                                Card={GridCardTemplate}
                                cardProps={listProps}
                            />
                            <ReactStars
                              count={5}
                              size={12}
                              color2={'#ffd700'} />
>>>>>>> 8ec60d74a9cb376172cbda80caef4b50f7e7689b
                        </div>
                    </div>
                </ContentWrapper>
=======
>>>>>>> e827d341c4faa80fada903b29bb13b62f1b0bd2e
            </div>
        );
    }
}

export default Home;
