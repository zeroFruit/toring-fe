import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {actions, selectors} from "../../reducers/work";
import {bindActionCreators} from "redux/index";

class UploadWorkService extends PureComponent {
    render() {
        return (this.props.render()
        );
    }
}

UploadWorkService.propTypes = {};

const mapStateToProps = state => ({
    workApiStat: selectors.getWorkApiStat(state)
})
const mapDispatchToProps = dispatch => bindActionCreators({
    upload: actions.upload,
    initWorkApiStat: actions.initWorkApiStat
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UploadWorkService);
