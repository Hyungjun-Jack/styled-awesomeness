import React, { Component } from "react";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Container>
        <Button danger>Hello</Button>
        <Button>Hello</Button>
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
  background-color: ${props => (props.danger ? "#c0392b" : "#2ecc71")};
`;

export default App;
