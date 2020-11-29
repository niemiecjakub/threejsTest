import React from 'react';

const Cube = (props) => {
  const {width, height, depth, color} = props.dimentions

  return (
  <mesh 
  {...props}
  // scale={[width, height, depth]}
  >
    <boxBufferGeometry  attach="geometry" args={[width, height, depth]}/>
    <meshStandardMaterial attach="material" color={color} transparent />
  </mesh>
  )
}

export default Cube


