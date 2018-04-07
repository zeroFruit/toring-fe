import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
    ModalTemplate
} from '../../components';

class ModalService extends PureComponent {
    state = {
        isModalOpen: false,
        ModalComponent: null,
        modalProps: null
    };
    render() {
        const {
            ModalComponent ,
            modalProps
        } = this.state;
        return (
            <div>
                {this.props.render({
                    maybeRenderModal: this._maybeRenderModal
                })}
                <ModalTemplate
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this._maybeRenderModal}
                >
                    { ModalComponent ? <ModalComponent { ...modalProps } /> : <div /> }
                </ModalTemplate>
            </div>
        );
    }
    _maybeRenderModal = (ModalComponent = null, { ...modalProps }) => {
        if(!this.state.isModalOpen) {
            this.setState({
                isModalOpen: true,
                ModalComponent: (props) => <ModalComponent { ...props } />,
                modalProps: { ...modalProps }
            });
        } else {
            this.setState({
                isModalOpen: false,
                ModalComponent: null,
                modalProps: null
            });
        }
    }
}

ModalService.propTypes = {};

export default ModalService;
