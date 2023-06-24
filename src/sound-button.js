import './App.scss';
import useSound from 'use-sound';

export default function SoundButton(props) {
	return ( 
		<div>
			<button className="soundButton btn btn-secondary">{props.text}</button>
		</div>
	);
}
