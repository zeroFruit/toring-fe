import React from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames/bind'
import styles from './DropzoneTemplate.scss';

const cx = classNames.bind(styles);

const DropzoneTemplate = ({ setFiles, fnm = '', fsz = 0 }) => (
    <Dropzone
        multiple={ false }
        accept=".pdf, .docx"
        onDrop={ setFiles }
        className={ cx('drop-zone') }>
        <p>
            {`파일을 올려놓으세요. (.pdf, .docx 파일만 가능합니다.) - 파일명: ${fnm}, ${fsz/1000000}MB`}
        </p>
    </Dropzone>
);

export default DropzoneTemplate;