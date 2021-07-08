import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const styles = {
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
        width: '47.75rem',
        margin: '0 auto',
    }
};

const ModalTemplate = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            shouldCloseOnOverlayClick
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={styles}
        >
            {React.Children.only(children)}
        </Modal>
    );
}

ModalTemplate.propTypes = {};

export default ModalTemplate;
