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
          jumbotronData.map((item) => (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                <Jumbotron.Image src={item.image} alt={item.alt} />      
              </Jumbotron.Pane>
            </Jumbotron>
         ))
        }
      </Jumbotron.Container>
    </div>
  );
}