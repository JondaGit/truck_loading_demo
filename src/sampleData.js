// Sample truck loading data
// Truck interior dimensions (in meters): 12m length x 2.4m width x 2.4m height
export const sampleLoadingData = {
  truckDimensions: {
    length: 12,
    width: 2.4,
    height: 2.4
  },
  boxes: [
    // Bottom layer - Row 1 (front to back along length, left side)
    {
      id: 'BOX-001',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: -5.4, y: 0.5, z: -0.6 },
      weight: 250,
      color: '#ff6b6b',
      label: 'Electronics'
    },
    {
      id: 'BOX-002',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: -4.2, y: 0.5, z: -0.6 },
      weight: 200,
      color: '#4ecdc4',
      label: 'Furniture'
    },
    {
      id: 'BOX-003',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: -3.0, y: 0.5, z: -0.6 },
      weight: 300,
      color: '#45b7d1',
      label: 'Machinery'
    },
    {
      id: 'BOX-004',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: -1.8, y: 0.5, z: -0.6 },
      weight: 180,
      color: '#f9ca24',
      label: 'Tools'
    },
    {
      id: 'BOX-005',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: -0.6, y: 0.5, z: -0.6 },
      weight: 220,
      color: '#f0932b',
      label: 'Supplies'
    },
    {
      id: 'BOX-006',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: 0.6, y: 0.5, z: -0.6 },
      weight: 190,
      color: '#eb4d4b',
      label: 'Equipment'
    },
    {
      id: 'BOX-007',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: 1.8, y: 0.5, z: -0.6 },
      weight: 280,
      color: '#6c5ce7',
      label: 'Parts'
    },
    {
      id: 'BOX-008',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: 3.0, y: 0.5, z: -0.6 },
      weight: 240,
      color: '#a29bfe',
      label: 'Components'
    },
    {
      id: 'BOX-009',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: 4.2, y: 0.5, z: -0.6 },
      weight: 210,
      color: '#fd79a8',
      label: 'Accessories'
    },
    {
      id: 'BOX-010',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: 5.4, y: 0.5, z: -0.6 },
      weight: 195,
      color: '#fdcb6e',
      label: 'Materials'
    },

    // Bottom layer - Row 2 (right side)
    {
      id: 'BOX-011',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: -5.4, y: 0.5, z: 0.6 },
      weight: 230,
      color: '#00b894',
      label: 'Hardware'
    },
    {
      id: 'BOX-012',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: -4.2, y: 0.5, z: 0.6 },
      weight: 215,
      color: '#00cec9',
      label: 'Devices'
    },
    {
      id: 'BOX-013',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: -3.0, y: 0.5, z: 0.6 },
      weight: 205,
      color: '#0984e3',
      label: 'Instruments'
    },
    {
      id: 'BOX-014',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: -1.8, y: 0.5, z: 0.6 },
      weight: 225,
      color: '#74b9ff',
      label: 'Gadgets'
    },
    {
      id: 'BOX-015',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: -0.6, y: 0.5, z: 0.6 },
      weight: 235,
      color: '#a29bfe',
      label: 'Modules'
    },
    {
      id: 'BOX-016',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: 0.6, y: 0.5, z: 0.6 },
      weight: 245,
      color: '#ff7675',
      label: 'Sensors'
    },
    {
      id: 'BOX-017',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: 1.8, y: 0.5, z: 0.6 },
      weight: 255,
      color: '#fab1a0',
      label: 'Controllers'
    },
    {
      id: 'BOX-018',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: 3.0, y: 0.5, z: 0.6 },
      weight: 265,
      color: '#ffeaa7',
      label: 'Displays'
    },
    {
      id: 'BOX-019',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: 4.2, y: 0.5, z: 0.6 },
      weight: 275,
      color: '#dfe6e9',
      label: 'Monitors'
    },
    {
      id: 'BOX-020',
      dimensions: { width: 1.2, height: 1.0, depth: 1.2 },
      position: { x: 5.4, y: 0.5, z: 0.6 },
      weight: 285,
      color: '#55efc4',
      label: 'Panels'
    },

    // Second layer - Row 1
    {
      id: 'BOX-021',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -5.6, y: 1.4, z: -0.6 },
      weight: 120,
      color: '#81ecec',
      label: 'Small Parts'
    },
    {
      id: 'BOX-022',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -4.8, y: 1.4, z: -0.6 },
      weight: 115,
      color: '#ff6348',
      label: 'Fasteners'
    },
    {
      id: 'BOX-023',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -4.0, y: 1.4, z: -0.6 },
      weight: 110,
      color: '#ffa502',
      label: 'Cables'
    },
    {
      id: 'BOX-024',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -3.2, y: 1.4, z: -0.6 },
      weight: 125,
      color: '#ff4757',
      label: 'Adapters'
    },
    {
      id: 'BOX-025',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -2.4, y: 1.4, z: -0.6 },
      weight: 118,
      color: '#3742fa',
      label: 'Connectors'
    },
    {
      id: 'BOX-026',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -1.6, y: 1.4, z: -0.6 },
      weight: 122,
      color: '#2ed573',
      label: 'Switches'
    },
    {
      id: 'BOX-027',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -0.8, y: 1.4, z: -0.6 },
      weight: 128,
      color: '#ffa502',
      label: 'Relays'
    },
    {
      id: 'BOX-028',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: 0, y: 1.4, z: -0.6 },
      weight: 130,
      color: '#ff6348',
      label: 'Capacitors'
    },
    {
      id: 'BOX-029',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: 0.8, y: 1.4, z: -0.6 },
      weight: 135,
      color: '#1e90ff',
      label: 'Resistors'
    },
    {
      id: 'BOX-030',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: 1.6, y: 1.4, z: -0.6 },
      weight: 112,
      color: '#5f27cd',
      label: 'Diodes'
    },

    // Second layer - Row 2
    {
      id: 'BOX-031',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -5.6, y: 1.4, z: 0.6 },
      weight: 108,
      color: '#00d2d3',
      label: 'Transistors'
    },
    {
      id: 'BOX-032',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -4.8, y: 1.4, z: 0.6 },
      weight: 105,
      color: '#c44569',
      label: 'ICs'
    },
    {
      id: 'BOX-033',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -4.0, y: 1.4, z: 0.6 },
      weight: 114,
      color: '#f78fb3',
      label: 'PCBs'
    },
    {
      id: 'BOX-034',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -3.2, y: 1.4, z: 0.6 },
      weight: 119,
      color: '#3c6382',
      label: 'Wires'
    },
    {
      id: 'BOX-035',
      dimensions: { width: 0.8, height: 0.8, depth: 1.2 },
      position: { x: -2.4, y: 1.4, z: 0.6 },
      weight: 116,
      color: '#38ada9',
      label: 'Terminals'
    },

    // Top layer - small boxes filling gaps
    {
      id: 'BOX-036',
      dimensions: { width: 0.6, height: 0.6, depth: 0.6 },
      position: { x: -5.7, y: 2.1, z: -0.9 },
      weight: 60,
      color: '#e17055',
      label: 'Screws'
    },
    {
      id: 'BOX-037',
      dimensions: { width: 0.6, height: 0.6, depth: 0.6 },
      position: { x: -5.1, y: 2.1, z: -0.9 },
      weight: 55,
      color: '#6c5ce7',
      label: 'Bolts'
    },
    {
      id: 'BOX-038',
      dimensions: { width: 0.6, height: 0.6, depth: 0.6 },
      position: { x: -4.5, y: 2.1, z: -0.9 },
      weight: 58,
      color: '#00b894',
      label: 'Nuts'
    },
    {
      id: 'BOX-039',
      dimensions: { width: 0.6, height: 0.6, depth: 0.6 },
      position: { x: -3.9, y: 2.1, z: -0.9 },
      weight: 62,
      color: '#fdcb6e',
      label: 'Washers'
    },
    {
      id: 'BOX-040',
      dimensions: { width: 0.6, height: 0.6, depth: 0.6 },
      position: { x: -3.3, y: 2.1, z: -0.9 },
      weight: 57,
      color: '#fd79a8',
      label: 'Clips'
    }
  ]
}
