import './control-button.scss';

export default function ControlButton(props) {
	return (
		<div className="container">
			<span className="text">{props.text}</span>
			<label className="switch" onChange={props.onchange}>
  				<input type="checkbox"/>
  				<span className="slider"></span>
			</label>
		</div>
	);
}
