import React, { PureComponent } from 'react';

import { MaterialUIComponent } from '../components';
import { SignUpForm } from "../containers";

class SignUp extends PureComponent {
    render() {
        return (
            <SignUpForm />
        );
    }
}

export { SignUp };