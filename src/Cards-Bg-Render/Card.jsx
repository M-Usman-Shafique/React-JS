import React from "react";
import "./Card.css";
import Box from "./Box.jsx";

function Card({ color, setColor }) {
  const arr = [
    {
      company: "Google",
      slogan: "Innovation is our Dream",
      myDate: new Date(2024, 5, 11),
    },
    {
      company: "Amazon",
      slogan: "Keep making History!",
      myDate: new Date(2024, 5, 11),
    },
    {
      company: "Meta",
      slogan: "Keep moving together!",
      myDate: new Date(2024, 5, 11),
    },
    {
      company: "OpenAI",
      slogan: "Benefit the Humanity!",
      myDate: new Date(2024, 5, 11),
    },
    {
      company: "SpaceX",
      slogan: "Occupy Mars!",
      myDate: new Date(2024, 5, 11),
    },
  ];

  return (
    <div className="container">
      {arr.map((item, index) => (
        <div key={index} className="card-item">
          <Box
            company={item.company}
            slogan={item.slogan}
            date={item.myDate}
            color={color}
            setColor={setColor}
          />
        </div>
      ))}
    </div>
  );
}

export default Card;
