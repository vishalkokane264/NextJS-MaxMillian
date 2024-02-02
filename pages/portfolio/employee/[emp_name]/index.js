import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const routeObject = useRouter();
  console.log("default emp", routeObject.query);
  return <div>Default emp id page {routeObject.query.emp_name}</div>;
};

export default index;
