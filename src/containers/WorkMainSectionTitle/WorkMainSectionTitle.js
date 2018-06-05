import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './WorkMainSectionTitle.scss';
import { SectionTitleTemplate } from '../../components';

const cx = classNames.bind(styles);

const WorkMainSectionTitle = ({title}) => (
  <SectionTitleTemplate
      title={ title }
      className={ cx('work-main-section-title') }
  />
);

export default WorkMainSectionTitle;
