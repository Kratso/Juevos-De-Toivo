import * as React from 'react';

export const NumberHolder = (props) => {
	return (
		<div className={props.className}>
			<p className="focus-in-contract">{props.value}</p>
		</div>
	)
}
