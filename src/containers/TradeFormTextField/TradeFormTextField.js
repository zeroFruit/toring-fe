import React, { PureComponent } from 'react';
import { TextFieldTemplate } from '../../components';

class TradeFormTextField extends PureComponent {
    render() {
        const { floatingLabelText, onChange, value, name, type, errorText } = this.props;
        return (
            <TextFieldTemplate
                type={ type }
                name={ name }
                errorText={ errorText }
                onChange={ onChange }
                value={ value }
                tfStyle={ styles.tfStyle }
                underlineFocusStyle={ styles.underlineFocusStyle }
                floatingLabelFocusStyle={ styles.floatingLabelFocusStyle }
                floatingLabelText={ floatingLabelText }
            />
        );
    }
}

const styles = {
    floatingLabelFocusStyle: {
        color: '#d6336c'
    },
    underlineFocusStyle: {
        borderColor: '#d6336c'
    },
    tfStyle: {
        width: '100%'
    }
};

export default TradeFormTextField;