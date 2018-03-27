import { Map, List } from 'immutable';
import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';
import styles from './Upload.scss';
import { StepperTemplate, DropzoneTemplate } from '../../components';
import { UploadButton } from '../../containers';
import {actions, selectors} from "../../reducers/work";
import {bindActionCreators} from "redux";
import history from "../../history";

const cx = classNames.bind(styles);

class Upload extends PureComponent {
    state = {
        steps: [{
            title: '규정',
        }, {
            title: '업로드',
        }, {
            title: '추후 안내',
        }, {
            title: '완료',
        }],
        currentStep: 0,
        fd: Map({
            work: List(),
            title: '사법권은 법관으로 구성된 법원에 속한다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다.',
            content: '근로자는 근로조건의 향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을 가진다. 환경권의 내용과 행사에 관하여는 법률로 정한다. 국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.'
        })
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.uploadStat.get('err')) {
            console.warn('error in upload work HOC');
        }
        if (nextProps.uploadStat.get('success')) {
            history.push('/works');
        }
    }
    componentWillUnmount() {
        this.props.initupload();
    }

    render() {
        const { steps, currentStep, fd } = this.state;
        return (
            <div className={ cx('upload-page') }>
                <StepperTemplate
                    steps={ steps }
                    crntStep={ currentStep }
                />
                <section>
                    <DropzoneTemplate
                        setFiles={ this._setFiles }
                        fnm={ fd.get('work').get(0) ? fd.get('work').get(0).name : '' }
                        fsz={ fd.get('work').get(0) ? fd.get('work').get(0).size : 0 }
                    />
                </section>
                <UploadButton
                    fd={ fd }
                    style={ styl.upload }
                    label="업로드하기"
                    onClick={ this._onClickUpload }
                />
            </div>
        );
    }

    _setFiles = (work) => this.setState({ fd: this.state.fd.set('work', List(work)) });

    _onClickUpload = async () => {
        const { fd } = this.state;
        const formData = new FormData();
        formData.append('title', fd.get('title'));
        formData.append('content', fd.get('content'));
        formData.append('work', fd.get('work').get(0));
        await this.props.upload(formData);
    }
}

const styl = {
    upload: {
        backgroundColor: '#868e96',
        color: 'white',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.8rem'
    }
};

const mapStateToProps = state => ({
    uploadStat: selectors.getUploadStat(state)
})
const mapDispatchToProps = dispatch => bindActionCreators({
    upload: actions.upload,
    initupload: actions.initupload
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Upload);