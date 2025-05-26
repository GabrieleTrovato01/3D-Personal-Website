import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Experience } from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas camera={{
      fov: 64,
      position: [2.3,1.5,2.3]
    }}>
      <Experience/>
    </Canvas>
  )
}

export default App
