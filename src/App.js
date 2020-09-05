
import React from 'react';
import './App.css'

export default class App extends React.Component {


  componentDidMount(){

    const container = document.querySelector('.container')
    container.style.cursor='pointer';

    container.addEventListener('click', ()=> {
      container.style.backgroundColor='blue';
      container.style.color='#FFF';
      
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



