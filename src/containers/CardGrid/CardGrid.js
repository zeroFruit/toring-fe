import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardGrid.scss';
import { GridCardTemplate } from '../../components';

const cx = classNames.bind(styles);

const CardGrid = ({ Card, cardProps }) => (
    <div className={ cx('card-grid') }>
        <div className={ cx('wrapper') }>
            {
                cardProps.map((prop, idx) => (
                    <GridCardTemplate
                        key={idx}
                        { ...prop }
                    />
                ))
            }
        </div>
    </div>
);

export default CardGrid;