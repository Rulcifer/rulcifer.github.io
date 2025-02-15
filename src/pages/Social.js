import React, { useEffect, useState, useRef } from "react";
import "./Social.css";
import backgroundImage from "../assets/gtr.png";
import backgroundMusic from "../assets/music/billie.mp3";
import takoid from "../assets/icon/takoid.png";

const Social = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false); // State untuk mengelola status pemutaran
  const [volume, setVolume] = useState(0.5); // State untuk mengelola volume
  const [showVolumeSlider, setShowVolumeSlider] = useState(false); // State untuk mengontrol tampilan slider volume
  const audioRef = useRef(null);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitorCount");

    if (storedCount) {
      setVisitorCount(parseInt(storedCount, 10));
    } else {
      setVisitorCount(0);
    }

    const newCount = visitorCount + 54;
    setVisitorCount(newCount);
    localStorage.setItem("visitorCount", newCount);
  }, []);

  const handleAudioLoad = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume; // Mengatur volume
      audioRef.current.play(); // Mulai memutar audio
      setIsPlaying(true); // Mengubah status pemutaran
    }
  };

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Hentikan audio jika sedang bermain
      setIsPlaying(false);
    } else {
      handleAudioLoad(); // Mulai audio jika tidak bermain
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume; // Mengatur volume audio
    }
  };

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
      <audio ref={audioRef} src={backgroundMusic} autoPlay loop />
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
        {/* Tombol untuk memutar musik */}
        <div
          className="volume-container"
          style={{ position: "absolute", top: "10px", left: "10px" }}
        >
          <div
            className="volume-button-container"
            onMouseEnter={() => setShowVolumeSlider(true)}
            onMouseLeave={() => setShowVolumeSlider(false)} // Hide slider when mouse leaves
          >
            <button onClick={togglePlayPause} className="play-button">
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <mask id="ipTVolumeNotice0">
                      <g fill="none" stroke="#fff" strokeWidth="4">
                        <path
                          fill="#555"
                          strokeLinejoin="round"
                          d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M32 15a11.91 11.91 0 0 1 1.684 1.859A12.07 12.07 0 0 1 36 24c0 2.654-.846 5.107-2.278 7.09A11.936 11.936 0 0 1 32 33"
                        />
                        <path
                          strokeLinecap="round"
                          d="M34.236 41.186C40.084 37.696 44 31.305 44 24c0-7.192-3.796-13.496-9.493-17.02"
                        />
                      </g>
                    </mask>
                  </defs>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipTVolumeNotice0)"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <mask id="ipTVolumeMute0">
                      <mask
                        id="ipTVolumeMute1"
                        width="13"
                        height="13"
                        x="30"
                        y="18"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: "alpha" }}
                      >
                        <path d="M30 18h13v13H30z" />
                      </mask>
                      <g
                        fill="none"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth="4"
                      >
                        <g strokeLinecap="round" mask="url(#ipTVolumeMute1)">
                          <path d="m40.735 20.286l-8.486 8.485m.001-8.485l8.485 8.485" />
                        </g>
                        <path
                          fill="#555"
                          d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"
                        />
                      </g>
                    </mask>
                  </defs>
                  <path
                    fill="currentColor"
                    d="M0 0h48v48H0z"
                    mask="url(#ipTVolumeMute0)"
                  />
                </svg>
              )}
            </button>
            {showVolumeSlider && (
              <input
                type="range"
                className="volumeSlider"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                style={{
                  width: "100px",
                  marginLeft: "10px",
                }}
              />
            )}
          </div>
        </div>

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
                  {/* <a
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
                  </a> */}
                  <a
                    href="https://sociabuzz.com/rulch/tribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_link social_link_circle"
                  >
                    <img
                      src="https://storage.sociabuzz.com/storage/landingpage/img/sociabuzz-logo-icon.png"
                      alt="Sociabuzz"
                      className="social_icon"
                      style={{
                        width: "105%",
                        height: "105%",
                        maxWidth: "105%",
                        maxHeight: "105%",
                      }}
                    />
                    <span className="sr-only">Sociabuzz</span>
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
      </div>
    </section>
  );
};

export default Social;
