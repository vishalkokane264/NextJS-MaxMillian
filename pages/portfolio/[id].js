import React from "react";
import { useRouter } from "next/router";
export const DetailPortgolioPage = ({ params }) => {
  const routeObject = useRouter();
  console.log(routeObject);
  console.log(routeObject.query);
  return <div>dynamic id page:{routeObject.query.id}</div>;
};

export default DetailPortgolioPage;
