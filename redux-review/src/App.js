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
			<h1>Log In</h1>
			<Form>
				<Form.Field>
					<Input
						label='Username'
						placeholder='Username'
					/>
				</Form.Field>
				<Form.Field>
					<Input
						label='Password'
						type='password'
						placeholder='P@$$w0rd'
					/>
				</Form.Field>
				<Button primary>
					Log In
				</Button>
			</Form>
		</Segment>
	);
}

export default App;
