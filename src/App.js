import './App.scss';
import { useState } from 'react';

// Components
import SoundButton from './sound-button.js';
import ControlButton from './control-button.js';
import Volume from './volume-slider.js';

function App() {
  return (
    <div className="App">
    	<div className="mainBox p-2">
    		<div className="grid-buttons">
    			<div className="grid">
    				<SoundButton text="Q" />
					<SoundButton text="W" />
					<SoundButton text="E" />
    				
    				<SoundButton text="A" />
    				<SoundButton text="S" />
    				<SoundButton text="D" />
    				
    				<SoundButton text="Z" />
    				<SoundButton text="X" />
    				<SoundButton text="C" />
    			</div>
    		</div>
			
			<div className="controls">				
				{/* Buttons */}
				<ControlButton text="Power" />
				<ControlButton text="Bank" />
    			
    			{/* Volume slider */}
				<Volume />
    		</div>
    	</div>
    </div>
  );
}

export default App;
