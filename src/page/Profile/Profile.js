import React, { PureComponent } from 'react';
import { ContentWrapper } from '../../components';
import {
    JumboProfile,
    ProfileTabs,
    ShowMessageButtonService
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
        return (
            <div>
                <ShowMessageButtonService
                    maybeRenderModal={this.props.maybeRenderModal}
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
}

export default Profile