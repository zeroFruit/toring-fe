import React, { PureComponent } from 'react';

const CardList = ({Card, cardProps}) => (
  <div>
    {
      cardProps.map((prop, idx) => <Card key={idx} {...prop} />)
    }
  </div>
);

export default CardList;
