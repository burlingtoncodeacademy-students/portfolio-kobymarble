import React from "react";
import Footer from "./Footer";
// Work history page with a downloadable link to my resume
function WorkHistory() {
  return (
    <>
      <div>
        <h1>Carreer Goals:</h1>
        <p>
          Working with a software development company that is involved in
          something im passionate about. Devoloping software for grocery stores
          also interest me quite a lot, because when I was in that industry i
          had to use a lot of software that i felt was janky and did not
          consider the time contraints of someone in that field, so improving on
          the ease of use in those systems could be very fun.
        </p>
        <h1>Work Experience:</h1>
        <p>
          For the past 10 years i have worked as a meat manager at the
          supermarket chain Price Chopper. My responsibilities were managing me
          to assure the department would be ready for business by every morning,
          ordering the product, cutting meat for the custom and self-serve
          cases, scheduling to make sure we had the proper help depending on how
          busy it was, keeping track of dates in the meat case to insure no out
          of code product was being sold, and doing monthly inventories.
        </p>
        <h1>Skills and Experience:</h1>
        <p>
          I have recently learned the following programming languages:
          javascripts, css, html, and react. Ive also had experience with the
          databases mongodb and firebase.
        </p>
        <a id= "resume" href="images/resume.png" download>
          resume
        </a>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default WorkHistory;
