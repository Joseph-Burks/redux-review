import React from 'react';
import './App.css';
import { Segment, Form, Input, Button } from 'semantic-ui-react';

const App = props => {
  return (
		<Segment
			style={{
				marginTop: '10vh',
				marginLeft: '5vw',
				marginRight: '5vw',
				textAlign: 'center',
			}}
		>
			<h1>Redux Review</h1>
			<Form>
				<Form.Field>
					<Input
						label='Text Input'
						placeholder='Text Placeholder'
					/>
				</Form.Field>
				<Form.Field>
					<Input
						label='Password Input'
						type='password'
						placeholder='**********'
					/>
				</Form.Field>
				<Button primary>
					console.log(state)
				</Button>
			</Form>
		</Segment>
	);
}

export default App;
