import React, { Component } from 'react';
import ButtonList from 'components/ButtonList';
import CountList from 'components/CountList';
import data from 'components/ButtonList/data.json';
import { Container, TitleText } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <Container>
        <TitleText>Please leave yor feedback</TitleText>
        <ButtonList elemets={data} />
        <TitleText>Statistic</TitleText>
        <CountList />
      </Container>
    );
  }
}

export default App;
