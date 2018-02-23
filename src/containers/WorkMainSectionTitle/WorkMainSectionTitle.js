import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './WorkMainSectionTitle.scss';
import { SectionTitleTemplate } from '../../components';

const cx = classNames.bind(styles);

class WorkMainSectionTitle extends PureComponent {
    render() {
        const { title } = this.props;
        return (
            <SectionTitleTemplate
                title={ title }
                className={ cx('work-main-section-title') }
            />
        );
    }
}

export default WorkMainSectionTitle;