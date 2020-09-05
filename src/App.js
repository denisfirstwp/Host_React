
import React from 'react';
import './App.css'

export default class App extends React.Component {


  componentDidMount() {
    const containerID = document.getElementById('chave');
    const container = document.querySelector('.container');
    container.style.height = '500px';
    container.style.cursor = 'pointer';

    const carretaFuracao = () => {
      alert('')
    }

    container.addEventListener('click', () => {
      container.style.color = '#FFF';
      container.style.backgroundColor = 'blue';
    })


  }



  render() {
    return (
      <div className='container' id='chave'>
        <h1>Fala ai galera !!!</h1>
        <h2>Fazendo um teste de hospedagem React !!!!</h2>
      </div>
    )
  }
}



