import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

// ReactDOM.render(qué, dónde)
render(<Media image="./images/covers/bitcoin.jpg" title="¿Qué es Responsive Design?" author="Almudena Guerras" />, app);