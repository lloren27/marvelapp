import React, { Component } from 'react';
import HeroList from '../components/HeroList';
import styled from 'styled-components'; //styled-components, el objeto que importamos (styled) nos permite crear componentes que rendericen etiquetas HTML con estilos
import { getHeroes } from '../utils/api';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: red;
`;

class HeroesLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      loading: true,
    };
    
  }

  componentDidUpdate() {
  let text = this.props.search
  console.log(text)
  getHeroes(text)
      .then((res) => {
        this.setState({
          heroes: res.data.data.results,
          loading: false,
        });
      })
      .catch((err) =>console.log(err));
  }

renderHeroes = () => {
    const { heroes } = this.state;

    return heroes.map((hero,i)=> {
      const { name,thumbnail,description} = hero;
      const image = thumbnail.path +'.'+ thumbnail.extension;

      return (
        <HeroList
          key={i}
          name ={name}
          image ={image}
          description ={description}
        />
      );
    });
  }

render() {
    const { loading } = this.state;

    return (
      <Container>
        {loading ? 'loading...' : this.renderHeroes()}
      </Container>
    );
  }
}

export default HeroesLists;