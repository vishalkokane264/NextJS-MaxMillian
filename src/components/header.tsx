import React from "react";
import swiggyIcon from "./../assets/swiggy-logo.svg";
import notificationIcon from "./../assets/notification.png";
const HeaderPage = () => {
  return (
    <div className="header-component border flex-row justify-between items-center gap-10">
      <img
        src={swiggyIcon.src}
        alt="sample image"
        height={"100px"}
        width={"100px"}
      />
      <div className="search-box">{/* <input type="search" /> */}</div>
      <div className="notification">
        <img
          src={notificationIcon.src}
          height={"30px"}
          width={"30px"}
          alt="notification"
        />
      </div>
    </div>
  );
};

export default HeaderPage;
