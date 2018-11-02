import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');
//const holaMundo = <h1>Hola estudiante!</h1>;

// ReactDOM.render(qué, dónde)
render(<Media />, app);