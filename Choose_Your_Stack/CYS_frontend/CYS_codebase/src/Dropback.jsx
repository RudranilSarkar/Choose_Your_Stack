import { useState } from "react";
function Dropback({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Flask","Node"];
  return (
    <div className="drop">
      <div className="drop-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="drop-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="drop-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropback;
