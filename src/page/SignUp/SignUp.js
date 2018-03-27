import React, { PureComponent } from 'react';

import { MaterialUIComponent } from '../../components/index';
import { SignUpForm } from "../../containers/index";

class SignUp extends PureComponent {
    render() {
        return (
            <SignUpForm />
        );
    }
}

export { SignUp };