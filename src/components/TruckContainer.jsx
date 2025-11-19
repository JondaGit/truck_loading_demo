import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function TruckContainer({ dimensions }) {
  const { length, width, height } = dimensions
  const groupRef = useRef()

  // Create materials
  const wallMaterial = new THREE.MeshStandardMaterial({
    color: '#2c3e50',
    metalness: 0.8,
    roughness: 0.2,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide,
    depthWrite: false
  })

  const frameMaterial = new THREE.MeshStandardMaterial({
    color: '#34495e',
    metalness: 0.9,
    roughness: 0.1
  })

  const frameThickness = 0.1

  return (
    <group ref={groupRef}>
      {/* Back wall */}
      <mesh position={[-length / 2, height / 2, 0]} material={wallMaterial} renderOrder={-1}>
        <boxGeometry args={[0.05, height, width]} />
      </mesh>

      {/* Left wall */}
      <mesh position={[0, height / 2, -width / 2]} material={wallMaterial} renderOrder={-1}>
        <boxGeometry args={[length, height, 0.05]} />
      </mesh>

      {/* Right wall */}
      <mesh position={[0, height / 2, width / 2]} material={wallMaterial} renderOrder={-1}>
        <boxGeometry args={[length, height, 0.05]} />
      </mesh>

      {/* Top wall */}
      <mesh position={[0, height, 0]} material={wallMaterial} renderOrder={-1}>
        <boxGeometry args={[length, 0.05, width]} />
      </mesh>

      {/* Floor - more opaque */}
      <mesh
        position={[0, 0, 0]}
        receiveShadow
      >
        <boxGeometry args={[length, 0.1, width]} />
        <meshStandardMaterial
          color="#1a252f"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Frame edges - back */}
      <mesh position={[-length / 2, 0, -width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, frameThickness]} />
      </mesh>
      <mesh position={[-length / 2, 0, width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, frameThickness]} />
      </mesh>
      <mesh position={[-length / 2, height, -width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, frameThickness]} />
      </mesh>
      <mesh position={[-length / 2, height, width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, frameThickness]} />
      </mesh>

      {/* Frame edges - front */}
      <mesh position={[length / 2, 0, -width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, frameThickness]} />
      </mesh>
      <mesh position={[length / 2, 0, width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, frameThickness]} />
      </mesh>
      <mesh position={[length / 2, height, -width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, frameThickness]} />
      </mesh>
      <mesh position={[length / 2, height, width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, frameThickness]} />
      </mesh>

      {/* Vertical frame bars */}
      <mesh position={[-length / 2, height / 2, -width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, height, frameThickness]} />
      </mesh>
      <mesh position={[-length / 2, height / 2, width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, height, frameThickness]} />
      </mesh>
      <mesh position={[length / 2, height / 2, -width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, height, frameThickness]} />
      </mesh>
      <mesh position={[length / 2, height / 2, width / 2]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, height, frameThickness]} />
      </mesh>

      {/* Horizontal frame bars - top */}
      <mesh position={[0, height, -width / 2]} material={frameMaterial}>
        <boxGeometry args={[length, frameThickness, frameThickness]} />
      </mesh>
      <mesh position={[0, height, width / 2]} material={frameMaterial}>
        <boxGeometry args={[length, frameThickness, frameThickness]} />
      </mesh>
      <mesh position={[-length / 2, height, 0]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, width]} />
      </mesh>
      <mesh position={[length / 2, height, 0]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, width]} />
      </mesh>

      {/* Horizontal frame bars - bottom */}
      <mesh position={[0, 0, -width / 2]} material={frameMaterial}>
        <boxGeometry args={[length, frameThickness, frameThickness]} />
      </mesh>
      <mesh position={[0, 0, width / 2]} material={frameMaterial}>
        <boxGeometry args={[length, frameThickness, frameThickness]} />
      </mesh>
      <mesh position={[-length / 2, 0, 0]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, width]} />
      </mesh>
      <mesh position={[length / 2, 0, 0]} material={frameMaterial}>
        <boxGeometry args={[frameThickness, frameThickness, width]} />
      </mesh>
    </group>
  )
}

export default TruckContainer
