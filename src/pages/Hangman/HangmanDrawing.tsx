import React from "react";

type bodyPartProps = {
  isShow: boolean;
};

const Head: React.FC<bodyPartProps> = ({ isShow }) => {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid #000",
        position: "absolute",
        top: "50px",
        right: "-30px",
        opacity: isShow ? "100%" : "0",
        transition: "all 0.5s ease",
      }}
    ></div>
  );
};

const Body: React.FC<bodyPartProps> = ({ isShow }) => {
  return (
    <div
      style={{
        width: "10px",
        height: isShow ? "100px" : "0",
        background: "#000",
        position: "absolute",
        top: "118px",
        right: "0",
        transition: "height 0.5s ease",
      }}
    ></div>
  );
};

const LeftArm: React.FC<bodyPartProps> = ({ isShow }) => {
  return (
    <div
      style={{
        width: "10px",
        height: isShow ? "70px" : "0",
        background: "#000",
        transform: "rotate(35deg)",
        position: "absolute",
        top: "125px",
        right: "0",
        transition: "height 0.5s ease",
        transformOrigin: "top left",
      }}
    ></div>
  );
};

const RightArm: React.FC<bodyPartProps> = ({ isShow }) => {
  return (
    <div
      style={{
        width: "10px",
        height: isShow ? "70px" : "0",
        background: "#000",
        transform: "rotate(-35deg)",
        position: "absolute",
        top: "130px",
        right: "0",
        transition: "height 0.5s ease",
        transformOrigin: "top left",
      }}
    ></div>
  );
};

const LeftLeg: React.FC<bodyPartProps> = ({ isShow }) => {
  return (
    <div
      style={{
        width: "10px",
        height: isShow ? "90px" : "0",
        background: "#000",
        transform: "rotate(35deg)",
        position: "absolute",
        top: "212px",
        right: "0",
        transition: "height 0.5s ease",
        transformOrigin: "top left",
      }}
    ></div>
  );
};

const RightLeg: React.FC<bodyPartProps> = ({ isShow }) => {
  return (
    <div
      style={{
        width: "10px",
        height: isShow ? "90px" : "0",
        background: "#000",
        transform: "rotate(-35deg)",
        position: "absolute",
        top: "216px",
        right: "0",
        transition: "height 0.5s ease",
        transformOrigin: "top left",
      }}
    ></div>
  );
};

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing: React.FC<HangmanDrawingProps> = ({ numberOfGuesses }) => {
  const body = [
    {
      component: Head,
      threshold: 1,
    },
    {
      component: Body,
      threshold: 2,
    },
    {
      component: LeftArm,
      threshold: 3,
    },
    {
      component: RightArm,
      threshold: 4,
    },
    {
      component: LeftLeg,
      threshold: 5,
    },
    {
      component: RightLeg,
      threshold: 6,
    },
  ];

  return (
    <div style={{ position: "relative" }}>
      {body.map((element) => (
        <element.component isShow={numberOfGuesses >= element.threshold} />
      ))}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "#000",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "#000",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "#000",
          marginLeft: "120px",
        }}
      ></div>
      <div style={{ height: "10px", width: "250px", background: "#000" }}></div>
    </div>
  );
};

export default HangmanDrawing;
