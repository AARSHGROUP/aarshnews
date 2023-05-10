// 31.1.2 also here remove the component because all code is a "class based components"
// import React, { Component } from "react";
import React from "react";
import loading from "./loading.gif";

// 31.1.2.1 and also here remove 'CBCNT', and remove of inactive of "render" funciton. now go on "NewsItem.js" file with point 31.1.3
// export class Spinner extends Component {
const Spinner = () => {
  // render() {
  return (
    <div className="text-center">
      <img className="my-3" src={loading} alt="loading" />
    </div>
  );
  // }
};

export default Spinner;
