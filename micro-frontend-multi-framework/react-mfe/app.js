import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  render() {
    const reactVersion = require('./package.json').dependencies['react'];
    const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg';
    const youtubeID = 'Cb73KivI_KE';

    return ([
        <h1 key='mfe'>
         <img style= {{marginRight: "10px"}} src={logoUrl} height="30"></img>
          React MFE
        </h1>,



        <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
        </iframe>
    ])
  }
}

class ReactMfe extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('react-element', ReactMfe);
