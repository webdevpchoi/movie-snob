import React from "react";
import { Link } from "react-router-dom";

//this component allows you to dynamically add the Link component to the MovieThumb component only when a movie is searched for
export default function MovieLink({ enabled, children, ...props }) {
  if (enabled) {
    return <Link {...props}>{children}</Link>;
  } else {
    return <div>{children}</div>;
  }
}
