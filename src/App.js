import './App.scss';
import { useState } from 'react';

// Components
import SoundButton from './sound-button.js';
import ControlButton from './control-button.js';
import Volume from './volume-slider.js';

// sounds
import SND_BRASS_DRUM 	 from './sound/bass-drum.mp3';
import SND_MED_DRUM 	 from './sound/med-tom-drum.mp3';
import SND_SMALL_DRUM 	 from './sound/small-tom-drum.mp3';

import SND_SNARE_DRUM 	 from './sound/snare-drum.mp3';
import SND_TOM_DRUM 	 from './sound/tom-drum.mp3';
import SND_STICKS 		 from './sound/sticks.mp3';

import SND_CYMBAL_CRASH  from './sound/cymbal-crash.mp3';
import SND_CYMBAL_SLIDE  from './sound/cymbal-slide.mp3';
import SND_CYMBAL_SPLASH from './sound/cymbal-splash.mp3';

// functions
function App() {


	//=== JSX ===
	return (
	<div className="App">
    	<div className="mainBox p-2">
    		<div className="grid-buttons">
    			<div className="grid">
    				{/* Row top */}
    				<SoundButton id="Q" src={SND_BRASS_DRUM}/>
					<SoundButton id="W" src={SND_MED_DRUM}/>
					<SoundButton id="E" src={SND_SMALL_DRUM}/>
    				{/* Row middle */}
    				<SoundButton id="A" src={SND_SNARE_DRUM}/>
    				<SoundButton id="S" src={SND_TOM_DRUM}/>
    				<SoundButton id="D" src={SND_STICKS}/>
    				{/* Row bottom */}
    				<SoundButton id="Z" src={SND_CYMBAL_CRASH}/>
    				<SoundButton id="X" src={SND_CYMBAL_SLIDE}/>
    				<SoundButton id="C" src={SND_CYMBAL_SPLASH}/>
    			</div>
    		</div>
			
			<div className="controls">				
				{/* Buttons */}
				<ControlButton text="Power" onActive={ () => console.log("check") } />
				<ControlButton text="Bank" />
    			{/* Volume slider */}
				<Volume />
    		</div>
    	</div>
	</div>
	);
}

export default App;
