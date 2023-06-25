import './volume-slider.scss';

export default function Volume(props) {
	const onchange = (event) => {
		let value = event.target.value / 100;
		props.setvolume( value );
	};

	//=== JSX ===	
	return ( 
    	<div className="volumeSlider">
			<label for="range">Volume</label>
			
			<input onChange={onchange} 
				   type="range" id="range" name="temp" 
				   list="values" min="0" max="100" step="1"/>
			
			<datalist id="values">
  				<option value="0"   label="0"></option>
  				<option value="25"  label="25"></option>
  				<option value="50"  label="50"></option>
  				<option value="75"  label="75"></option>
  				<option value="100" label="100"></option>
			</datalist>
    	</div>
	);
}
