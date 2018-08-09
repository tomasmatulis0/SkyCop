import React from 'react';
import { FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class DropDownList extends React.Component{
  constructor(props){
		super(props);
		this.state = {
			selection: ''
		}
	}
	
	handleSelect = (event) => {
		this.setState({ selection: event.target.value})
	}


	render(){
		const {list} = this.props;
		const {selection} = this.state;
		return(
			<div>
				{list && 
					<FormGroup controlId='formControlsSelect'>
						<ControlLabel>Select</ControlLabel>
						<FormControl componentClass='select' placeholder='select' onChange={this.handleSelect}>
							{list.map((item, i) => (
								<option key={i} id={item.id} onChange={this.handleSelect}>{item.title}</option>
							))}
						</FormControl>
					</FormGroup>}
				{selection &&
					<p className='red'>{selection}</p>
				}		
			</div>
		)
	}
}

export default DropDownList;