import { useRouter } from "next/router";
import React from "react";

const SpecificEmpID = () => {
  const routeObject = useRouter();
  console.log("specific empid", routeObject.query);

  return (
    <div>
      Active employy_id={routeObject.query.emp_id} with name{" "}
      {routeObject.query.emp_name}
    </div>
  );
};

export default SpecificEmpID;
