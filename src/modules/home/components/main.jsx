import React from "react";
import User from "./user";
import Banner from "./banner";
import Category from "./category";
function Main() {
  return (
    <div className="container mx-auto bg-white border rounded-md p-4">
      <div className="flex gap-4">
        <Category />
        <Banner />
        <User />
      </div>
    </div>
  );
}

export default Main;
