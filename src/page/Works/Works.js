import React, { PureComponent } from 'react';
import {
    Column,
    GridCardTemplate,
    ContentWrapper
} from '../../components';
import {
    JumboGroupArea,
    CardGrid,
    WorkMainSectionTitle,
    AuthorProfileCard,
    CardList,
    ContentHeaderTabs
} from "../../containers";


const listData = [
    {
        img: require('../../containers/CardList/images/image-template.png')
    },
    {
        img: require('../../containers/CardList/images/image-template.png')
    },
    {
        img: require('../../containers/CardList/images/image-template.png')
    }
];

const CardBody = ({ title, author }) => (
    <div>
        <div>{ title }</div>
        <div>{ author }</div>
    </div>
);

const tilesData = [
    {
        img: require('../../containers/CardGrid/images/image-template.png'),
        title: 'Breakfast',
        author: 'jill111',
        BodyComponent: CardBody
    },
    {
        img: require('../../containers/CardGrid/images/image-template.png'),
        title: 'Tasty burger',
        author: 'pashminu',
        BodyComponent: CardBody
    },
    {
        img: require('../../containers/CardGrid/images/image-template.png'),
        title: 'Camera',
        author: 'Danson67',
        BodyComponent: CardBody
    }
];

const tabProps = [
    {
        label: '인기',
    },
    {
        label: '신규',
    }
];

class Works extends PureComponent {
    render() {
        return (
            <div>
                <JumboGroupArea />
                <ContentWrapper>
                    <div>
                        <ContentHeaderTabs tabProps={ tabProps } />
                        <div>
                            <Column>
                                <div>
                                    <WorkMainSectionTitle title="작가"/>
                                    <CardList
                                        Card={ AuthorProfileCard }
                                        cardProps={ listData } />
                                </div>
                            </Column>
                            <Column>
                                <div>
                                    <WorkMainSectionTitle title="삽화가"/>
                                    <CardGrid
                                        Card={ GridCardTemplate }
                                        cardProps={ tilesData }
                                    />
                                </div>
                            </Column>
                        </div>
                    </div>
                </ContentWrapper>
            </div>
        );
    }
}

export default Works;