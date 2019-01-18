 import React from 'react';
 import { render } from 'react-dom';
 import Home from '../pages/containers/home.js';
 import data from '../api.json';

 const homeContainer = document.getElementById('home-container');
 //ReactDom.render(que voy a renderizar, donde lo hare);
 //ReactDom.render(<Media title="Porque aprender React?..." author="Roger Garzia" image="./images/covers/responsive.jpg"/> , app);
 //render(<Media title="Porque aprender React?..." author="Roger Garzia" image="./images/covers/responsive.jpg"/> , app);
 render(<Home data={data} /> , homeContainer);
