import React from 'react';
import ReactDOM from 'react-dom';
import PersonBox from './PersonBox'

ReactDOM.render(
  <PersonBox
    url='http://localhost:3001/api/people'
    pollInterval={2000} />,
  document.getElementById('root')
);
