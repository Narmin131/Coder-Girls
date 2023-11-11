import React from "react";

const Box = ({ name, surname }) => {
  return (
    <div style={{ border: "2px solid black" }}>
      User Info
      <h1>Username : {name}</h1>
      <h1>surname : {surname}</h1>
    </div>
  );
};

// props - 2 ve daha cox komponent arasinda melumati oturmek ucun istifade olunan react ozelliyi

export default Box;
