import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import { Segment, Form, Input, Button } from 'semantic-ui-react';

const App = props => {
  const dispatch = useDispatch()
  const textInput = useSelector(state => state.textInput)
  const passwordInput = useSelector(state => state.passwordInput)

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
						onChange={e => dispatch({
              type: 'CHANGE_TEXT_INPUT',
              value: e.target.value
            })}
					/>
				</Form.Field>
				<Form.Field>
					<Input
						label='Password Input'
						type='password'
						placeholder='**********'
						onChange={e => dispatch({
              type: 'CHANGE_PASSWORD_INPUT',
              password: e.target.value
            })}
					/>
				</Form.Field>
				<Button primary onClick={() => console.log(textInput, passwordInput)}>
					console.log( variables )
				</Button>
			</Form>
		</Segment>
	);
}

export default App;
