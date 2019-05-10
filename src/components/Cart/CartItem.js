import React from 'react';

export default function CartItem({ item, value }) {
	console.log(item);
	const { id, title, img, price, total, count } = item;
	return (
		<div>
			<ul>
				<li>product ID: {id}</li>
				<li>product title: {title}</li>
				<li>product img: {img}</li>
				<li>product price: {price}</li>
				<li>product total: {total}</li>
				<li>product count: {count}</li>
			</ul>
		</div>
	);
}
