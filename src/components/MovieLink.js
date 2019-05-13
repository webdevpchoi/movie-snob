import React from "react";
import { Link } from "react-router-dom";

//this component allows you to dynamically add the Link component to the MovieThumb component only when a movie is searched for
export default function MovieLink({ enable, children, ...props }) {
  if (enable) {
    return <Link {...props}>{children}</Link>;
  } else {
    return <div>{children}</div>;
  }
}
