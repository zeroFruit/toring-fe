import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    ModalTemplate
} from '../../components';

class ModalService extends PureComponent {
    state = {
        isModalOpen: false,
        ModalComponent: null
    };
    render() {
        const { ModalComponent } = this.state;
        return (
            <div>
                {this.props.render({
                    maybeRenderModal: this._maybeRenderModal
                })}
                <ModalTemplate
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this._maybeRenderModal}
                >
                    { ModalComponent ? <ModalComponent /> : <div /> }
                </ModalTemplate>
            </div>
        );
    }
    _maybeRenderModal = (ModalComponent = null, { ...modalProps }) => {
        if(!this.state.isModalOpen) {
            this.setState({
                isModalOpen: true,
                ModalComponent: () => <ModalComponent { ...modalProps } />
            });
        } else {
            this.setState({
                isModalOpen: false,
                ModalComponent: null
            });
        }
    }
}

ModalService.propTypes = {};

export default ModalService;
