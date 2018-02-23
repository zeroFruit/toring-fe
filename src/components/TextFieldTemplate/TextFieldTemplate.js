import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldTemplate = ({
                                type = 'text',
                                name = null,
                                errorText = null,
                                onChange = () => {},
                                value = '',
                                tfStyle,
                                floatingLabelText,
                                underlineFocusStyle,
                                floatingLabelFocusStyle,
                                floatingLabelFixed = true }) => (
    <TextField
        type={ type }
        name={ name }
        onChange={ onChange }
        errorText={ errorText }
        value={ value }
        floatingLabelFixed
        style={ tfStyle }
        underlineFocusStyle={ underlineFocusStyle }
        floatingLabelFocusStyle={ floatingLabelFocusStyle }
        floatingLabelText={ floatingLabelText }
    />
);

export default TextFieldTemplate;