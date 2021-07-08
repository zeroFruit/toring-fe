import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TextField from 'material-ui/TextField';
import styles from './TextAreaTemplate.scss';
import {
    MaterialUIComponent
} from '../../components'

const cx = classNames.bind(styles);

const TextAreaTemplate = ({
                            type='text',
                            name=null,
                            errorText=null,
                            onChange=() => {},
                            value='',
                            className = '',
                            rows = 10,
                            rowsMax = 10,
                            hintText = '',
                            containerStyle = {},
                            textareaStyle = {},
                            floatingLabelText = '',
                            underlineFocusStyle = {},
                            underlineShow = false,
                            floatingLabelFocusStyle = {}}) => {
    return (
        <MaterialUIComponent>
            <TextField
                multiLine
                underlineShow={underlineShow}
                rows={rows}
                hintText={hintText}
                hintStyle={{top: '.75rem', left: '.9375rem'}}
                rowsMax={rowsMax}
                type={ type }
                name={ name }
                onChange={ onChange }
                errorText={ errorText }
                value={ value }
                floatingLabelFixed
                style={ containerStyle }
                textareaStyle={textareaStyle}
                underlineFocusStyle={ underlineFocusStyle }
                floatingLabelFocusStyle={ floatingLabelFocusStyle }
                floatingLabelText={ floatingLabelText }
            />
        </MaterialUIComponent>
    );
};

TextAreaTemplate.propTypes = {

};

export default TextAreaTemplate;
