import React from 'react';
import './Social.css'

const Social = () => {
  return (
    <section className="main" style={{ 
      '--dark-color': '#000',
      '--light-color': '#fff',
      'background-color': 'rgb(209 213 219 / 1)',
      '--text-color': '#fcfcfc',
      '--link-color': '51, 51, 51',
      '--link-background': '239, 239, 239',
      '--link-shadow': '102, 102, 102',
      '--link-border': '51, 51, 51',
      'color': '51, 51, 51'
    }}>
      <div className="background">
        <div className="background_image"></div>
      </div>
      <div className="bg_container">
        <div className="container">
          <div className="container_component">
            <div className="profile">
              <div className="profile_image"></div>
              <div className="text text_center text_large">
                <span style={{ fontWeight: 'bold' }}>Rulcifer</span>
              </div>
              <div className="text text_center">
                <h4>Hai brokk, Aku live tiap weekend semoga kalian enjoy dengan kontennya gaiss!</h4>
              </div>
              <div className="container_social">
                <div className="social-tree">
                  <a
                    href="https://www.youtube.com/@rulcifer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_link social_link_circle"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="social_icon"
                    >
                      <title>Youtube</title>
                      <path d="M12,20.55c-.3,0-7.279-.006-9.115-.5A3.375,3.375,0,0,1,.5,17.665,29.809,29.809,0,0,1,0,12,29.824,29.824,0,0,1,.5,6.334,3.375,3.375,0,0,1,2.885,3.948c1.836-.492,8.819-.5,9.115-.5s7.279.006,9.115.5A3.384,3.384,0,0,1,23.5,6.334,29.97,29.97,0,0,1,24,12a29.97,29.97,0,0,1-.5,5.666,3.384,3.384,0,0,1-2.388,2.386C19.279,20.544,12.3,20.55,12,20.55Zm0-16.1c-.072,0-7.146.006-8.857.464A2.377,2.377,0,0,0,1.464,6.593,29.566,29.566,0,0,0,1,12a29.566,29.566,0,0,0,.464,5.407,2.377,2.377,0,0,0,1.679,1.679c1.711.458,8.785.464,8.857.464s7.146-.006,8.857-.464a2.377,2.377,0,0,0,1.679-1.679A29.66,29.66,0,0,0,23,12a29.66,29.66,0,0,0-.464-5.407h0a2.377,2.377,0,0,0-1.679-1.679C19.146,4.456,12.071,4.45,12,4.45ZM9.7,15.95a.5.5,0,0,1-.5-.5V8.55a.5.5,0,0,1,.75-.433l5.975,3.45a.5.5,0,0,1,0,.866L9.95,15.883A.5.5,0,0,1,9.7,15.95Zm.5-6.534v5.168L14.675,12Z" />
                    </svg>
                    <span className="sr-only">Youtube</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@rulcifer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social_link social_link_circle"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="social_icon"
                    >
                      <title>TikTok</title>
                      <path
                        d="M9.37,23.5a7.468,7.468,0,0,1,0-14.936.537.537,0,0,1,.538.5v3.8a.542.542,0,0,1-.5.5,2.671,2.671,0,1,0,2.645,2.669.432.432,0,0,1,0-.05V1a.5.5,0,0,1,.5-.5h3.787a.5.5,0,0,1,.5.5A4.759,4.759,0,0,0,21.59,5.76a.5.5,0,0,1,.5.5L22.1,10a.533.533,0,0,1-.519.515,9.427,9.427,0,0,1-4.741-1.268v6.789A7.476,7.476,0,0,1,9.37,23.5ZM8.908,9.585a6.466,6.466,0,1,0,6.93,6.447V8.326a.5.5,0,0,1,.791-.407A8.441,8.441,0,0,0,21.1,9.5l-.006-2.76A5.761,5.761,0,0,1,15.859,1.5H13.051V16.032a.458.458,0,0,1,0,.053,3.672,3.672,0,1,1-4.14-3.695Z"
                      />
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </a>
                </div>
              </div>
              <div className="container_link">
                <div className="link_outer">
                  <a href="https://saweria.co/rulch" target="_blank" rel="noopener noreferrer" className="link link_circle link_circle_shadow">
                    <div className="link_icon">
                      <img className="link_image" src="https://drive.google.com/thumbnail?id=1C1cgRnCot9pcr2W225iVFH8v-9DUBwMP" alt="Git" />
                    </div>
                    <div className="link_outer_text">
                      <div className="text text_center">
                        <strong>Saweria & Mediashare</strong>
                      </div>
                    </div>
                    <div className="link_end"></div>
                  </a>
                </div>
              </div>
              <div className="container_link">
                {/* <div className="link_outer">
                  <a href="https://tako.id/@Rulcifer" target="_blank" rel="noopener noreferrer" className="link link_circle link_circle_shadow">
                    <div className="link_icon">
                      <img className="link_image" src="https://drive.google.com/thumbnail?id=1NzGr8eepk9-N4-34RcYS_TfXPGPUlos5" alt="GitHub" />
                    </div>
                    <div className="link_outer_text">
                      <div className="text text_center">
                        <strong>Tako Coin</strong>
                      </div>
                    </div>
                    <div className="link_end"></div>
                  </a>
                </div> */}
              </div>
              <div className="container_link">
                <div className="link_outer">
                  <a href="https://discord.gg/M5AERFR" target="_blank" rel="noopener noreferrer" className="link link_circle link_circle_shadow">
                    <div className="link_icon">
                      <img className="link_image" src="https://drive.google.com/thumbnail?id=1ewsFHFT04iWSgt7oSCvZC9FVvZkcT9rY" alt="CodePen" />
                    </div>
                    <div className="link_outer_text">
                      <div className="text text_center">
                        <strong>Discord Server</strong>
                      </div>
                    </div>
                    <div className="link_end"></div>
                  </a>
                </div>
              </div>
              <div className="container_link">
                <div className="link_outer">
                  <a href="https://www.youtube.com/watch?v=UrQrlrLDNw4&list=PLr6vFHGUyD2CuQk3Yh4AaoTwwYEs2XGsu&ab_channel=Rulcifer" target="_blank" rel="noopener noreferrer" className="link link_circle link_circle_shadow">
                    <div className="link_icon">
                      <img className="link_image" src="https://drive.google.com/thumbnail?id=17IfMuB1Ezjom1NkwYg7pCt0k8CmJhCHy" alt="CodePen" />
                    </div>
                    <div className="link_outer_text">
                      <div className="text text_center">
                        <strong>Replay Live Project Zomboid</strong>
                      </div>
                    </div>
                    <div className="link_end"></div>
                  </a>
                </div>
              </div>
              <div className="container_link">
                <div className="link_outer">
                  <a href="https://www.youtube.com/watch?v=7Ucl-URXxBE&list=PLr6vFHGUyD2BibzE69sou9hx7iFQYB2Zv&index=1&ab_channel=Rulcifer" target="_blank" rel="noopener noreferrer" className="link link_circle link_circle_shadow">
                    <div className="link_icon">
                      <img className="link_image" src="https://drive.google.com/thumbnail?id=14yfrqpfWbcqJarTGayx5nCpR4h9J83Aq" alt="CodePen" />
                    </div>
                    <div className="link_outer_text">
                      <div className="text text_center">
                        <strong>Kisah Mail Project Zomboid</strong>
                      </div>
                    </div>
                    <div className="link_end"></div>
                  </a>
                </div>
              </div>
              <div className="container_link">
                <div className="link_outer">
                  <a href="https://www.youtube.com/watch?v=jB4DT0Krt98&list=PLr6vFHGUyD2D5t_YEHsiKbNLMft5SllZP&index=1&ab_channel=Rulcifer" target="_blank" rel="noopener noreferrer" className="link link_circle link_circle_shadow">
                    <div className="link_icon">
                      <img className="link_image" src="https://drive.google.com/thumbnail?id=1Zq2g2MhncpKKC_9OUV549NnHeAzJeDNR" alt="CodePen" />
                    </div>
                    <div className="link_outer_text">
                      <div className="text text_center">
                        <strong>Main Horror</strong>
                      </div>
                    </div>
                    <div className="link_end"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="copyright">
              <p>&copy; 2024 Rulcifer.</p>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Social;

