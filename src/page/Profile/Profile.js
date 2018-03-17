import React, { PureComponent } from 'react';
import {
  Column,
  ContentWrapper,
  FeedbackTemplate
} from "../../components";
import {
  JumboProfile,
  ProfileTabs,
  AuthorWorkCard,
  CardList
} from "../../containers";


const tabProps = [
    {
      label: '기다리는',
      count: 0
    },
    {
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

class Profile extends PureComponent {
    render() {
        return (
            <div>
                <JumboProfile />
                <ContentWrapper>
                  <div>
                    <ProfileTabs tabProps={ tabProps } />
                    <div>
                        <CardList
                          Card={ AuthorWorkCard }
                          cardProps = { listData } />

                    </div>
                  </div>
                </ContentWrapper>
            </div>
        );
    }
}

export default Profile;
