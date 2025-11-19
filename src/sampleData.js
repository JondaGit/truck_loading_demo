// Sample truck loading data
// Truck interior dimensions (in meters): 12m length x 2.4m width x 2.4m height
export const sampleLoadingData = {
  truckDimensions: {
    length: 12,
    width: 2.4,
    height: 2.4
  },
  boxes: [
    // Bottom layer - larger boxes
    {
      id: 'BOX-001',
      dimensions: { width: 1.2, height: 1.0, depth: 1.0 },
      position: { x: -5, y: 0.5, z: 0 },
      weight: 250,
      color: '#ff6b6b',
      label: 'Electronics'
    },
    {
      id: 'BOX-002',
      dimensions: { width: 1.0, height: 1.0, depth: 1.0 },
      position: { x: -3.5, y: 0.5, z: 0 },
      weight: 200,
      color: '#4ecdc4',
      label: 'Furniture'
    },
    {
      id: 'BOX-003',
      dimensions: { width: 1.5, height: 1.0, depth: 1.0 },
      position: { x: -1.75, y: 0.5, z: 0 },
      weight: 300,
      color: '#45b7d1',
      label: 'Machinery'
    },
    {
      id: 'BOX-004',
      dimensions: { width: 1.0, height: 1.0, depth: 1.0 },
      position: { x: 0, y: 0.5, z: 0 },
      weight: 180,
      color: '#f9ca24',
      label: 'Tools'
    },
    {
      id: 'BOX-005',
      dimensions: { width: 1.2, height: 1.0, depth: 1.0 },
      position: { x: 1.35, y: 0.5, z: 0 },
      weight: 220,
      color: '#f0932b',
      label: 'Supplies'
    },
    {
      id: 'BOX-006',
      dimensions: { width: 1.0, height: 1.0, depth: 1.0 },
      position: { x: 2.8, y: 0.5, z: 0 },
      weight: 190,
      color: '#eb4d4b',
      label: 'Equipment'
    },
    {
      id: 'BOX-007',
      dimensions: { width: 1.5, height: 1.0, depth: 1.0 },
      position: { x: 4.5, y: 0.5, z: 0 },
      weight: 280,
      color: '#6c5ce7',
      label: 'Parts'
    },

    // Second layer - medium boxes
    {
      id: 'BOX-008',
      dimensions: { width: 0.8, height: 0.8, depth: 0.8 },
      position: { x: -5, y: 1.4, z: 0 },
      weight: 120,
      color: '#a29bfe',
      label: 'Components'
    },
    {
      id: 'BOX-009',
      dimensions: { width: 0.8, height: 0.8, depth: 0.8 },
      position: { x: -4, y: 1.4, z: 0 },
      weight: 110,
      color: '#fd79a8',
      label: 'Accessories'
    },
    {
      id: 'BOX-010',
      dimensions: { width: 1.0, height: 0.8, depth: 0.8 },
      position: { x: -2.9, y: 1.4, z: 0 },
      weight: 150,
      color: '#fdcb6e',
      label: 'Materials'
    },
    {
      id: 'BOX-011',
      dimensions: { width: 0.8, height: 0.8, depth: 0.8 },
      position: { x: -1.6, y: 1.4, z: 0 },
      weight: 130,
      color: '#00b894',
      label: 'Hardware'
    },
    {
      id: 'BOX-012',
      dimensions: { width: 0.8, height: 0.8, depth: 0.8 },
      position: { x: -0.6, y: 1.4, z: 0 },
      weight: 125,
      color: '#00cec9',
      label: 'Devices'
    },
    {
      id: 'BOX-013',
      dimensions: { width: 1.0, height: 0.8, depth: 0.8 },
      position: { x: 0.7, y: 1.4, z: 0 },
      weight: 140,
      color: '#0984e3',
      label: 'Instruments'
    },
    {
      id: 'BOX-014',
      dimensions: { width: 0.8, height: 0.8, depth: 0.8 },
      position: { x: 2, y: 1.4, z: 0 },
      weight: 115,
      color: '#74b9ff',
      label: 'Gadgets'
    },
    {
      id: 'BOX-015',
      dimensions: { width: 0.8, height: 0.8, depth: 0.8 },
      position: { x: 3, y: 1.4, z: 0 },
      weight: 105,
      color: '#a29bfe',
      label: 'Modules'
    },

    // Top layer - small boxes
    {
      id: 'BOX-016',
      dimensions: { width: 0.6, height: 0.6, depth: 0.6 },
      position: { x: -5, y: 2.1, z: 0 },
      weight: 60,
      color: '#ff7675',
      label: 'Small Parts'
    },
    {
      id: 'BOX-017',
      dimensions: { width: 0.6, height: 0.6, depth: 0.6 },
      position: { x: -4.2, y: 2.1, z: 0 },
      weight: 55,
      color: '#fab1a0',
      label: 'Fasteners'
    },
    {
      id: 'BOX-018',
      dimensions: { width: 0.6, height: 0.6, depth: 0.6 },
      position: { x: -3.4, y: 2.1, z: 0 },
      weight: 50,
      color: '#ffeaa7',
      label: 'Cables'
    },
    {
      id: 'BOX-019',
      dimensions: { width: 0.6, height: 0.6, depth: 0.6 },
      position: { x: -2.6, y: 2.1, z: 0 },
      weight: 65,
      color: '#dfe6e9',
      label: 'Adapters'
    },
    {
      id: 'BOX-020',
      dimensions: { width: 0.6, height: 0.6, depth: 0.6 },
      position: { x: -1.8, y: 2.1, z: 0 },
      weight: 58,
      color: '#55efc4',
      label: 'Connectors'
    }
  ]
}
