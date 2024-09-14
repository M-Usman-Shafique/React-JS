import React from "react";
import "./Box.css";

function Heading({ company }) {
  return <h1 className="color-white">{company}</h1>;
}

function Paragraph({ slogan }) {
  return <p className="color-white">{slogan}</p>;
}

function DateComponent({ date }) {
  return <h4 className="color-white">{date.toLocaleDateString()}</h4>;
}

function Button() {
  return (
    <div>
      <button className="btn">Learn more</button>
    </div>
  );
}

function Box({ company, slogan, date, color }) {
  return (
    <>
      <div style={{ backgroundColor: color }} className="inner">
        <Heading company={company} />
        <Paragraph slogan={slogan} />
        <DateComponent date={date} />
        <Button />
      </div>
    </>
  );
}

export default Box;