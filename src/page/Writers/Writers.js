import React, { PureComponent } from 'react';
import { JumboGroupSlide } from "../../containers";
import {
    ContentWrapper,
    ContentTabTemplate
} from '../../components';
import {
    AuthorProfileWorkCard,
    ContentHeaderTabs,
    CardList,
    ProfileTabs
} from "../../containers";

const listData = [
    {
        id: 0,
        img: require('../../containers/CardList/images/image-template.png'),
        label1: "기다리는 작품수",
        count1: 0,
        label2: "완성된 작품수",
        count2: 0
    },
    {
        id: 1,
        img: require('../../containers/CardList/images/image-template.png'),
        label1: "기다리는 작품수",
        count1: 0,
        label2: "완성된 작품수",
        count2: 0
    },
    {
        id: 2,
        img: require('../../containers/CardList/images/image-template.png'),
        label1: "기다리는 작품수",
        count1: 0,
        label2: "완성된 작품수",
        count2: 0
    }
];

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
      label: '인기순',
      underline: false
    },
    {
      label: '최신순',
      underline: false
    },
    {
      label: '작품순',
      underline: false
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

const listProps = [
    {
        id: 1,
        img: require('../../containers/CardGrid/images/image-template.png'),
        BodyComponent: CardBody,
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        id: 2,
        img: require('../../containers/CardGrid/images/image-template.png'),
        BodyComponent: CardBody,
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        id: 3,
        img: require('../../containers/CardGrid/images/image-template.png'),
        BodyComponent: CardBody,
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        id: 4,
        img: require('../../containers/CardGrid/images/image-template.png'),
        BodyComponent: CardBody,
        title: 'Breakfast',
        author: 'jill111',
    },
];

class Writers extends PureComponent {
    render() {
        return (
            <div>
                <JumboGroupSlide
                    Slide={ null }
                    slideProps={ slideProps } />
                <ContentWrapper>
                    <div>
                        <ContentTabTemplate label="글 작가" />
                        <ContentHeaderTabs tabProps={ tabProps } />
                        <div>
                          <div>
                            <CardList
                                Card={ AuthorProfileWorkCard }
                                cardProps={ listData } />
                          </div>
                        </div>
                    </div>
                </ContentWrapper>
            </div>
        );
    }
}

export default Writers;
