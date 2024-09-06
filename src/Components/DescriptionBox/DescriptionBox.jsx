import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to [Your E-commerce Website Name], where convenience meets
          quality. Discover thousands of products across fashion, electronics,
          and more. Enjoy seamless navigation and secure transactions for a
          hassle-free experience. Our dedicated customer support team is here to
          assist you every step of the way. With fast shipping and a
          satisfaction guarantee, shop confidently with us today!
        </p>
        <p>
          At [Your E-commerce Website Name], we pride ourselves on delivering an
          unparalleled online shopping experience tailored just for you. Whether
          you're searching for the latest fashion trends, must-have gadgets, or
          everyday essentials, we've got you covered.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
