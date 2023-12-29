type bodyPartProps = {
  isShown: boolean;
};

const Head: React.FC<bodyPartProps> = ({ isShown }) => {
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
        opacity: isShown ? "100%" : "0",
        transition: "all 0.5s ease",
      }}
    ></div>
  );
};

const Body: React.FC<bodyPartProps> = ({ isShown }) => {
  return (
    <div
      style={{
        width: "10px",
        height: isShown ? "100px" : "0",
        background: "#000",
        position: "absolute",
        top: "118px",
        right: "0",
        transition: "height 0.5s ease",
      }}
    ></div>
  );
};

const LeftArm: React.FC<bodyPartProps> = ({ isShown }) => {
  return (
    <div
      style={{
        width: "10px",
        height: isShown ? "70px" : "0",
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

const RightArm: React.FC<bodyPartProps> = ({ isShown }) => {
  return (
    <div
      style={{
        width: "10px",
        height: isShown ? "70px" : "0",
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

const LeftLeg: React.FC<bodyPartProps> = ({ isShown }) => {
  return (
    <div
      style={{
        width: "10px",
        height: isShown ? "90px" : "0",
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

const RightLeg: React.FC<bodyPartProps> = ({ isShown }) => {
  return (
    <div
      style={{
        width: "10px",
        height: isShown ? "90px" : "0",
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

import React from "react";

type HangmanBodyProps = {
  numberOfIncorrectGuesses: number;
};

const HangmanBody: React.FC<HangmanBodyProps> = ({
  numberOfIncorrectGuesses,
}) => {
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
    <>
      {body.map((element, index) => (
        <element.component
          key={index}
          isShown={numberOfIncorrectGuesses >= element.threshold}
        />
      ))}
    </>
  );
};

export default HangmanBody;
