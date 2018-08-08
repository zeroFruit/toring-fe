import React, { PureComponent } from 'react';
import {
  Column,
  ContentWrapper,
  GridCardTemplate,
  ProfileTabTemplate
} from "../../components";
import {
  JumboProfile,
  ProfileTabs,
  AuthorWorkCard,
  CardList,
  HorizontalCardList,
  FeedbackTemplate
} from "../../containers";


const ListTitle = ({ title }) => (
<div>{ title }</div>
);

const tabProps = [
    {
      id: 0,
      label: '기다리는',
      count: 0
    },
    {
      id: 1,
      label: '완성된',
      count: 0
    }
];

const listData = [
  {
    title: "제목",
    content: "작가가 오픈해놓은 간략한 줄거리 한두줄 작가가 오픈해놓은 간략한 줄거리 한두줄 작가가 오픈해놓은 간략한 줄거리 한두줄",
    BodyComponent: FeedbackTemplate
  },
  {
    title: "제목",
    content: "작가가 오픈해놓은 간략한 줄거리 한두줄 작가가 오픈해놓은 간략한 줄거리 한두줄 작가가 오픈해놓은 간략한 줄거리 한두줄",
    BodyComponent: FeedbackTemplate
  },
  {
    title: "제목",
    content: "작가가 오픈해놓은 간략한 줄거리 한두줄 작가가 오픈해놓은 간략한 줄거리 한두줄 작가가 오픈해놓은 간략한 줄거리 한두줄",
    BodyComponent: FeedbackTemplate
  },
  {
    title: "제목",
    content: "작가가 오픈해놓은 간략한 줄거리 한두줄 작가가 오픈해놓은 간략한 줄거리 한두줄 작가가 오픈해놓은 간략한 줄거리 한두줄",
    BodyComponent: FeedbackTemplate
  }
]

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

class IllustratorProfile extends PureComponent {
  state = {
    tapnum: null
  }

    render() {
        return (
            <div>
                <JumboProfile />
                <ContentWrapper>
                  <div>
                    <ProfileTabs Tab = { ProfileTabTemplate } tabProps={ tabProps } onClick={ this.onClick }/>
                    <div>
                      {
                        this._renderCardList()
                      }
                    </div>
                  </div>
                </ContentWrapper>
            </div>
        );
    }

    _renderCardList = () => {
      switch(this.state.tapnum) {
        case 0:
          return (<CardList
            Card={ AuthorWorkCard }
            cardProps = { listData } />);
        case 1:
          return (<HorizontalCardList
            Card={ GridCardTemplate }
            cardProps = { listProps } />);
        default:
          return null;
        }
    }

    onClick = (id) => {
      this.setState({
        tapnum: id
      });
    }
}

export default IllustratorProfile;
