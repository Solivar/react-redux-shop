import React from 'react';

export default function QtyCounter({ quantity }) {
  return (
    <div>
      <button> - </button>
      <input type="number" min="1" max="99" value={quantity} />
      <button> + </button>
    </div>
  );
}
