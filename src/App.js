import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  body{
    padding: 0;
    margin: 0;
  }
`;

class App extends Component {
	render() {
		return (
			<Container>
				<Button danger>Hello</Button>
				<Button>Hello</Button>
				<Anchor href="https://google.com" danger>
					Go to Google
				</Anchor>
			</Container>
		);
	}
}

const Container = styled.div`
	height: 100vh;
	width: 100%;
	background-color: #34495e;
`;

const Button = styled.button`
	border-radius: 50px;
	padding: 5px;
	min-width: 300px;
	min-height: 300px;
	color: white;
	cursor: pointer;
	font-weight: 600;
	-webkit-appearance: none;
	&active,
	&focus {
		outline: none;
	}
	background-color: ${(props) => (props.danger ? '#c0392b' : '#2ecc71')};
`;

const Anchor = Button.withComponent('a').extend`
  text-decoration:none;
`;

export default App;
