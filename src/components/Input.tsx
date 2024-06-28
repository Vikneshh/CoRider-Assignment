import React from "react";

const Input: React.FC = () => {
  return (
    <div className="w-75">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type Your message"
        />
        <div className="input-group-append">
          <button
            className="btn"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-paperclip"></i>
          </button>
          <ul className="dropdown-menu bg-success">
            <li className="d-inline-flex">
              <span className="dropdown-item">
                <i className="bi bi-camera"></i>
              </span>
            </li>
            <li className="d-inline-flex">
              <span className="dropdown-item">
                <i className="bi bi-camera-video"></i>
              </span>
            </li>
            <li className="d-inline-flex">
              <span className="dropdown-item">
                <i className="bi bi-file-earmark-arrow-down-fill"></i>
              </span>
            </li>
          </ul>
        </div>
        <button className="btn" type="button">
          <i className="bi bi-send"></i>
        </button>
      </div>
    </div>
  );
};

export default Input;
