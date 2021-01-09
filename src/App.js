import React from 'react';
import './App.css';
import Jumbotron from './components/jumbotron';
import jumbotronData from './fixtures/jumbotrons';

export default function App() {
  return (
    <div className="App">
      {/* 
          Encapsulate all three Jumbotrons
          Loop through all of them
      */}
      <Jumbotron.Container>
        {
          jumbotronData.map((item) => {
            return <Jumbotron key={item.id} direction={item.direction}>
              <p>{item.title}</p>
              <p>{item.subTitle}</p>
              <img src={item.image} alt={item.alt}></img>
            </Jumbotron>
          })
        }
      </Jumbotron.Container>
    </div>
  );
}