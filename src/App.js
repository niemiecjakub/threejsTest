import React, {useContext} from 'react'
import InformationField from './components/InformationField'
import Cube from './components/Cube';
import { Canvas } from 'react-three-fiber';
import {DimentionsContext} from './DimentionsContext'
import './styles.css'
import {OrbitControls} from "drei"



function App() { 
  // eslint-disable-next-line
  const [dimentions, setDimentions] = useContext(DimentionsContext)

  return (
    <div className="App">
      <InformationField />
      <div className="canvas">
      <Canvas orthographic camera={{ zoom: 8, position: [50, 50, 300] }}>
        <ambientLight />
        <pointLight position={[100, 200, 1000]} />
        <spotLight angle={0.4} intensity={0.2}/>
        <OrbitControls />
          <Cube position={[0, 0, 0]} dimentions={dimentions}/>
      </Canvas>
      </div>
    </div>
  );
}

export default App;
