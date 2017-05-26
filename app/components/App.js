import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Popular from './Popular';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

export default App
