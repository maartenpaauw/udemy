import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'Testing!');

ReactDOM.render(template, document.getElementById('app'));
