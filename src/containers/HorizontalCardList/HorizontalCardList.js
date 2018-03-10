import React, { PureComponent } from 'react';

const HorizontalCardList = ({ Header = null, Card = null, cardProps = [] }) => (
    <div>
        <div>
            <Header />
        </div>
        <div>
            {
                cardProps.map((prop, idx) => (
                    <Card
                        key={ idx }
                        { ...prop }
                    />
                ))
            }
        </div>
    </div>
);

export default HorizontalCardList;

/*
* const test = {
*   a: 'a'
* }
* */