import React from "react";

const HeaderPage = () => {
  return (
    <div className="header-component border flex-row justify-between items-center gap-10">
      <img
        src="/next-logo.png"
        alt="sample image"
        height={"70px"}
        width={"100px"}
      />
      <div className="search-box">{/* <input type="search" /> */}</div>
      <div className="notification">
        <img
          src="/notification.png"
          height={"30px"}
          width={"30px"}
          alt="notification"
        />
      </div>
    </div>
  );
};

export default HeaderPage;
