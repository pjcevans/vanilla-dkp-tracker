import React from 'react';
import ReactDOM from 'react-dom';
import ExportBox from './ExportBox'
var port = process.env.PORT || 3001;


ReactDOM.render(
  <ExportBox
    url='https://localhost:3001/api/exports'
    pollInterval={20000} />,
  document.getElementById('root')
);
