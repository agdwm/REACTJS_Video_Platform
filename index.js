import React from 'react';
import {render} from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';
import './src/general.css';
import './src/normalize.css';

const app = document.getElementById('app');

// ReactDOM.render(qué, dónde)
render(<Playlist data={data} />, app);