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
      image: "/val.png",
    },
    {
      title: "Estrange Bond",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "/bgmi.jpg",
    },
    {
      title: "The Gate Keeper",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "/FFFlogo.jpg",
    },
    {
      title: "Photography",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "/photography.jpg",
    },
    {
      title: "Urban Decay",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      image: "p2.jpg",
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
