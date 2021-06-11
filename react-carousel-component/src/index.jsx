import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/135.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/136.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png'
];

const $root = document.querySelector('#root');
ReactDOM.render(< Carousel images={images}/>, $root);
