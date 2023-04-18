import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import kom1 from "../assets/img/kom1.svg";
import kom2 from "../assets/img/kom2.svg";
import kom3 from "../assets/img/kom3.svg";
import kom4 from "../assets/img/kom4.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/sosmed-bg-1.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Social Media</h2>
                        <p>Let's go, we can play games together, just add me to your game's social media.<br></br> Let's get connected.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <a  href="https://steamcommunity.com/id/Rulcifer/" ><img src={kom1} alt="Image"/></a>
                                <h5>Steam</h5>
                            </div>
                            <div className="item">
                                <a href="https://discord.gg/invite/Zwsd9Yc" ><img src={kom2} alt="Image" /></a>
                                <h5>My Discord Server</h5>
                            </div>
                            <div className="item">
                                <a href="https://open.spotify.com/user/vp8tenwxx312w18ud1sti37hg?si=e14b0577541e445d"><img src={kom3} alt="Image" /></a>
                                <h5>Spotify</h5>
                            </div>
                            <div className="item">
                            <a href="https://www.youtube.com/channel/UC_AcBp1MR3v0qn7UEd5SJUg"><img src={kom4} alt="Image" /></a>
                                <h5>YT Channel</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
