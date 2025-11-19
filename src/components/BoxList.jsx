import './BoxList.css'

function BoxList({ boxes, onBoxListHover, highlightedBoxId }) {
  return (
    <div className="box-list">
      <h3>Cargo Items ({boxes.length})</h3>
      <div className="box-list-items">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`box-list-item ${highlightedBoxId === box.id ? 'highlighted' : ''}`}
            onMouseEnter={() => onBoxListHover(box.id)}
            onMouseLeave={() => onBoxListHover(null)}
          >
            <div className="box-list-item-header">
              <div
                className="box-list-color-indicator"
                style={{ backgroundColor: box.color }}
              />
              <span className="box-list-id">{box.id}</span>
            </div>
            <div className="box-list-label">{box.label}</div>
            <div className="box-list-details">
              <div className="box-list-detail">
                <span className="label">Dim:</span>
                <span className="value">
                  {box.dimensions.width} × {box.dimensions.height} × {box.dimensions.depth}m
                </span>
              </div>
              <div className="box-list-detail">
                <span className="label">Weight:</span>
                <span className="value">{box.weight} kg</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoxList
