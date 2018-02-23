import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions, selectors } from '../../reducers/work';
import history from "../../history";

export const UploadWorkHOC = (WrappedComponent) => {
    class WithUploadWorkHOC extends PureComponent {
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
            const { fd } = this.props;
            return (
                <WrappedComponent
                    { ...this.props }
                    onClick={ () => this._upload(fd) }
                />
            );
        }

        _upload = async (fd) => {
            const formData = new FormData();
            formData.append('title', fd.get('title'));
            formData.append('content', fd.get('content'));
            formData.append('work', fd.get('work').get(0));
            await this.props.upload(formData);
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(WithUploadWorkHOC);
}

const mapStateToProps = state => ({
    uploadStat: selectors.getUploadStat(state)
})
const mapDispatchToProps = dispatch => bindActionCreators({
    upload: actions.upload,
    initupload: actions.initupload
}, dispatch);

