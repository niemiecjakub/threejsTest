import React, {useState, createContext} from 'react';

export const DimentionsContext = createContext()

export const DimentionsProvider = (props) => {
  const [dimentions, setDimentions] = useState({
    height: 30,
    width: 30,
    depth: 30,
    color: "#f134f3"
  })

  return (
    <DimentionsContext.Provider value={[dimentions, setDimentions]}>
      {props.children}
    </DimentionsContext.Provider>
  )
}