import "./Landing_Page.css";
//import Alert_mssg from '../../Components/Alert_mssg/Alert_mssg'

import logo from "../../Assets/LPMV/Logo.png";
import banner from "../../Assets/LPMV/Banner.png";

const AnimatedBackground = () => {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
      
      .background-grid {
        background-color: #0a0a0a;
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 40px 40px;
        position: relative;
        overflow: hidden;
      }
      
      .background-grid::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(0, 0, 255, 0.2) 1px, transparent 1px),
          linear-gradient(rgba(0, 0, 255, 0.2) 1px, transparent 1px);
        background-size: 40px 40px;
        animation: lightup 5s linear infinite;
      }
      
      @keyframes lightup {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
      }
    `}</style>
  );
};

const LandingPage = () => {
  return (
    <div className="background-grid h-screen flex items-center justify-center font-[Inter]">
      <AnimatedBackground />

      <div className="text-center text-white px-4">
        <div className="inline-block bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded-full mb-4">
          Exciting announcement{" "}
          <span role="img" aria-label="party popper">
            🎉
          </span>
        </div>

        <div className="flex justify-center space-x-4">
          <div className="home_m">
            <div className="home_m_top_left">
              <h3>TECH FEST 2024</h3>
              <p>EVENTS WORKSHOPS TECH-TALKS</p>
              <p style={{ color: "yellow" }}>8th - 9th MAY 2024</p>
            </div>
            <div className="home_m_logo">
              <img src={logo} alt="" />
            </div>
            <div className="home_m_banner">
              <img src={banner} alt="" />
            </div>
            <div className="home_m_buttons">
              <a href="/Anokhya.pdf">BROCHURE</a>
              <a href="#Events">EVENTS</a>
              <a href="#Timeline">TIMELINE</a>
            </div>
            <div className="home_m_info">
              <p>Brought to you by</p>
              <h4>DAYANANDA SAGAR COLLEGE OF ENGINEERING</h4>
              <h5>Department of Artificial Intelligence & Machine Learning</h5>
            </div>
            <div className="home_m_links">
              <div>
                <a href="https://www.instagram.com/_anokhya?igsh=MTR5Y3lhejA1NHZpMw==">
                  <i
                    className="fa-brands fa-instagram"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
              </div>
              <div>
                <a href="https://discord.com/invite/Mg6Re2Kt">
                  <i
                    className="fa-brands fa-discord"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
              </div>
              <div>
                <a href="mailto:techfest@anokhya.com">
                  <i
                    className="fa-solid fa-envelope"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
