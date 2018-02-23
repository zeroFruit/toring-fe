import React, { PureComponent } from 'react';

class CardList extends PureComponent {
    render() {
        const { Card, cardProps } = this.props;
        return this._renderCards(Card, cardProps);
    }

    _renderCards = (Card, cardProps) => {
        return cardProps.map((prop, idx) => <Card key={idx} { ...prop} />);
    }
}

export default CardList;