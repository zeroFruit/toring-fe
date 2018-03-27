import React, { PureComponent } from 'react';

import { MaterialUIComponent } from '../../components/index';
import { SignInForm } from "../../containers/index";

class SignIn extends PureComponent {
    render() {
        return (
            <SignInForm />
        );
    }
}

export { SignIn };