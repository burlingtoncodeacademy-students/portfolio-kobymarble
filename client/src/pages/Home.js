import React from "react";
import Footer from "./Footer";

// The home portion of my portfolio which includes a picture
function Home() {
  return (
    <>
      <div>
        <h1>Behold, my portfolio!</h1>
        <img
          src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/04/02/5ac259d2b312500b48a85017_waldo2.jpg.rend.hgtvcom.1280.960.suffix/1573240432590.jpeg"
          width="400"
          height="400"
        />
        <p>
          My name is Koby Marble. As you may be able to tell im a baby software
          engineer. Im based out of the burlington area.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
