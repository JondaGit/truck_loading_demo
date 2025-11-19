# Truck Loading Visualizer

A 3D interactive visualization tool for truck loading algorithms built with React and Three.js.

## Features

- **3D Truck Container Visualization**: Transparent truck container with metallic frame showing interior space
- **Efficient Packing Display**: 40 tightly-packed boxes demonstrating optimal space utilization across multiple layers
- **Interactive Cargo Boxes**: Color-coded boxes representing loaded cargo with hover effects
- **Sidebar Cargo List**: Scrollable list showing all boxes with:
  - Color indicators
  - Box IDs and labels
  - Dimensions and weight
  - Hover-to-highlight interaction
- **Smart Highlighting System**:
  - Hover over items in the sidebar list to highlight them in 3D
  - Other boxes become transparent to focus on the selected box
  - Smooth animations for all transitions
- **Camera Controls**:
  - Left click + drag: Rotate view
  - Right click + drag: Pan
  - Mouse wheel: Zoom in/out
- **Box Details Panel**: Hover over any box to see detailed information including:
  - Box ID
  - Dimensions (width × height × depth)
  - Weight
  - Position coordinates
  - Custom labels
- **Loading Statistics**: Real-time display of:
  - Total boxes loaded (40 boxes)
  - Total weight
  - Total volume

## Installation

```bash
npm install
```

## Running the Application

Development mode:
```bash
npm run dev
```

Then open your browser to `http://localhost:5173`

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── TruckScene.jsx       # Main 3D canvas and scene setup
│   ├── TruckContainer.jsx   # 3D truck container model
│   ├── CargoBox.jsx         # Individual cargo box component
│   ├── BoxList.jsx          # Sidebar cargo list component
│   └── BoxList.css          # Cargo list styles
├── sampleData.js            # Sample truck loading data (40 boxes)
├── App.jsx                  # Main application component
├── App.css                  # Application styles
├── main.jsx                 # React entry point
└── index.css                # Global styles
```

## Customizing Loading Data

Edit `src/sampleData.js` to customize the truck dimensions and cargo boxes:

```javascript
export const sampleLoadingData = {
  truckDimensions: {
    length: 12,  // meters
    width: 2.4,
    height: 2.4
  },
  boxes: [
    {
      id: 'BOX-001',
      dimensions: { width: 1.2, height: 1.0, depth: 1.0 },
      position: { x: -5, y: 0.5, z: 0 },
      weight: 250,
      color: '#ff6b6b',
      label: 'Electronics'
    },
    // Add more boxes...
  ]
}
```

## Technologies Used

- **React**: UI framework
- **Three.js**: 3D graphics library
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Useful helpers for React Three Fiber
- **Vite**: Build tool and development server

## Future Enhancements

- Import loading algorithm output from JSON/CSV files
- Animation of the loading process
- Multiple view modes (side, top, front)
- Weight distribution visualization
- Export visualization as image/video
- Real-time loading algorithm simulation

## License

MIT
