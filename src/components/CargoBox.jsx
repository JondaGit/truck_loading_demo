import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function CargoBox({ box, onHover }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [scale, setScale] = useState(1)

  const { dimensions, position, color, id, weight, label } = box
  const { width, height, depth } = dimensions

  // Animate scale on hover
  useFrame(() => {
    const targetScale = hovered ? 1.05 : 1
    setScale(prev => THREE.MathUtils.lerp(prev, targetScale, 0.1))
    if (meshRef.current) {
      meshRef.current.scale.set(scale, scale, scale)
    }
  })

  const handlePointerOver = (e) => {
    e.stopPropagation()
    setHovered(true)
    onHover(box)
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = (e) => {
    e.stopPropagation()
    setHovered(false)
    onHover(null)
    document.body.style.cursor = 'default'
  }

  return (
    <mesh
      ref={meshRef}
      position={[position.x, position.y, position.z]}
      castShadow
      receiveShadow
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        color={color}
        metalness={0.3}
        roughness={0.4}
        emissive={hovered ? color : '#000000'}
        emissiveIntensity={hovered ? 0.3 : 0}
      />

      {/* Edge highlights */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(width, height, depth)]} />
        <lineBasicMaterial
          color={hovered ? '#ffffff' : '#000000'}
          linewidth={hovered ? 2 : 1}
          opacity={hovered ? 1 : 0.3}
          transparent
        />
      </lineSegments>
    </mesh>
  )
}

export default CargoBox
