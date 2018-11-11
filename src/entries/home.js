import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';

const app = document.getElementById('app');

// ReactDOM.render(qué, dónde)
render(<Home data={data}/>, app);