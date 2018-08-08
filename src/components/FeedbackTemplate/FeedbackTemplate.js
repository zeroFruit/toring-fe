import React from 'react';
import classNames from 'classnames/bind';
import styles from './FeedbackTemplate.scss';
import img_cheers from './images/img_cheers.png';
import img_suggest from './images/img_suggest.png';

const cx = classNames.bind(styles);

const FeedbackTemplate = () => (
  <div className={ cx('feed-back')}>
      <div className= { cx('feed-back__left') }>
        <section>
          <img src= { img_cheers } />
        </section>
        <section>
          응원하기
        </section>
      </div>
      <div className = { cx('feed-back__right') }>
        <section>
          <img src= { img_suggest } />
        </section>
        <section>
          제안하기
        </section>
      </div>
  </div>
);

export default FeedbackTemplate;
