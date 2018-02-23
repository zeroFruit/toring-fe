import React from 'react';
import { compose } from 'recompose';
import { TableTemplate } from "../../components";
import { FetchPriceToTableHOC } from "../../hocs";

const PriceTable = ({ headerProps, bodyProps }) => {
    return (
        <TableTemplate
            rowStyle={ styles.row }
            headerProps={ headerProps }
            bodyProps={ bodyProps } />
    );
};

const styles = {
    row: {
       height: '1.5rem',
       fontSize: '0.8rem'
    }
}

export default compose(FetchPriceToTableHOC)(PriceTable);