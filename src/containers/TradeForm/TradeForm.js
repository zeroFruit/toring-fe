import React from 'react';
import classNames from 'classnames/bind';
import TextField from 'material-ui/TextField';
import styles from './TradeForm.scss';
import { MaterialUIComponent, TextFieldTemplate } from '../../components';
import { TradeFormTextField, TradeTabs } from '../index';

const cx = classNames.bind(styles);

const TradeForm = (props) => (
    <MaterialUIComponent>
        <div className={ cx('trade-form') }>
            <TradeTabs />
            <div className={ cx('wrapper') }>
                <TradeFormTextField
                    floatingLabelText="사용가능"
                />
                <TradeFormTextField
                    floatingLabelText="주문가격"
                />
                <TradeFormTextField
                    floatingLabelText="주문수량"
                />
            </div>
        </div>
    </MaterialUIComponent>
);

export default TradeForm;