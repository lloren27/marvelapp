import React, { Component } from 'react';
import HeroList from './HeroLists';
import styled from 'styled-components';
const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  text-align:center;
`;
const textStyle = {
  fontSize:'50px',
  color:'red'
};
const inputStyle = {
  margin:'15px',
  backgroundColor:'#CFCACA',
  borderRadius:'15px',
  border:'2px solid black'
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  onChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <Container>
        <h2 style={textStyle}>Marvel React App</h2>
          <input style={inputStyle} type="text" value={this.state.value} onChange={this.onChange.bind(this)}/>
        <HeroList search={this.state.value}/>
      </Container>
    );
  }
}

export default App;
