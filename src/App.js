import './App.scss';
import { useState } from 'react';

// Components
import SoundButton from './sound-button.js';
import ControlButton from './control-button.js';
import Volume from './volume-slider.js';

import {KEYS, SOUND_DIR} from './constants.js';

// Main component
function App() {
	// state
	const [volume, setVolume] = useState(1);	// Normalized value
	const [isOn, setPower] = useState(false);
	const [rate, setRate] = useState(true);
	
	// functions
	const togglePower = () => { setPower(!isOn) };	
	const toggleRate = () => { setRate(!rate) };
	
	//=== JSX ===
	return (
	<div className="App">
    	<div className="mainBox p-2">
    		<div className="grid-buttons">
    			<div className="grid">
    				{/* Keypad */}
    				{ KEYS.map( (key, i) => { 
    					return ( 
    						<SoundButton 
    							key={key} 
    							id={key} 
    							src={ SOUND_DIR[i] } 
    						    volume={volume} 
    						    enabled={isOn} 
    						    rate={ rate ? 1 : 2 } 
							/>
    					);
    				})}
    			</div>
    		</div>
			
			<div className="controls">				
				{/* Buttons */}
				<ControlButton text="Power" onchange={togglePower} />
				<ControlButton text="Pitch" onchange={toggleRate} />
    			{/* Volume slider */}
				<Volume setvolume={setVolume}/>
    		</div>
    	</div>
	</div>
	);
}

export default App;
