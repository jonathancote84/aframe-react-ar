import React from 'react';


function App() {
  return (
    <div className="App">
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
      >
        <a-text
          value="This content will always face you."
          look-at="[gps-camera]"
          scale="120 120 120"
          gps-entity-place="latitude: 32.898342; longitude: -96.6538096;"
        ></a-text>
        <a-camera gps-camera rotation-reader> </a-camera>
      </a-scene>
    </div>
  );
}

export default App;
