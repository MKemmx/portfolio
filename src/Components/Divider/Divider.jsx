import React from "react";
import "./DividerCSS.css";

// React Count Up with Sensor
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

// React Icons
import { MdMeetingRoom } from "react-icons/md";
import { BiCoffeeTogo } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";

const Divider = () => {
  const dividerContent = [
    {
      name: "Cups of Coffee",
      number: 321,
      icon: <BiCoffeeTogo size={50} />,
    },
    {
      name: "React Projects",
      number: 4,
      icon: <AiOutlineProject size={50} />,
    },
    {
      name: "Seminars",
      number: 2,
      icon: <MdMeetingRoom size={50} />,
    },
  ];

  return (
    <div className="divider">
      <div className="divider-container">
        {dividerContent.map((item) => (
          <div className="card">
            <div className="card-icon">{item.icon}</div>
            <div className="card-text">
              <h2>
                <CountUp start={0} end={item.number} duration="2">
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              </h2>
              <p> {item.name} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Divider;
