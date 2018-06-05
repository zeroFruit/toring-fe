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
import classNames from 'classnames/bind';
import history from '../../history';
import styles from './Works.scss';


const cx = classNames.bind(styles);

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
            <div className={ cx('works-page')}>
                <JumboGroupArea />
                <ContentWrapper>
                    <div>
                        <ContentHeaderTabs tabProps={ tabProps } />
                        <div>
                            <Column>
                                <div>
                                    <div className={cx('work-main-section-title-cover')}>
                                        <WorkMainSectionTitle title="작가"/>
                                        <DetailsButton className= {cx('details-button')} path='/works/writers'/>
                                    </div>
                                    <CardList
                                        Card={ AuthorProfileCard }
                                        cardProps={ listData } />
                                </div>
                            </Column>
                            <Column>
                                <div>
                                    <div className={cx('work-main-section-title-cover')}>
                                        <WorkMainSectionTitle title="삽화가"/>
                                        <DetailsButton className= {cx('details-button')} path='/works/writers'/>
                                    </div>
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

const DetailsButton = ({ path='', className='' }) => (
    <div className={ className } onClick={ () => history.push(path)}>
      더보기
    </div>
);

export default Works;
