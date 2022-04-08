import * as React from "react";
import headshot from "../images/headshot.png";
import Image from "../components/image"


const HeadshotImage = () => {
  return (
    <div>
      <Image src={headshot} alt="Photo of Jeremy Mann" />
    </div>
  );
};

export default HeadshotImage;
