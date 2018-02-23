import React from 'react';
import classNames from 'classnames/bind';
import FlatButton from 'material-ui/FlatButton';
import { MaterialUIComponent } from '../index';

const FlatButtonTemplate = ({ label, onClick, style }) => (
    <MaterialUIComponent>
        <FlatButton
            style={ style }
            backgroundColor={ style.backgroundColor }
            label={ label }
            onClick={ onClick }
        />
    </MaterialUIComponent>
);

export default FlatButtonTemplate;