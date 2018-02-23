import React from 'react';
import styles from './GridCardTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const GridCardTemplate = ({ img = null, BodyComponent = null, ...rest }) => (
  <div className={ cx('grid-card') }>
      <section>
        <img src={ img } />
      </section>
      <BodyComponent { ...rest } />
  </div>
);

export default GridCardTemplate;
