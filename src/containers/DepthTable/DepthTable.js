import React from 'react';
import { compose } from 'recompose';
import Divider from 'material-ui/Divider';
import { TableTemplate, MaterialUIComponent } from "../../components";
import { FetchDepthToTableHOC } from "../../hocs";

const DepthTable = ({ headerProps, asks, bids }) => {
    return (
        <MaterialUIComponent>
            <div>
                <TableTemplate
                    rowStyle={ styles.asks }
                    headerProps={ headerProps }
                    bodyProps={ asks } />
                <Divider />
                <TableTemplate
                    headerExist={ false }
                    rowStyle={ styles.bids }
                    headerProps={ headerProps }
                    bodyProps={ bids } />
            </div>

        </MaterialUIComponent>

    );
}

const styles = {
    asks: {
        height: '1.5rem',
        fontSize: '0.8rem',
        backgroundColor: '#fcc2d7'
    },
    bids: {
        height: '1.5rem',
        fontSize: '0.8rem',
        color: '#2b8a3e'
    }
}

export default compose(FetchDepthToTableHOC)(DepthTable);