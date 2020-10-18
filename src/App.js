import React from 'react';
import './App.css';
import { Header } from 'semantic-ui-react';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header as='h3' block>
          <h1>prima mea aplicatie react</h1>
       </Header>
      </div>
    )
  }
}

export default App;
