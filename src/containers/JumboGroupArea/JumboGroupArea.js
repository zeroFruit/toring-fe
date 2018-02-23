import React from 'react';
import classNames from 'classnames/bind';
import styles from './JumboGroupArea.scss';
import history from '../../history';
import { GroupAreaTemplate, JumboTemplate } from "../../components";

const cx = classNames.bind(styles);

const JumboGroupArea = (props) => (
    <JumboTemplate>
        <GroupAreaTemplate
            className={ cx('jumbo-group-area') }
            handleWriterClick={ () => history.push('/works/upload') }
            handleIlluClick={ () => history.push('/works/upload') }
        />
    </JumboTemplate>
);

export default JumboGroupArea;