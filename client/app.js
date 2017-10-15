import React from 'react';

require('./styles/main.scss');

const App = props => (
  <div id="wrapper">
    { props.children }
  </div>
);

export default App;
