import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardGrid.scss';

const cx = classNames.bind(styles);

const CardGrid = ({ Card, cardProps }) => (
    <div className={ cx('card-grid') }>
        <div className={ cx('wrapper') }>
            {
                cardProps.map((prop, idx) => (
                    <Card
                        key={idx}
                        { ...prop }
                    />
                ))
            }
        </div>
    </div>
);

export default CardGrid;