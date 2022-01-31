import React from 'react';
import DenseAppBar from './components/AppBar';
import Main from './components/TodoList';

class App extends React.Component {
  render () {
    return (
      <div>
        <DenseAppBar />
        <br />
        <Main />
      </div>
    );
  }
}

export default App;
