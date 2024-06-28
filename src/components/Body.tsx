import React, { useRef, useCallback } from "react";
import verifiedImage from "../utils/images/Twitter_Verified_Badge.svg.png";

interface BodyProps {
  chats: {
    id: string;
    message: string;
    time: string;
    sender: {
      self: boolean;
      image: string;
      is_kyc_verified: boolean;
    };
  }[];
  loading: boolean;
  fetchChatData: () => void;
}

const Body: React.FC<BodyProps> = ({ chats, loading, fetchChatData }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const getHour = (date: string) => {
    const part = date.split(" ");
    const time = part[1];
    const timeString = time.split(":");
    let hour = parseInt(timeString[0], 10);
    const minutes = timeString[1];

    let meridian = "AM";
    if (hour >= 12) {
      meridian = "PM";
    }
    if (hour > 12) {
      hour -= 12;
    } else if (hour === 0) {
      hour = 12;
    }

    return `${hour}:${minutes} ${meridian}`;
  };

  const observer = useRef<IntersectionObserver | null>(
    new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[entries.length - 1];
        if (lastEntry.isIntersecting && !loading) {
          fetchChatData();
        }
      },
      { threshold: 0.5 }
    )
  );

  const observeElement = useCallback(
    (node: Element | null) => {
      if (observer.current && node instanceof Element) {
        observer.current.observe(node);
      }
    },
    [loading, fetchChatData]
  );

  const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <div className="custom-chat mt-5 custom-scroll" ref={scrollRef}>
      <div className="container">
        <div className="row">
          <div className="text-wrapper">
            <div className="horizontal-line"></div>
            <span className="text-content fs-6 text-secondary">
              {chats.length > 0 ? formatDate(chats[0].time) : "28 Jun 2024"}
            </span>
            <div className="horizontal-line"></div>
          </div>
        </div>
      </div>

      {chats &&
        chats.length > 0 &&
        chats.map((message, index) => (
          <div
            className="d-flex justify-content-start align-items-start m-4"
            key={message.id}
            ref={index === chats.length - 1 ? observeElement : null}
          >
            {!message.sender.self && (
              <div className="position-relative">
                <img
                  src={message.sender.image}
                  alt=""
                  className="custom-profile"
                />
                {message.sender.is_kyc_verified && (
                  <img
                    src={verifiedImage}
                    alt=""
                    className="custom-verified position-absolute"
                  />
                )}
              </div>
            )}

            {message.sender.self ? (
              <div className="custom-sender-message w-75 text-white fw-light p-2 rounded-3 ms-auto me-2">
                {message.message}
              </div>
            ) : (
              <div className="custom-message w-75 text-black fw-light p-2 rounded-3 ms-3">
                {message.message}
              </div>
            )}
            <span className="custom-time ms-2">{getHour(message.time)}</span>
          </div>
        ))}

      {loading && (
        <h5 className="text-white bg-black p-3 rounded-4">Loading ...</h5>
      )}
    </div>
  );
};

export default Body;
