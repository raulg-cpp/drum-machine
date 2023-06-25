import './App.scss';
import useSound from 'use-sound';
import useKeypress from 'react-use-keypress';
import {useRef} from 'react';

export default function SoundButton(props) {
	const ref = useRef(null);
	
	const [sound] = useSound( props.src, 
							{ volume:       props.volume, 
							  soundEnabled: props.enabled } );
	
	useKeypress( [props.id, props.id.toLowerCase()], () => { 
		// play sound
		sound();		
		
		// manually set style
		let button = ref.current;
		
		button.classList.add("active");		
		setTimeout( () => {
			button.classList.remove("active");
		}, 100 );
	});
	
	//=== JSX ===			
	return ( 
		<div>		
			<button ref={ref} id={props.id} className="soundButton btn btn-secondary" onClick={sound}>
				{props.id}
			</button>
		</div>
	);
}
