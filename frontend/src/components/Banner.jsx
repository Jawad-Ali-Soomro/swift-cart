import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , Environment } from '@react-three/drei'
import '../styles/banner.scss'
import Model from '../../public/Iphone'

const Banner = () => {
  return (
    <div>
        <Canvas>
            <ambientLight intensity={5} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    </div>
  )
}

export default Banner