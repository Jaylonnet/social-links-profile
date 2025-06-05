import React from "react";

const Link = ({ text, url }) => {
  return (
    <li>
      <a href={url} className="link">
        {text}
      </a>
    </li>
  );
};

export default Link;
