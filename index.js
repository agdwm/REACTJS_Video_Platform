import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

// ReactDOM.render(qué, dónde)
render(<Media type="video" image="./images/covers/responsive.jpg" title="¿Qué es Responsive Design?" author="Almudena Guerras" />, app);