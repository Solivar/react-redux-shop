import React from 'react';

import Card from '../../containers/Card';
import HorizontalLine from '../../components/HorizontalLine';
import Item from './Item';

export default function Cart({ items }) {
  return (
    <Card>
      <h3>Cart</h3>
      <HorizontalLine />

      {items.length > 0 &&
        items.map(item => {
          return <Item {...item} />;
        })}
    </Card>
  );
}
