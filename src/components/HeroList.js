import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid #333;
  box-sizing: border-box;
  margin: 10px;
  min-width: 280px;
  padding: 0 20px;
  width: 30%;
  background-color: #fff;
`;
const imgStyle = {
  width:'200px',
};

const Hero = ({name,image,description}) => {
  return (
    <Container>
      <h1>Nombre: {name}</h1>
      <img  style={imgStyle} src = {image} alt="hero description"/>
      <p>Descripción:{description}</p>
    </Container>
  );
};

export default Hero;
