import React from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const TrackForm = () => {
	return (
		<>	
			<Spacer>
				<Input placeholder="Enter name"/>
				<Button title="Start Recording" />
			</Spacer>
		</>
	);
};

export default TrackForm;
