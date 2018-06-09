import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './CardList.scss';

const cx = classNames.bind(styles);

const CardList = ({Card, cardProps}) => (
  <div className= { cx('card-list') }>
    <div className= { cx('wrapper') }>
      {
        cardProps.map((prop, idx) => (
          <Card
            key={idx}
            {...prop}
          />
        ))
      }
    </div>
  </div>
);

export default CardList;
