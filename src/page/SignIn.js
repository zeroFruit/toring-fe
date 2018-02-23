import React, { PureComponent } from 'react';

import { MaterialUIComponent } from '../components';
import { SignInForm } from "../containers";

class SignIn extends PureComponent {
    render() {
        return (
            <SignInForm />
        );
    }
}

export { SignIn };