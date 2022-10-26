import React from "react";
import "./style.css";
import headerImg from "./img/illustration-hero.svg";
import musicIcon from "./img/icon-music.svg";

function OrderSummaryCard() {
  return (
    <main id="container">
      <div id="header-img">
        <img src={headerImg} alt="header illustration" />
      </div>
      <section id="order-summary">
        <h1>Order Summary</h1>
        <p id="copy">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <article id="summary">
          <div id="music-icon">
            <img src={musicIcon} alt="music icon" />
          </div>
          <div id="plan-info">
            <b>Annual Plan</b> <span id="price">$59.99/year</span>
          </div>
          <a href="#" id="change-plan">
            Change
          </a>
        </article>
      </section>
      <section id="buttons">
        <a href="#" id="proceed">
          Proceed to Payment
        </a>
        <a href="#" id="cancel">
          Cancel Order
        </a>
      </section>
    </main>
  );
}
export default OrderSummaryCard;
