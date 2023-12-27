const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid #000",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "#000",
      position: "absolute",
      top: "120px",
      right: "0",
    }}
  ></div>
);

const LEFT_ARM = (
  <div
    style={{
      width: "10px",
      height: "70px",
      background: "#000",
      transform: "rotate(35deg)",
      position: "absolute",
      top: "125px",
      right: "20px",
    }}
  ></div>
);

const RIGHT_ARM = (
  <div
    style={{
      width: "10px",
      height: "70px",
      background: "#000",
      transform: "rotate(-35deg)",
      position: "absolute",
      top: "125px",
      right: "-20px",
    }}
  ></div>
);

const LEFT_LEG = (
  <div
    style={{
      width: "10px",
      height: "90px",
      background: "#000",
      transform: "rotate(35deg)",
      position: "absolute",
      top: "205px",
      right: "25px",
    }}
  ></div>
);

const RIGHT_LEG = (
  <div
    style={{
      width: "10px",
      height: "90px",
      background: "#000",
      transform: "rotate(-35deg)",
      position: "absolute",
      top: "205px",
      right: "-25px",
    }}
  ></div>
);

const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
      {HEAD}
      {LEFT_ARM}
      {RIGHT_ARM}
      {BODY}
      {LEFT_LEG}
      {RIGHT_LEG}
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
