import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid, Sky, Environment } from '@react-three/drei'
import TruckContainer from './TruckContainer'
import CargoBox from './CargoBox'

function TruckScene({ loadingData, onBoxHover }) {
  return (
    <Canvas
      camera={{ position: [15, 10, 15], fov: 50 }}
      shadows
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[-10, 10, -10]} intensity={0.5} />

      {/* Environment */}
      <Sky sunPosition={[100, 20, 100]} />
      <Environment preset="sunset" />

      {/* Grid for reference */}
      <Grid
        args={[30, 30]}
        cellSize={1}
        cellThickness={0.5}
        cellColor="#6c757d"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#495057"
        fadeDistance={50}
        fadeStrength={1}
        followCamera={false}
        position={[0, -0.01, 0]}
      />

      {/* Truck container */}
      <TruckContainer dimensions={loadingData.truckDimensions} />

      {/* Cargo boxes */}
      {loadingData.boxes.map((box) => (
        <CargoBox
          key={box.id}
          box={box}
          onHover={onBoxHover}
        />
      ))}

      {/* Camera controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={5}
        maxDistance={50}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

export default TruckScene
