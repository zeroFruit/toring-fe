import React, { PureComponent } from 'react';
import { ContentWrapper } from '../../components';
import {
    JumboProfile,
    ProfileTabs,
    ShowMessageButtonService,
    MessageModalContent
} from '../../containers';

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

class Profile extends PureComponent {
    render() {
        const { isMyPage } =this.props;
        console.log(isMyPage);
        return (
            <div>
                <ShowMessageButtonService
                    maybeRenderModal={
                        this.props.maybeRenderModal.bind(this, MessageModalContent, {
                            sendMessage: this._sendMessage,
                        })
                    }
                    render={() => (
                        <JumboProfile />
                    )}
                />
                <ContentWrapper>
                    <ProfileTabs tabProps={ tabProps } />
                </ContentWrapper>
            </div>
        );
    }

    _sendMessage = () => {
        console.log('send message');
    }
}

export default Profile