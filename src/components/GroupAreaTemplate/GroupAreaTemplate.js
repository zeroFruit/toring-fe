import React from 'react';
import classNames from 'classnames/bind';
import RaisedButton from 'material-ui/RaisedButton';
import _styles from './GroupAreaTemplate.scss';
import { MaterialUIComponent } from '../index';

const cx = classNames.bind(_styles);

const GroupAreaTemplate = ({ className, handleWriterClick, handleIlluClick }) => (
    <MaterialUIComponent>
        <div className={ cx('group-area', className) }>
            <section>
                <RaisedButton
                    style={ styles.btn }
                    label="Button"
                    onClick={ handleWriterClick }
                />
                <p>
                    글 작가를 꿈꾸시면 여기를 눌러주세요.
                </p>
            </section>
            <section>
                <RaisedButton
                    style={ styles.btn }
                    label="Button"
                    onClick={ handleIlluClick }
                />
                <p>
                    그림 작가를 꿈꾸시면 여기를 눌러주세요.
                </p>
            </section>
            <section>
                <RaisedButton
                    style={ styles.btn }
                    label="Button"
                    onClick={ handleWriterClick }
                />
                <p>
                    글과 그림이 모두 준비되었다면 여기를 눌러주세요.
                </p>
            </section>
        </div>
    </MaterialUIComponent>
);

const styles = {
    btn: {
        width: '100%'
    }
}

export default GroupAreaTemplate;