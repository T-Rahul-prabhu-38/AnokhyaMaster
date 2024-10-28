import "./Events.css";
import { useRef } from "react";
import "swiper/css";
import event_data from "../../Assets/Data/Events_data.json";

const Events = () => {
  const sliderRef = useRef(null);

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
            {event_data.map((ele, index) => (
              <li
                className="item"
                key={index}
                style={{ backgroundImage: `url(${ele.img_path})` }}
              >
                <div className="content">
                  <h2 className="title">{ele.title}</h2>
                  <p className="description">{ele.event_description}</p>
                  <a href={`/events/${ele.event_id}`}>Explore More</a>
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
