import { useState } from 'react'
import './App.css'
import TruckScene from './components/TruckScene'
import BoxList from './components/BoxList'
import { sampleLoadingData } from './sampleData'

function App() {
  const [selectedBox, setSelectedBox] = useState(null)
  const [highlightedBoxId, setHighlightedBoxId] = useState(null)

  return (
    <div className="app">
      <div className="info-panel">
        <h1>Truck Loading Visualizer</h1>
        <p>Boxes loaded: {sampleLoadingData.boxes.length}</p>
        <p>Total weight: {sampleLoadingData.boxes.reduce((sum, box) => sum + box.weight, 0)} kg</p>
        <p>Total volume: {sampleLoadingData.boxes.reduce((sum, box) => sum + (box.dimensions.width * box.dimensions.height * box.dimensions.depth), 0).toFixed(2)} m³</p>
      </div>

      <BoxList
        boxes={sampleLoadingData.boxes}
        onBoxListHover={setHighlightedBoxId}
        highlightedBoxId={highlightedBoxId}
      />

      <div className="controls-hint">
        <h4>Controls</h4>
        <ul>
          <li>Left click + drag: Rotate</li>
          <li>Right click + drag: Pan</li>
          <li>Scroll: Zoom</li>
          <li>Hover boxes: Show details</li>
        </ul>
      </div>

      {selectedBox && (
        <div className="box-details">
          <h3>Box Details</h3>
          <div className="detail-row">
            <span className="detail-label">ID:</span>
            <span className="detail-value">{selectedBox.id}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Dimensions:</span>
            <span className="detail-value">
              {selectedBox.dimensions.width}m × {selectedBox.dimensions.height}m × {selectedBox.dimensions.depth}m
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Weight:</span>
            <span className="detail-value">{selectedBox.weight} kg</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Position:</span>
            <span className="detail-value">
              ({selectedBox.position.x.toFixed(1)}, {selectedBox.position.y.toFixed(1)}, {selectedBox.position.z.toFixed(1)})
            </span>
          </div>
          {selectedBox.label && (
            <div className="detail-row">
              <span className="detail-label">Label:</span>
              <span className="detail-value">{selectedBox.label}</span>
            </div>
          )}
        </div>
      )}

      <TruckScene
        loadingData={sampleLoadingData}
        onBoxHover={setSelectedBox}
        highlightedBoxId={highlightedBoxId}
      />
    </div>
  )
}

export default App
