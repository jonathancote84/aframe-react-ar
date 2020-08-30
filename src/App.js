import React from 'react';


function App() {
  const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');
  console.log(distanceMsg);   
  return (
    <div className="App">
  <a-scene
    // background="color: #FAFAFA"
    vr-mode-ui="enabled: false;"
    renderer="logarithmicDepthBuffer: true;"
    embedded
    arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
  >
    <a-box material="color: yellow" gps-entity-place="latitude: 32.8990834; longitude: -96.6528592" position="0 30 0"/>
    <a-camera gps-camera rotation-reader></a-camera>
  </a-scene>
    </div>
  );
}

export default App;
