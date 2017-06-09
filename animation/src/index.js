import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';

let options = {
    fps: 20,
    num_particles: 10,
    max_particle_age: 100,
};

let url = "/data-paths.json";

// TODO: public folder node env
ReactDOM.render(<AppContainer data_url={url} options={options}/>,
 document.getElementById('root'));
