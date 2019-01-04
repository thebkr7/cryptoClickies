import React, { Component } from 'react';
import Sidecar from 'gitter-sidecar';

import AppWindow from './AppWindow.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    var myChat = new Sidecar({
      room: 'CryptoClickies/community',
      style: 'gitter-open-chat-button'
    });

    return (
      <div>
        <AppWindow />
      </div>
    );
  }
}

export default App;