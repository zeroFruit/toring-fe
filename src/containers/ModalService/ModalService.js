import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const modalStyles = {
    overlay: {
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
    }
};

class ModalService extends PureComponent {
    state = {
        isModalOpen: false,
        ModalComponent: null
    };
    render() {
        return (
            <div>
                {this.props.render({
                    maybeRenderModal: this._maybeRenderModal
                })}
                <Modal
                    shouldCloseOnOverlayClick
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this._maybeRenderModal}
                    style={modalStyles}
                >
                    <div>Test Modal</div>
                </Modal>
            </div>
        );
    }
    _maybeRenderModal = (ModalComponent = null) => {
        if(!this.state.isModalOpen) {
            this.setState({
                isModalOpen: true,
                ModalComponent
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
