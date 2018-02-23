import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './ContentHeaderTemplate.scss';

const cx = classNames.bind(styles);

class ContentHeaderTemplate extends PureComponent {
    render() {
        const { Tab, tabProps, className } = this.props;
        return (
            <div className={ cx('content-header', className) }>
                { this._renderTabs(Tab, tabProps) }
            </div>
        );
    }

    _renderTabs = (Tab, tabProps) => (
        tabProps.map((prop, idx) => <Tab key={idx} { ...prop } />)
    )
}

export default ContentHeaderTemplate;