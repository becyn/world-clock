import React from 'react';
import { render } from 'react-dom';
import { TopContainer } from './container/TopContainer/index';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TopContainer />;
  }
}

render(<AppContainer />, document.getElementById('app'));
