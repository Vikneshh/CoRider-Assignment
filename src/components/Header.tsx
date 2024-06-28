import React, { useState, useEffect } from "react";
import useFetchProfile from "../hooks/useFetchProfile";

interface HeaderProps {
  data: {
    name: string;
    from: string;
    to: string;
  };
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const [profile, setProfile] = useState<string>("");
  const { profile: profilePic } = useFetchProfile();

  useEffect(() => {
    setProfile(profilePic);
  }, [profilePic]);

  return (
    <div
      id="chat"
      className="w-100 text-black border-2 p-3 rounded-3 shadow-sm custom-chat"
    >
      <div
        id="chat-number"
        className="d-flex justify-content-between align-items-center"
      >
        <div>
          <i className="bi bi-arrow-left"></i>
          <span className="ms-3 fw-bold">{data.name}</span>
        </div>
        <div>
          <i className="bi bi-pencil-square"></i>
        </div>
      </div>
      <div
        id="chat-journey-details"
        className="d-flex justify-content-between mt-4"
      >
        <div className="d-flex justify-content-between">
          <img src={profile} alt="" className="custom-profile" />
          <div className="ms-4">
            From <span className="fw-bold">{data.from}</span> <br />
            To <span className="fw-bold">{data.to}</span>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-three-dots-vertical"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <div className="dropdown-item">
                <i className="bi bi-people"></i>
                <span className="ms-2">Member</span>
              </div>
            </li>
            <li>
              <div className="dropdown-item">
                <i className="bi bi-telephone"></i>
                <span className="ms-2">Share Number</span>
              </div>
            </li>
            <li>
              <div className="dropdown-item">
                <i className="bi bi-exclamation-circle-fill"></i>
                <span className="ms-2">Report</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
