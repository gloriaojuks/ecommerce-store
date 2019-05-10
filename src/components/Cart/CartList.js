import React from 'react';
import CartItem from './CartItem';

export default function CartList({ value }) {
	const { cart } = value;

	return (
		<div className="comtainer-fluid">
			{cart.map((item, index) => {
				if (item.count > 0) {
					return <CartItem key={item.id} item={item} value={value} />;
				}
			})}

			{/* <CartItem /> your not ment to render CartItem without prop */}
		</div>
	);
}

//you were redering <CartItem /> outside the map without passing props
