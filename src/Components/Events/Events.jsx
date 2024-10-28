import "./Events.css";
import { useRef } from "react";
import "swiper/css";

const Events = () => {
  const sliderRef = useRef(null);

  const items = [
    {
      title: "Lossless Youths",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
    },
    {
      title: "Estrange Bond",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "https://i.redd.it/tc0aqpv92pn21.jpg",
    },
    {
      title: "The Gate Keeper",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg",
    },
    {
      title: "Last Trace Of Us",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "https://images7.alphacoders.com/878/878663.jpg",
    },
    {
      title: "Urban Decay",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image:
        "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg",
    },
    {
      title: "The Migration",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
    },
  ];

  const handleNext = () => {
    const items = sliderRef.current.children;
    sliderRef.current.appendChild(items[0]); // Move first item to the end
  };

  const handlePrev = () => {
    const items = sliderRef.current.children;
    sliderRef.current.prepend(items[items.length - 1]); // Move last item to the front
  };

  return (
    <div className="events" id="Events">
      <div className="events_con">
        <div className="events_head">
          <h2>EVENTS</h2>
          <p>Click on event card to know more !!</p>
        </div>
        <div className="event_con">
          <ul className="slider" ref={sliderRef}>
            {items.map((item, index) => (
              <li
                className="item"
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="content">
                  <h2 className="title">{item.title}</h2>
                  <p className="description">{item.description}</p>
                  <button>Read More</button>
                </div>
              </li>
            ))}
          </ul>
          <nav className="nav">
            <button className="btn prev" onClick={handlePrev}>
              <ion-icon name="arrow-back-outline"></ion-icon>
            </button>
            <button className="btn next" onClick={handleNext}>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Events;
