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
          gps-entity-place="latitude: <add-your-latitude>; longitude: <add-your-longitude>;"
        ></a-text>
        <a-camera gps-camera rotation-reader> </a-camera>
      </a-scene>
    </div>
  );
}

export default App;
