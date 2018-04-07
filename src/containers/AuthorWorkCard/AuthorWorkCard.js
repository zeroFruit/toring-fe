import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './AuthorWorkCard.scss';

const cx = classNames.bind(styles);

const AuthorWorkCard = ({ title = null, content = null, BodyComponent, ...rest}) => (
  <div className = { cx('author-work-card') }>
    <div className = { cx('wrapper') }>
      <div className= { cx('wrapper__right') }>
        <h3>{title}</h3>
        <p>
          {content}
        </p>
      </div>
      <div className= { cx('wrapper__left') }>
        <BodyComponent {...rest} />
      </div>
    </div>
  </div>
);


export default AuthorWorkCard;
