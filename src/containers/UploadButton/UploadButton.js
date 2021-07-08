import React from 'react';
import { compose } from 'recompose';
import { RaisedButtonTemplate } from '../../components';
import { UploadWorkHOC } from "../../hocs";

const UploadButton = ({ style, label, onClick }) => (
    <RaisedButtonTemplate
        style={ style }
        label={ label }
        onClick={ onClick }
    />
);

export default UploadButton;