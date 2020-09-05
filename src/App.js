
import React from 'react';
import './App.css'

export default class App extends React.Component {


  componentDidMount() {


    const container = document.querySelector('.container')
    const marcus = document.querySelector('.mcv').style;
    const heart = document.querySelector('.fa-heart').style;
    container.style.cursor = 'pointer';
    let marcusSize = 12;
    let toggleMarcusSize = false;


    container.addEventListener('click', () => {

      container.classList.toggle('muda');

    })

    setInterval(() => {
      if (marcusSize < 130 && toggleMarcusSize === false) {
        marcusSize = marcusSize + 4;
      } else {
        marcusSize = marcusSize - 4;
        toggleMarcusSize = true
        if (marcusSize === 12) {
          toggleMarcusSize = false;
        }
      }
      console.log(marcusSize);
      container.classList.toggle('muda');
      marcus.fontSize = `${marcusSize}pt`;
      heart.fontSize = `${marcusSize}pt`;

    }, 50);
  }


  render() {
    return (
      <div className='container' id='chave'>
        <p className='mcv'>I LOVE YOU</p>
        <i class="fas fa-heart"></i>
      </div>
    )
  }
}



