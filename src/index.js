import React from 'react';
import ReactDOM from 'react-dom';
import ExportBox from './ExportBox'
var port = 3001;
var url= 'http://localhost:' + port + '/api/exports';


ReactDOM.render(
  <ExportBox
    url={url}
    pollInterval={20000} />,
  document.getElementById('root')
);
