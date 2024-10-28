import "../../App.css";
import { useEffect, useState } from "react";

import Contact_Us from "../../Components/Contact_Us/Contact_Us";
import About_us from "../../Components/About_Us/About_us";
import Timeline from "../../Components/Timeline/Timeline";
import { BackgroundBoxesDemo } from "../../Components/Landing_Page/try";
import PageLoader from "../../Components/PageLoader/PageLoader";
import Events from "../../Components/Events/Events";
import Homee from "../../Components/Landing_Page/Landing_Page";
import LandingPage from "../../Components/Landing_Page/trying";

import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init();
  });

  const [hideLoader, setHideLoader] = useState(false);

  return (
    <>
      {hideLoader && <PageLoader setHideLoader={setHideLoader} />}
      {!hideLoader && (
        <>
          <div className="homeanim">
            {/* <BackgroundBoxesDemo /> */}
            {/* <LandingPage /> */}
            <Homee />
          </div>

          <About_us />
          <div className="slow">
            <Events />
          </div>
          <Timeline />
          {/* <Sponsors/>  */}
          <Contact_Us />
        </>
      )}
    </>
  );
}

export default Home;
