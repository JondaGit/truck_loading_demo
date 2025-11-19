import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function CargoBox({ box, onHover, highlightedBoxId }) {
  const meshRef = useRef()
  const materialRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [scale, setScale] = useState(1)
  const [opacity, setOpacity] = useState(1)

  const { dimensions, position, color, id, weight, label } = box
  const { width, height, depth } = dimensions

  // Check if this box is highlighted from the list
  const isHighlighted = highlightedBoxId === id
  const isDimmed = highlightedBoxId && !isHighlighted

  // Animate scale and opacity
  useFrame(() => {
    const targetScale = (hovered || isHighlighted) ? 1.08 : 1
    const targetOpacity = isDimmed ? 0.2 : 1

    setScale(prev => THREE.MathUtils.lerp(prev, targetScale, 0.1))
    setOpacity(prev => THREE.MathUtils.lerp(prev, targetOpacity, 0.1))

    if (meshRef.current) {
      meshRef.current.scale.set(scale, scale, scale)
    }

    if (materialRef.current) {
      materialRef.current.opacity = opacity
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
        ref={materialRef}
        color={color}
        metalness={0.3}
        roughness={0.4}
        emissive={(hovered || isHighlighted) ? color : '#000000'}
        emissiveIntensity={(hovered || isHighlighted) ? 0.4 : 0}
        transparent
        opacity={opacity}
      />

      {/* Edge highlights */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(width, height, depth)]} />
        <lineBasicMaterial
          color={(hovered || isHighlighted) ? '#ffffff' : '#000000'}
          linewidth={(hovered || isHighlighted) ? 2 : 1}
          opacity={(hovered || isHighlighted) ? 1 : (isDimmed ? 0.1 : 0.3)}
          transparent
        />
      </lineSegments>
    </mesh>
  )
}

export default CargoBox
