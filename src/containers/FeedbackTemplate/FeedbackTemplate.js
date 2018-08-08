import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './FeedbackTemplate.scss';
import img_cheers from './images/img_cheers.png';
import img_suggest from './images/img_suggest.png';
import Dialog from 'material-ui/Dialog';

const cx = classNames.bind(styles);

class FeedbackTemplate extends PureComponent {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
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
            <section onClick={this.handleOpen}>
              제안하기
            </section>

          </div>
          <Dialog
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          />
      </div>
    )
  }
};

export default FeedbackTemplate;
