import './control-button.scss';
import { useState } from 'react';

export default function ControlButton(props) {
	const [isChecked, setChecked] = useState(false);

	const onChange = () => {
		setChecked( !isChecked );	
		if( !isChecked && props.onActive ) {
			props.onActive();
		}
	};
	
	//=== JSX ===
	return (
		<div className="container">
			<span className="text">{props.text}</span>
			<label className="switch" onChange={onChange}>
  				<input type="checkbox"/>
  				<span className="slider"></span>
			</label>
		</div>
	);
}
