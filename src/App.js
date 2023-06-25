import './App.scss';
import { useState } from 'react';

// Components
import SoundButton from './sound-button.js';
import ControlButton from './control-button.js';
import Volume from './volume-slider.js';

import {KEYS, SOUND_DIR} from './constants.js';

// functions
function App() {
	const [volume, setVolume] = useState(1);	// Normalized value
	const [isOn, setPower] = useState(false);

	const togglePower = () => { setPower(!isOn) };

	//=== JSX ===
	return (
	<div className="App">
    	<div className="mainBox p-2">
    		<div className="grid-buttons">
    			<div className="grid">
    				{/* Keypad */}
    				{ KEYS.map( (key, i) => { 
    					return ( 
    						<SoundButton key={key} id={key} src={SOUND_DIR[i]} volume={volume} enabled={isOn}/> 
    					);
    				})}
    			</div>
    		</div>
			
			<div className="controls">				
				{/* Buttons */}
				<ControlButton text="Power" onchange={togglePower} />
				<ControlButton text="Bank" />
    			{/* Volume slider */}
				<Volume setvolume={setVolume}/>
    		</div>
    	</div>
	</div>
	);
}

export default App;
