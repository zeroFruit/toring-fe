import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './TableTemplate.scss';
import classNames from 'classnames';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { MaterialUIComponent } from '../index';


const cx = classNames.bind(styles);

const defaultProps = {
    headerExist: true
};

class TableTemplate extends PureComponent {
    render() {
        const { headerProps, bodyProps, headerExist } = this.props;


        return (
            <MaterialUIComponent>
                { !headerExist ?
                    <Table className={cx('table-template')}>
                        <TableBody
                            displayRowCheckbox={ false }>
                            { this.renderBody(bodyProps) }
                        </TableBody>
                    </Table> :

                    <Table className={cx('table-template')}>
                        <TableHeader
                            displaySelectAll={ false }
                            adjustForCheckbox={ false }>
                            { this.renderHeader(headerProps) }
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={ false }>
                            { this.renderBody(bodyProps) }
                        </TableBody>
                    </Table>
                }
            </MaterialUIComponent>
        );
    }

    renderHeader = headerProps => {
        return (
            <TableRow>
                {headerProps.map(prop => (
                    <TableHeaderColumn key={ prop }>
                        { prop }
                    </TableHeaderColumn>
                ))}
            </TableRow>
        );
    }



    renderBody = bodyProps => {
        return bodyProps.map((prop, idx) => (
            <TableRow key={ idx } style={ this.props.rowStyle }>
                <TableRowColumn style={ this.props.rowStyle }>
                    { prop.label }
                </TableRowColumn>
                <TableRowColumn style={ this.props.rowStyle }>
                    { prop.value }
                </TableRowColumn>
            </TableRow>
        ));
    }
}

TableTemplate.defaultProps = defaultProps;

export default TableTemplate;
