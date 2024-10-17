import React, { useEffect, useState, useRef } from "react";
import "./Social.css";
import backgroundImage from "../assets/gtr.png";
import backgroundMusic from "../assets/music/billie.mp3";

const Social = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");

    if (storedCount) {
      setVisitorCount(parseInt(storedCount, 10));
    } else {
      setVisitorCount(0);
    }

    const newCount = visitorCount + 1;
    setVisitorCount(newCount);
    localStorage.setItem("visitorCount", newCount);
  }, []);

  return (
    <section
      className="main"
      style={{
        "--dark-color": "#000",
        "--light-color": "#fff",
        "background-color": "rgb(209 213 219 / 1)",
        "--text-color": "#fcfcfc",
        "--link-color": "51, 51, 51",
        "--link-background": "239, 239, 239",
        "--link-shadow": "102, 102, 102",
        "--link-border": "51, 51, 51",
        color: "51, 51, 51",
      }}
    >
      <audio src={backgroundMusic} autoPlay loop volume={volume / 100} />{" "}
      {/* Menambahkan musik latar */}
      <div className="background">
        <div
          className="background_image"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Gunakan gambar yang diimpor
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            position: "fixed",
            top: "-2.5rem",
            left: "-2.5rem",
            right: "-2.5rem",
            bottom: "-2.5rem",
            filter: "blur(5px)",
          }}
        >
          <div className="overlay" />
        </div>
      </div>
      <div className="bg_container">
        <div className="container">
          <div className="container_component">
            <div className="profile">
              <div className="profile_image"></div>
              <div className="text text_center text_large">
                <span style={{ fontWeight: "bold" }}>Rulcifer</span>
              </div>
              <div className="text text_center">
                <h4>
                  Hai brokk, Aku live tiap weekend semoga kalian enjoy dengan
                  kontennya gaiss!
                </h4>
              </div>
              <div className="container_social">
                <div className="social-tree">
                  <a
                    href="https://saweria.co/rulch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_link social_link_circle"
                  >
                    <img
                      src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcapy_happy.603c7293.svg&w=384&q=75"
                      alt="Saweria"
                      className="social_icon"
                      style={{
                        width: "105%",
                        height: "105%",
                        maxWidth: "105%",
                        maxHeight: "105%",
                      }}
                    />
                    <span className="sr-only">Saweria</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@rulcifer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_link social_link_circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80%"
                      height="80%"
                      viewBox="1.99 5 20.01 14.01"
                      style={{
                        maxWidth: "90%",
                        maxHeight: "90%",
                      }}
                    >
                      <path
                        fill="currentColor"
                        d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765c1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6l5.207 3.005l-5.212 2.995z"
                      ></path>
                    </svg>
                    <span className="sr-only">Youtube</span>
                  </a>
                  <a
                    href="https://discord.gg/M5AERFR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_link social_link_circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90%"
                      height="90%"
                      viewBox="1.96 4.26 20.03 15.53"
                    >
                      <path
                        fill="currentColor"
                        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1a14.66 14.66 0 0 0-4.58 0a10.14 10.14 0 0 0-.53-1.1a16 16 0 0 0-4.13 1.3a17.33 17.33 0 0 0-3 11.59a16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83a3.39 3.39 0 0 0 .42-.33a11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84a12.41 12.41 0 0 0 1.08 1.78a16.44 16.44 0 0 0 5.06-2.59a17.22 17.22 0 0 0-3-11.59a16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.93 1.93 0 0 1 1.8 2a1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.92 1.92 0 0 1 1.8 2a1.92 1.92 0 0 1-1.8 2z"
                      ></path>
                    </svg>
                    <span className="sr-only">Discord</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@rulcifer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_link social_link_circle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="78%"
                      height="78%"
                      viewBox="3.2 2 17.43 19.99"
                    >
                      <path
                        fill="currentColor"
                        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                      ></path>
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Visitor Count Display */}
            <div
              className="user-profile-views"
              style={{
                display: "flex",
                alignItems: "center",
                bottom: "12px",
                left: "15px",
              }}
            >
              <span
                style={{
                  fontWeight: 550,
                  fontSize: "14.5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  style={{ marginRight: "5px" }}
                >
                  <path
                    fill="currentColor"
                    d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                  ></path>
                </svg>
                {visitorCount}
              </span>
            </div>
            {/* Visitor Count Display */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
