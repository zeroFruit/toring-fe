import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ShowMessageButtonService.scss';

const cx = classNames.bind(styles);

class ShowMessageButtonService extends PureComponent {
    render() {
        return (
            <div>
                <MessageButtons
                    onClick={this.props.maybeRenderModal}
                    containerClassName={cx('message-container')}
                    btnClassName={cx('message-btn')}
                />
                {this.props.render()}
            </div>
        );
    }
}

const MessageButtons = ({ containerClassName = '', btnClassName = '', onClick = () => {} }) => (
    <div className={containerClassName}>
        <img
            className={btnClassName}
            onClick={onClick}
            src={require('./images/45x45.png')}
            alt={"Message button"}
        />
        <img
            className={btnClassName}
            onClick={onClick}
            src={require('./images/45x45.png')}
            alt={"Message button"}
        />
    </div>
);

ShowMessageButtonService.propTypes = {};

export default ShowMessageButtonService;
